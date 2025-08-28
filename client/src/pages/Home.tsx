import { Link } from "wouter";
import { BarChart3, MapPin, Brain, Smartphone } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Routing",
      description: "Intelligent algorithms optimize routes in real-time, reducing travel time and fuel consumption by up to 30%.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with live traffic data, performance metrics, and predictive insights.",
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Seamless mobile app integration for passengers and drivers with real-time updates and notifications.",
    },
  ];

  const stats = [
    { value: "150+", label: "Active Buses" },
    { value: "90+", label: "Active Taxis" },
    { value: "45+", label: "Bus Routes" },
    { value: "50K+", label: "Daily Passengers" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Raah - Smart Udaipur Transport
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Revolutionary solution for SIH 2025 - Connecting the Lake City with intelligent routing, real-time bus tracking, and seamless transportation for Udaipur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" data-testid="button-dashboard">
                <div className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer inline-flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Dashboard
                </div>
              </Link>
              <Link href="/routes" data-testid="button-routes">
                <div className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer inline-flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Explore Routes
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced transportation solutions designed for the future of urban mobility
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  data-testid={`feature-${index}`}
                  className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-primary text-2xl h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-testid={`stat-${index}`}
                className="bg-card rounded-xl p-8 shadow-sm"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
