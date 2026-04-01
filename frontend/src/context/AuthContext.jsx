import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// ✅ VITE ENV FIX
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// 🔹 Error formatter
export const formatApiErrorDetail = (detail) => {
  if (!detail) return 'Something went wrong. Please try again.';
  if (typeof detail === 'string') return detail;
  if (Array.isArray(detail)) {
    return detail.map(e => e?.msg || JSON.stringify(e)).join(' ');
  }
  if (detail?.msg) return detail.msg;
  return String(detail);
};

// 🔹 Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Check auth
  const checkAuth = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/auth/me`, {
        withCredentials: true,
      });

      setUser(data);
    } catch (error) {
      setUser(null); // ✅ FIXED
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // ✅ Login
  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      setUser(data);
      return data;
    } catch (error) {
      throw new Error(
        formatApiErrorDetail(error.response?.data?.detail)
      );
    }
  };

  // ✅ Register
  const register = async (userData) => {
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/auth/register`,
        userData,
        { withCredentials: true }
      );

      setUser(data);
      return data;
    } catch (error) {
      throw new Error(
        formatApiErrorDetail(error.response?.data?.detail)
      );
    }
  };

  // ✅ Logout
  const logout = async () => {
    try {
      await axios.post(
        `${BACKEND_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null); // ✅ FIXED
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Hook
export const useAuth = () => useContext(AuthContext);