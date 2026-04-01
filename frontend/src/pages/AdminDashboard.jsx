import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";

// FIX: use correct paths (avoid @ if not configured)
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import {
  LogOut,
  Users,
  DollarSign,
  Trophy,
  TrendingUp,
} from "lucide-react";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [analytics, setAnalytics] = useState(null);
  const [users, setUsers] = useState([]);
  const [draws, setDraws] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const [a, u, d] = await Promise.all([
        api.get("/admin/analytics"),
        api.get("/admin/users"),
        api.get("/admin/draws"),
      ]);

      setAnalytics(a.data);
      setUsers(u.data);
      setDraws(d.data);
    } catch (err) {
      console.error("Error loading admin data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-2xl">Admin Dashboard</h1>

          <div className="flex gap-4 items-center">
            <span className="text-sm">{user?.email}</span>

            <Button onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>
                <Users className="w-4 h-4 inline mr-2" />
                Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              {analytics?.total_users || 0}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <TrendingUp className="w-4 h-4 inline mr-2" />
                Subscriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {analytics?.active_subscriptions || 0}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <DollarSign className="w-4 h-4 inline mr-2" />
                Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              ${analytics?.total_revenue?.toFixed(2) || "0.00"}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <Trophy className="w-4 h-4 inline mr-2" />
                Draws
              </CardTitle>
            </CardHeader>
            <CardContent>
              {analytics?.recent_draws || 0}
            </CardContent>
          </Card>
        </div>

        {/* Users */}
        <h2 className="text-xl mb-4">Recent Users</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          users.slice(0, 5).map((u) => (
            <div key={u.id} className="border p-4 mb-2 rounded">
              <p>{u.name}</p>
              <p className="text-sm">{u.email}</p>
            </div>
          ))
        )}

        {/* Draws */}
        <h2 className="text-xl mt-10 mb-4">Recent Draws</h2>
        {draws.map((d) => (
          <div key={d.id} className="border p-4 mb-2 rounded">
            <p>Draw #{d.id}</p>
            <p>${parseFloat(d.prize_pool).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;