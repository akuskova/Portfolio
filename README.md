# Anna Kuskova — Portfolio

[Live site](https://akuskova.netlify.app/) · [Report an issue](https://github.com/akuskova/Portfolio/issues)

A personal portfolio site for Anna Kuskova, a software developer and Computer Science student at UC Irvine. The application presents selected projects, an about page, contact and resume links, and an interactive curated-photo experience.

## Highlights

- Responsive React single-page application with client-side routing
- Project case studies for Browzen, Starvest, Downtown Hamilton Association, and a disk-aware search engine
- Animated night-sky visual system and responsive navigation
- Curated photo endpoint backed by the Pexels API
- AI-generated image captions through the Anthropic Messages API

## Technology

| Area | Tools |
| --- | --- |
| Frontend | React 19, TypeScript, Vite, React Router, Tailwind CSS |
| Backend | Node.js, Express, TypeScript, CORS |
| External services | Pexels API, Anthropic API |
| Hosting | Netlify for the frontend |

## Architecture

```text
Browser
  └─ React/Vite frontend
       ├─ Static portfolio pages
       └─ /api experience ──> Express API
                                ├─ Pexels curated photos
                                └─ Anthropic caption generation
```

The frontend and backend are independent Node.js projects. The frontend uses `VITE_API_URL` to find the API service. The `/api` page requests a curated image and then requests its caption.

## Project structure

```text
.
├── frontend/              # React application and Netlify SPA redirect rules
│   ├── public/            # Static images, resume, favicon, and _redirects
│   └── src/               # Pages, components, routes, and styles
├── backend/               # Express API service
│   └── src/index.ts       # Pexels and Anthropic endpoints
└── README.md
```

## Run locally

### Prerequisites

- A Node.js version supported by the repository's Vite and TypeScript dependencies
- npm
- A Pexels API key for the photo endpoint
- An Anthropic API key for caption generation

### 1. Start the backend

```bash
cd backend
npm ci
```

Create `backend/.env` with your credentials. Do not commit this file.

```dotenv
PEXELS_API_KEY=your_pexels_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
PORT=3001
```

Then start the API service:

```bash
npm run dev
```

The API listens on `http://localhost:3001` by default.

### 2. Start the frontend

In a second terminal:

```bash
cd frontend
npm ci
```

Create `frontend/.env.local` so the browser application can reach the local API:

```dotenv
VITE_API_URL=http://localhost:3001
```

Start Vite:

```bash
npm run dev
```

Open the URL shown by Vite, normally `http://localhost:5173`.

## Available commands

### Frontend

Run these from `frontend/`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

### Backend

Run these from `backend/`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run the API with automatic restart via `tsx watch` |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled API service |

## Deployment notes

- The frontend is deployed as a static application. The SPA fallback is defined in `frontend/public/_redirects`.
- Configure `VITE_API_URL` in the frontend deployment environment to the public URL of the backend service.
- Add the deployed frontend origin to `allowedOrigins` in `backend/src/index.ts` before using a new domain.
- Keep `PEXELS_API_KEY` and `ANTHROPIC_API_KEY` only in backend environment variables. Never expose either key through a `VITE_` variable or commit it to the repository.

## Verification

Before deploying frontend changes, run:

```bash
cd frontend
npm run lint
npm run build
```

For the backend, verify the production build with:

```bash
cd backend
npm run build
```

