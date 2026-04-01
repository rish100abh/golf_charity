import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { toast } from 'sonner';
import { LogOut, Plus, Trophy, Heart } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [scores, setScores] = useState([]);
  const [winnings, setWinnings] = useState([]);
  const [newScore, setNewScore] = useState({
    value: '',
    date_played: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchScores();
    fetchWinnings();
  }, []);

  const fetchScores = async () => {
    try {
      const { data } = await api.get('/users/scores');
      setScores(data || []);
    } catch (error) {
      console.error('Failed to fetch scores:', error);
    }
  };

  const fetchWinnings = async () => {
    try {
      const { data } = await api.get('/users/winnings');
      setWinnings(data || []);
    } catch (error) {
      console.error('Failed to fetch winnings:', error);
    }
  };

  const handleAddScore = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      const { data } = await api.post('/users/scores', {
        ...newScore,
        value: Number(newScore.value)
      });

      setScores(data || []);
      setNewScore({ value: '', date_played: '' });

      toast.success('Score added successfully!');
    } catch (error) {
      toast.error(
        error?.response?.data?.detail ||
        error.message ||
        'Failed to add score'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-light">Dashboard</h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {user?.name}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="rounded-full"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>
                Status:{' '}
                <span className="capitalize">
                  {user?.subscription_status || 'inactive'}
                </span>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Your Charity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {user?.charity_id
                  ? `Contributing ${user?.charity_percentage}%`
                  : 'Not selected'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Total Winnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl">
                $
                {winnings
                  .reduce(
                    (sum, w) => sum + Number(w.prize_amount || 0),
                    0
                  )
                  .toFixed(2)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Add Score */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add New Score</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddScore} className="space-y-4">
              <Input
                type="number"
                min={1}
                max={45}
                required
                value={newScore.value}
                onChange={(e) =>
                  setNewScore({ ...newScore, value: e.target.value })
                }
              />

              <Input
                type="date"
                required
                value={newScore.date_played}
                onChange={(e) =>
                  setNewScore({
                    ...newScore,
                    date_played: e.target.value
                  })
                }
              />

              <Button disabled={loading}>
                <Plus className="w-4 h-4 mr-2" />
                {loading ? 'Adding...' : 'Add Score'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;