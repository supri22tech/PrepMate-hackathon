# KrishiKavach AI

A responsive WhatsApp-style crop disease and micro-climate advisory application for farmers.

## Features
- Seven-language interface with instant translation
- Leaf image upload and one-click sample diseased leaf
- Open-Meteo city geocoding and 12-hour weather forecast
- Gemini 2.5 Flash multilingual leaf analysis
- Crop/disease, severity, spraying window, and organic/chemical treatment advice
- Loading, validation, and API error states

## Tech Stack
- Python and Flask
- HTML, CSS, and JavaScript
- Google Gemini API
- Open-Meteo Geocoding and Forecast APIs

## Run locally
1. Install dependencies: `pip install -r requirements.txt`
2. Add `GEMINI_API_KEY=your_key` to `.env`
3. Start the app: `python app.py`
4. Open `http://localhost:5000`