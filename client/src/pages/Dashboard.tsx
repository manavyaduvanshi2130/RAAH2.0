import { Bus, Users, Clock, DollarSign, TrendingUp, TrendingDown, UserPlus, AlertTriangle, BarChart3 } from "lucide-react";

export default function Dashboard() {
  const metrics = [
    {
      title: "Active Vehicles",
      value: "2,847",
      icon: Bus,
      trend: "+12% from yesterday",
      trendUp: true,
    },
    {
      title: "Total Passengers",
      value: "45,291",
      icon: Users,
      trend: "+8% from yesterday",
      trendUp: true,
    },
    {
      title: "Average Delay",
      value: "3.2 min",
      icon: Clock,
      trend: "-15% from yesterday",
      trendUp: false,
    },
    {
      title: "Revenue Today",
      value: "₹1,23,450",
      icon: DollarSign,
      trend: "+22% from yesterday",
      trendUp: true,
    },
  ];

  const activities = [
    {
      icon: Bus,
      title: "Route B47 completed journey",
      time: "2 minutes ago",
      color: "primary",
    },
    {
      icon: AlertTriangle,
      title: "Traffic congestion detected on MG Road",
      time: "5 minutes ago",
      color: "accent",
    },
    {
      icon: UserPlus,
      title: "New driver registered: Amit Kumar",
      time: "12 minutes ago",
      color: "secondary",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Transport Dashboard</h1>
        <p className="text-muted-foreground">Real-time monitoring and analytics for transportation networks</p>
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
        {/* Traffic Flow Chart */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Traffic Flow Trends</h3>
          <div
            data-testid="chart-traffic-flow"
            className="h-64 bg-muted rounded-lg flex items-center justify-center"
          >
            <div className="text-center text-muted-foreground">
              <BarChart3 className="h-16 w-16 mx-auto mb-2" />
              <p className="text-sm">Traffic Flow Chart Placeholder</p>
              <p className="text-xs mt-1">Chart implementation pending</p>
            </div>
          </div>
        </div>

        {/* Route Performance */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Route Performance</h3>
          <div
            data-testid="chart-route-performance"
            className="h-64 bg-muted rounded-lg flex items-center justify-center"
          >
            <div className="text-center text-muted-foreground">
              <BarChart3 className="h-16 w-16 mx-auto mb-2" />
              <p className="text-sm">Route Performance Chart Placeholder</p>
              <p className="text-xs mt-1">Chart implementation pending</p>
            </div>
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
