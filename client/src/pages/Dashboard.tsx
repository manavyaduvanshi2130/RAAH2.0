import { useState, useEffect } from "react";
import { Bus, Car, Users, Clock, DollarSign, TrendingUp, TrendingDown, UserPlus, AlertTriangle, BarChart3, MapPin } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

export default function Dashboard() {
  const [liveData, setLiveData] = useState({
    activeBuses: 142,
    activeTaxis: 89,
    totalPassengers: 8250,
    avgDelay: 2.8,
    revenue: 45600
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        activeBuses: prev.activeBuses + Math.floor(Math.random() * 6) - 3,
        activeTaxis: prev.activeTaxis + Math.floor(Math.random() * 4) - 2,
        totalPassengers: prev.totalPassengers + Math.floor(Math.random() * 100) - 50,
        avgDelay: Math.max(0, prev.avgDelay + (Math.random() * 0.4) - 0.2),
        revenue: prev.revenue + Math.floor(Math.random() * 1000) - 500
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Sample data for charts
  const hourlyData = [
    { hour: '6 AM', passengers: 1200, buses: 45, taxis: 28 },
    { hour: '8 AM', passengers: 3200, buses: 85, taxis: 52 },
    { hour: '10 AM', passengers: 2800, buses: 75, taxis: 48 },
    { hour: '12 PM', passengers: 3500, buses: 95, taxis: 68 },
    { hour: '2 PM', passengers: 2400, buses: 65, taxis: 45 },
    { hour: '4 PM', passengers: 4200, buses: 110, taxis: 78 },
    { hour: '6 PM', passengers: 5800, buses: 142, taxis: 89 },
    { hour: '8 PM', passengers: 3800, buses: 88, taxis: 62 },
  ];

  const routeData = [
    { route: 'City Palace - Airport', passengers: 1250, efficiency: 92 },
    { route: 'Railway Station - Mall', passengers: 980, efficiency: 87 },
    { route: 'University - Lake Pichola', passengers: 750, efficiency: 89 },
    { route: 'Bus Stand - Haldighati', passengers: 650, efficiency: 85 },
  ];

  const COLORS = ['hsl(220, 100%, 50%)', 'hsl(45, 100%, 50%)', 'hsl(142, 76%, 36%)', 'hsl(0, 84%, 60%)'];
  const metrics = [
    {
      title: "Active Buses",
      value: liveData.activeBuses.toString(),
      icon: Bus,
      trend: "+8% from yesterday",
      trendUp: true,
    },
    {
      title: "Active Taxis",
      value: liveData.activeTaxis.toString(),
      icon: Car,
      trend: "+12% from yesterday",
      trendUp: true,
    },
    {
      title: "Total Passengers",
      value: liveData.totalPassengers.toLocaleString(),
      icon: Users,
      trend: "+12% from yesterday",
      trendUp: true,
    },
    {
      title: "Average Delay",
      value: `${liveData.avgDelay.toFixed(1)} min`,
      icon: Clock,
      trend: "-18% from yesterday",
      trendUp: false,
    },
    {
      title: "Revenue Today",
      value: `₹${liveData.revenue.toLocaleString()}`,
      icon: DollarSign,
      trend: "+15% from yesterday",
      trendUp: true,
    },
  ];

  const activities = [
    {
      icon: Bus,
      title: "Route UP-14 (City Palace - Airport) completed journey",
      time: "2 minutes ago",
      color: "primary",
    },
    {
      icon: AlertTriangle,
      title: "Traffic congestion detected on Chetak Circle",
      time: "5 minutes ago",
      color: "accent",
    },
    {
      icon: UserPlus,
      title: "New driver registered: Raj Singh",
      time: "12 minutes ago",
      color: "secondary",
    },
    {
      icon: MapPin,
      title: "New bus stop added near Lake Pichola",
      time: "1 hour ago",
      color: "primary",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Raah Dashboard</h1>
        <p className="text-muted-foreground">Real-time monitoring and analytics for Udaipur's transportation network</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trendUp ? TrendingUp : TrendingDown;
          
          return (
            <div
              key={index}
              data-testid={`metric-${index}`}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{metric.title}</p>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="text-primary text-xl h-6 w-6" />
                </div>
              </div>
              <div className={`mt-2 text-sm ${metric.trendUp ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                <TrendIcon className="mr-1 h-4 w-4" />
                {metric.trend}
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Hourly Passenger Flow */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Hourly Passenger & Bus Flow</h3>
          <div data-testid="chart-traffic-flow" className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="hour" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="passengers" 
                  stroke="hsl(220, 100%, 50%)" 
                  strokeWidth={3}
                  name="Passengers"
                />
                <Line 
                  type="monotone" 
                  dataKey="buses" 
                  stroke="hsl(45, 100%, 50%)" 
                  strokeWidth={3}
                  name="Active Buses"
                />
                <Line 
                  type="monotone" 
                  dataKey="taxis" 
                  stroke="hsl(142, 76%, 36%)" 
                  strokeWidth={3}
                  name="Active Taxis"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Route Performance */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Top Routes Performance</h3>
          <div data-testid="chart-route-performance" className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={routeData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="route" 
                  className="text-xs" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="passengers" fill="hsl(220, 100%, 50%)" name="Daily Passengers" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                data-testid={`activity-${index}`}
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
              >
                <div className={`w-10 h-10 bg-${activity.color}/10 rounded-full flex items-center justify-center`}>
                  <Icon className={`text-${activity.color} h-5 w-5`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
