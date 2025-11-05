# QuakeShelter TW

**QuakeShelter TW** is a web application that visualizes real-time earthquake events in Taiwan and locates nearby emergency shelters.  
The service integrates live seismic data from Taiwan's Central Weather Administration (CWA) with government-provided shelter datasets and presents them through an interactive map and statistical charts.

Taiwan experiences over **18,000 earthquakes annually**, with more than **1,000 felt events**. This system aims to support disaster preparedness by providing fast access to seismic information and designated shelter locations.

---

## Features

- Real-time earthquake visualization (Leaflet)
- Government shelter location display
- Magnitude-based earthquake filtering
- Magnitude distribution chart (Chart.js)
- Click earthquake marker → show shelters within radius
- User location simulation for nearest shelter lookup
- Serverless API proxy for CWA data (Vercel, Node.js)

---

## Tech Stack

| Category | Technology |
|---------|-----------|
Frontend | HTML, CSS, JavaScript  
Mapping | Leaflet.js  
Charts | Chart.js  
Backend Proxy | Vercel Serverless Functions (Node.js)  
Data Source | CWA Open Data API, Taiwan NDC Shelter Dataset  
Deployment | Vercel  

---

## Project Structure

