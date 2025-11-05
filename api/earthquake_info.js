const API_KEY = process.env.CWA_API_KEY;

const CWA_URL =
  "https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0015-002?Authorization=${API_KEY}&limit=20";

export default async function handler(request, response) {
  if (!API_KEY) {
    return response.status(500).json({ error: "API key is not configured" });
  }

  try {
    const apiResponse = await fetch(CWA_URL);

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      return response.status(apiResponse.status).json({
        error: `External API call failed: ${apiResponse.statusText}`,
        details: errorText,
      });
    }

    const data = await apiResponse.json();

    response.status(200).json(data);
  } catch (error) {
    console.error("Function Error:", error);
    response
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
