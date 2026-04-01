import axios from "axios";

// ✅ VITE ENV FIX
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  withCredentials: true, // for cookies
});

// ✅ OPTIONAL: only if using token auth
api.interceptors.request.use((req) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.token) {
      req.headers.Authorization = `Bearer ${user.token}`;
    }
  } catch (error) {
    console.warn("Token parse error:", error);
  }

  return req;
});

export default api;