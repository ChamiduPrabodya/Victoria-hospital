# Victoria Hospital App (Expo + Node.js)

This repo contains a React Native (Expo) mobile app (`frontend/`) and a simple Node.js/Express backend (`backend/`).

Note: Some screens and features are currently placeholders (work in progress).

## Repository

```bash
git clone https://github.com/ChamiduPrabodya/Victoria-hospital.git
cd Victoria-hospital
```

## Project structure

```
Victoria-hospital/
├── backend/
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── frontend/
    ├── App.js
    ├── app.json
    ├── package.json
    └── src/
        ├── assets/
        ├── components/
        ├── context/
        ├── navigation/
        ├── screens/
        ├── services/
        ├── utils/
        └── config/
```

## Prerequisites

- Node.js (LTS recommended)
- Git
- Expo Go app (Android/iOS) to run on a real device

Windows PowerShell note: if you get “running scripts is disabled”, use `npm.cmd` instead of `npm`.

## Run backend (optional)

```bash
cd backend
npm install
npm run dev
```

Default backend URL:

- `http://localhost:3000/health`

### Configure backend port (optional)

Create `.env` from `.env.example`:

```bash
cd backend
cp .env.example .env
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Then set `PORT=3000` (or any free port).

## Run frontend (Expo Go)

```bash
cd frontend
npm install
npx expo start
```

Then:

- Open Expo Go on your phone
- Scan the QR code
- Use the same Wi‑Fi network (recommended)

If you are on a different network, try:

```bash
npx expo start --tunnel
```

## API base URL (important for Expo Go)

The app reads `EXPO_PUBLIC_API_BASE_URL` in `frontend/src/services/api.js`.

On a real phone, do not use `localhost` for your backend URL. Use your PC’s LAN IP.

Example (replace with your PC IP):

- `http://192.168.1.10:3000`

macOS/Linux:

```bash
EXPO_PUBLIC_API_BASE_URL="http://192.168.1.10:3000" npx expo start
```

Windows PowerShell:

```powershell
$env:EXPO_PUBLIC_API_BASE_URL="http://192.168.1.10:3000"; npx expo start
```

## Current app screens / functions

- Bottom tabs: `Home`, `Explore`
- Public screen example: `Login`
- Admin screen example: `AdminHome`
- Backend example endpoint: `GET /health`

## Team workflow

Update your local copy:

```bash
git pull origin main
```

Common git commands:

```bash
git status
git add .
git commit -m "message"
git push origin main
```

## Important notes

- Do not commit `node_modules/` (already ignored)
- Do not commit real secrets in `.env` (already ignored)
