![Screenshot_11-May_19-51-02_17957](https://github.com/user-attachments/assets/e8983ddd-5f9c-4409-b84b-d77341945f7c)

![Screenshot_11-May_19-51-47_3761](https://github.com/user-attachments/assets/cc104673-0b72-48e9-aea5-c0a6cddc90b7)

![Screenshot_11-May_19-52-11_22679](https://github.com/user-attachments/assets/2d3021fa-5c73-4178-8a90-1d1872dfb228)

![Screenshot_11-May_19-52-33_20814](https://github.com/user-attachments/assets/007909d3-caa2-44dd-bfe2-4abc14ba7619)

 Real-Time Traffic Accident Predictor
🌐 Overview

Real-Time Traffic Accident Predictor is a full-stack web application designed to predict traffic accident risks based on real-time data. It uses machine learning for risk prediction, interactive maps for visualization, and SMS/email alerts for emergency notifications. The app is focused on improving road safety and minimizing accident risks through proactive data analysis.
🛠️ Tech Stack

    Frontend: React.js (Vite, TypeScript, React Query, Axios, Leaflet for interactive maps, styled-components for styling)

    Backend: Flask (Python) with a pre-trained machine learning model

    APIs: Real-time Traffic API, Weather API, Twilio API for SMS, Email API (like SendGrid)

    Database: MongoDB for storing predictions and alert logs

📁 Project Structure

real-time-accident-predictor/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── MapView.tsx
│   │   │   ├── RiskForm.tsx
│   │   │   └── PredictionResults.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Dashboard.tsx
│   │   ├── utils/
│   │   │   └── api.ts
│   │   └── App.tsx
│   ├── public/
│   └── package.json
├── server/
│   ├── app.py
│   ├── models/
│   │   └── accident_predictor.pkl
│   ├── routes/
│   │   ├── predict.py
│   │   ├── alert.py
│   └── requirements.txt
├── README.md

💡 Key Features

    Real-Time Risk Prediction: Predict accident risk based on location, traffic, and weather data.

    Interactive Map: Visualize high-risk zones using Leaflet.

    Instant Alerts: Send SMS and email alerts for high-risk predictions.

    Data Logging: Store prediction and alert history in MongoDB.

    Responsive Design: Mobile-friendly with a clean and modern UI.

🚀 Getting Started

    Frontend Setup:

cd client
npm install
npm run dev

Backend Setup:

    cd server
    pip install -r requirements.txt
    export FLASK_APP=app.py
    flask run

    Deployment:

        Frontend: Vercel or Netlify

        Backend: AWS EC2, Heroku, or any Flask-compatible server

        Database: MongoDB Atlas
