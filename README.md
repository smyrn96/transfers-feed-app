# Transfers Feed Application

A responsive web app that displays a feed of scheduled guest transfers, grouped by day and sorted chronologically. Clicking a transfer reveals detailed information in a modal. The app supports both desktop and mobile views with UI behavior matching the provided Figma mockups.

## Demo

- **Frontend (Vercel):** [transfers-feed-app.vercel.app](https://transfers-feed-app.vercel.app/)
- **API (Render):** [mock-api-tranfers.onrender.com](https://mock-api-tranfers.onrender.com)

## Tech Stack

- **React** + **TypeScript**
- **Tailwind CSS** for styling
- **React Query** (`@tanstack/react-query`) for API caching and data fetching
- **React Router v6+** for routing
- **Axios** for HTTP requests
- **ahooks** for useful Responsive React hooks

## 📁 Folder Structure
```
src/
├── api/                 # Mock API
├── assets/              # Static assets like images and icons
├── components/          # Reusable UI components
├── constants/           # App-wide constants and enums
├── context/             # React context providers
├── hooks/               # Custom React hooks
├── layouts/             # Layout components (e.g., main layout, sidebar)
├── pages/               # Route-level pages
├── types/               # TypeScript interfaces and types
├── App.tsx              # Root app component
└── index.tsx            # App entry point
```

##  Features

-  View scheduled transfers grouped by day
-  Modal with detailed info about each transfer
-  Mobile-friendly menu toggle
-  Fully responsive layout matching Figma designs
-  Fast, cached API using React Query
-  Accessible, keyboard-navigable modal

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/transfers-feed.git
cd transfers-feed
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the API
```bash
cd api
json-server --watch db.json --port 8000 
```

### 4. Add environment variables
Create .env file and fill in the API base URL
```bash
REACT_APP_API_URL=https://your-api.onrender.com
```

### 5. Start the app locally
```bash
npm start
```
The app will run at http://localhost:3000

## Deployment
- Frontend: Deployed via Vercel
- API: Deployed using Render
  
Both services are free-tier friendly and auto-deploy from GitHub.

### Author
Emmanouil Smyrnakis

### License
This project is for educational/demo purposes only. All designs belong to their original owner.
