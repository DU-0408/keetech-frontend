import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';
import { serviceRequests } from '../data/mock';
import {
  LogOut,
  Plus,
  Building2,
  Wrench,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  User,
  Bell,
  Home,
  Settings,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';

const PortalDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [requests, setRequests] = useState(serviceRequests);
  const [isNewRequestOpen, setIsNewRequestOpen] = useState(false);
  const [newRequest, setNewRequest] = useState({
    type: '',
    building: '',
    description: '',
    urgency: 'normal'
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('keetch_user');
    if (!storedUser) {
      navigate('/portal/login');
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('keetch_user');
    toast.success('Logged out successfully');
    navigate('/portal/login');
  };

  const handleNewRequest = (e) => {
    e.preventDefault();
    const newReq = {
      id: `SR-${String(requests.length + 1).padStart(3, '0')}`,
      type: newRequest.type,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
      description: newRequest.description,
      building: newRequest.building
    };
    setRequests([newReq, ...requests]);
    setIsNewRequestOpen(false);
    setNewRequest({ type: '', building: '', description: '', urgency: 'normal' });
    toast.success('Service request submitted!');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-700';
      case 'In Progress': return 'bg-amber-100 text-amber-700';
      case 'Scheduled': return 'bg-sky-100 text-sky-700';
      case 'Pending': return 'bg-slate-100 text-slate-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return CheckCircle2;
      case 'In Progress': return Clock;
      case 'Scheduled': return Calendar;
      default: return AlertCircle;
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-background border-r border-border p-6 hidden lg:block">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">K</span>
          </div>
          <div>
            <p className="font-bold">KEE-Tech Elevators</p>
            <p className="text-xs text-muted-foreground">Customer Portal</p>
          </div>
        </div>

        <nav className="space-y-2">
          {[
            { icon: Home, label: 'Dashboard', active: true },
            { icon: FileText, label: 'Service Requests' },
            { icon: Building2, label: 'My Buildings' },
            { icon: Bell, label: 'Notifications' },
            { icon: Settings, label: 'Settings' },
          ].map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                item.active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Link to="/">
            <Button variant="outline" className="w-full mb-2 rounded-xl">
              Back to Website
            </Button>
          </Link>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full text-muted-foreground hover:text-destructive rounded-xl"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 lg:p-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user.name}</h1>
            <p className="text-muted-foreground">{user.company}</p>
          </div>
          <div className="flex items-center gap-4">
            <Dialog open={isNewRequestOpen} onOpenChange={setIsNewRequestOpen}>
              <DialogTrigger asChild>
                <Button className="btn-primary bg-primary hover:bg-primary/90 rounded-xl">
                  <Plus className="w-4 h-4 mr-2" />
                  New Request
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>New Service Request</DialogTitle>
                  <DialogDescription>
                    Submit a new service request and our team will respond promptly.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleNewRequest} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Service Type</Label>
                    <Select onValueChange={(v) => setNewRequest({ ...newRequest, type: v })} required>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Maintenance">Maintenance</SelectItem>
                        <SelectItem value="Repair">Repair</SelectItem>
                        <SelectItem value="Inspection">Inspection</SelectItem>
                        <SelectItem value="Emergency">Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Building</Label>
                    <Input
                      value={newRequest.building}
                      onChange={(e) => setNewRequest({ ...newRequest, building: e.target.value })}
                      placeholder="Building name or address"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      value={newRequest.description}
                      onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                      placeholder="Describe the issue or request..."
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Urgency</Label>
                    <Select onValueChange={(v) => setNewRequest({ ...newRequest, urgency: v })} defaultValue="normal">
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full btn-primary bg-primary hover:bg-primary/90 rounded-xl">
                    Submit Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: FileText, label: 'Total Requests', value: requests.length, color: 'text-primary' },
            { icon: Clock, label: 'In Progress', value: requests.filter(r => r.status === 'In Progress').length, color: 'text-amber-500' },
            { icon: Calendar, label: 'Scheduled', value: requests.filter(r => r.status === 'Scheduled').length, color: 'text-sky-500' },
            { icon: CheckCircle2, label: 'Completed', value: requests.filter(r => r.status === 'Completed').length, color: 'text-emerald-500' },
          ].map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 bg-secondary rounded-xl flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Requests */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Service Requests</CardTitle>
                <CardDescription>Track and manage your service requests</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="rounded-xl">
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {requests.map((request) => {
                const StatusIcon = getStatusIcon(request.status);
                return (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{request.id}</span>
                          <Badge variant="secondary" className={getStatusColor(request.status)}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {request.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {request.type} • {request.building}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{request.date}</p>
                      <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                        {request.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PortalDashboard;
