import { useState } from "react";
import { Plus, Search, Edit3, Map, Trash2, Users, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Routes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const routes = [
    {
      id: "A42",
      name: "Route A42",
      path: "Central Station → Airport",
      status: "active",
      distance: "24.5 km",
      duration: "45 min",
      vehicles: "12 buses",
      frequency: "Every 15 min",
      passengers: "1,234 passengers today",
    },
    {
      id: "B15",
      name: "Route B15",
      path: "Tech Park → City Center",
      status: "maintenance",
      distance: "18.2 km",
      duration: "32 min",
      vehicles: "8 buses",
      frequency: "Every 20 min",
      passengers: "892 passengers today",
    },
    {
      id: "C23",
      name: "Route C23",
      path: "University → Mall",
      status: "active",
      distance: "12.8 km",
      duration: "25 min",
      vehicles: "6 buses",
      frequency: "Every 12 min",
      passengers: "567 passengers today",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "maintenance":
        return "bg-yellow-100 text-yellow-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredRoutes = routes.filter((route) => {
    const matchesSearch = route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.path.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || route.status === statusFilter;
    const matchesType = typeFilter === "all"; // All routes are bus type in this example
    
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Routes Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Route Management</h1>
          <p className="text-muted-foreground">Manage and optimize transportation routes</p>
        </div>
        <Button data-testid="button-add-route" className="mt-4 md:mt-0">
          <Plus className="mr-2 h-4 w-4" />
          Add New Route
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search routes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              data-testid="input-search-routes"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger data-testid="select-status-filter" className="w-full md:w-40">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger data-testid="select-type-filter" className="w-full md:w-40">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="bus">Bus</SelectItem>
              <SelectItem value="metro">Metro</SelectItem>
              <SelectItem value="taxi">Taxi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {filteredRoutes.map((route, index) => (
          <div
            key={route.id}
            data-testid={`route-card-${route.id}`}
            className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">{route.name}</h3>
                <p className="text-muted-foreground text-sm flex items-center">
                  <MapPin className="mr-1 h-3 w-3" />
                  {route.path}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(route.status)}`}>
                {route.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-muted-foreground text-xs">Distance</p>
                <p className="font-semibold">{route.distance}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Duration</p>
                <p className="font-semibold">{route.duration}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Vehicles</p>
                <p className="font-semibold">{route.vehicles}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Frequency</p>
                <p className="font-semibold">{route.frequency}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{route.passengers}</span>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid={`button-edit-${route.id}`}
                  className="p-2 h-8 w-8"
                >
                  <Edit3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid={`button-map-${route.id}`}
                  className="p-2 h-8 w-8"
                >
                  <Map className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid={`button-delete-${route.id}`}
                  className="p-2 h-8 w-8 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Route Visualization</h3>
        <div
          data-testid="map-visualization"
          className="h-96 bg-muted rounded-lg flex items-center justify-center"
        >
          <div className="text-center text-muted-foreground">
            <Map className="h-16 w-16 mx-auto mb-4" />
            <p className="text-lg font-medium">Interactive Route Map</p>
            <p className="text-sm mt-1">Map integration pending</p>
          </div>
        </div>
      </div>
    </div>
  );
}
