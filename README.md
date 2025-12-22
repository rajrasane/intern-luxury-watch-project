# LuxWatch - Luxury Watch Store

A secure full-stack React application integrating JWT authentication with best-in-class frontend architecture.

##  Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Zustand (State Management).
- **Data Fetching:** TanStack Query (React Query), Axios.
- **Backend:** Node.js, Express, MongoDB (Mongoose).
- **Authentication:** JWT (Short-lived Access Token + HttpOnly Refresh Cookie).

##  Key Features

- **Secure Auth:** Access tokens stored in memory only (Zustand); refresh tokens handled via secure HttpOnly cookies.
- **Silent Refresh:** Automatic token renewal via Axios interceptors on 401 responses.
- **Persistent Session:** Automatic login on app load using refresh tokens.
- **Protected Routes:** Layout-based route protection for private pages (Profile).
- **Responsive UI:** Modern, dark-mode compatible design with smooth scrolling.
- **Error Handling:** Custom 404 page and SPA routing fallback configuration.