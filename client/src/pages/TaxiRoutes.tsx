import { useState } from "react";
import { Car, MapPin, Clock, IndianRupee, Search, Filter, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function TaxiRoutes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [areaFilter, setAreaFilter] = useState("all");
  const { toast } = useToast();

  const taxiRoutes = [
    {
      id: "TX-001",
      pickup: "City Palace",
      drop: "Maharana Pratap Airport",
      area: "tourist",
      distance: "28.5 km",
      estimatedTime: "45-55 min",
      fare: "₹850-1200",
      category: "airport"
    },
    {
      id: "TX-002", 
      pickup: "Lake Pichola Ghat",
      drop: "Fateh Sagar Lake",
      area: "fatehsagar",
      distance: "8.2 km",
      estimatedTime: "18-25 min",
      fare: "₹280-350",
      category: "sightseeing"
    },
    {
      id: "TX-003",
      pickup: "Railway Station",
      drop: "Hiran Magri Sector 4",
      area: "hiranmagri",
      distance: "12.8 km",
      estimatedTime: "25-35 min",
      fare: "₹320-450",
      category: "residential"
    },
    {
      id: "TX-004",
      pickup: "Bapu Bazar",
      drop: "Celebration Mall",
      area: "bapubazar",
      distance: "6.5 km",
      estimatedTime: "15-20 min",
      fare: "₹180-250",
      category: "shopping"
    },
    {
      id: "TX-005",
      pickup: "Chetak Circle",
      drop: "Saheliyon Ki Bari",
      area: "tourist",
      distance: "7.3 km",
      estimatedTime: "18-22 min",
      fare: "₹200-280",
      category: "sightseeing"
    },
    {
      id: "TX-006",
      pickup: "University Area",
      drop: "Fateh Sagar Ropeway",
      area: "fatehsagar",
      distance: "11.2 km",
      estimatedTime: "22-30 min",
      fare: "₹280-380",
      category: "sightseeing"
    },
    {
      id: "TX-007",
      pickup: "Hiran Magri Sector 14",
      drop: "City Palace",
      area: "hiranmagri",
      distance: "15.7 km",
      estimatedTime: "30-40 min",
      fare: "₹420-580",
      category: "tourist"
    },
    {
      id: "TX-008",
      pickup: "Bapu Bazar",
      drop: "Jagdish Temple",
      area: "bapubazar",
      distance: "2.8 km",
      estimatedTime: "8-12 min",
      fare: "₹120-180",
      category: "local"
    }
  ];

  const areas = [
    { value: "all", label: "All Areas" },
    { value: "tourist", label: "Tourist Areas" },
    { value: "fatehsagar", label: "Fateh Sagar" },
    { value: "hiranmagri", label: "Hiran Magri" },
    { value: "bapubazar", label: "Bapu Bazar" }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "airport":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "sightseeing":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "residential":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "shopping":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "tourist":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const filteredRoutes = taxiRoutes.filter((route) => {
    const matchesSearch = 
      route.pickup.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.drop.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = areaFilter === "all" || route.area === areaFilter;
    
    return matchesSearch && matchesArea;
  });

  const handleBookTaxi = (route: typeof taxiRoutes[0]) => {
    console.log("Taxi Booking Simulation:", {
      routeId: route.id,
      pickup: route.pickup,
      drop: route.drop,
      estimatedFare: route.fare,
      bookingTime: new Date().toISOString(),
      customerNote: "Simulated booking - no actual reservation made"
    });

    toast({
      title: "Booking Simulated!",
      description: `Taxi from ${route.pickup} to ${route.drop} - Check console for details.`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Car className="text-primary-foreground h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Taxi Routes</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore convenient taxi routes across Udaipur with estimated fares and travel times
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search pickup or drop location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              data-testid="input-search-taxi-routes"
            />
          </div>
          <Select value={areaFilter} onValueChange={setAreaFilter}>
            <SelectTrigger data-testid="select-area-filter" className="w-full md:w-48">
              <SelectValue placeholder="Filter by area" />
            </SelectTrigger>
            <SelectContent>
              {areas.map((area) => (
                <SelectItem key={area.value} value={area.value}>
                  {area.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
          <Car className="h-8 w-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{taxiRoutes.length}</div>
          <div className="text-sm text-muted-foreground">Available Routes</div>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
          <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">15+</div>
          <div className="text-sm text-muted-foreground">Key Locations</div>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
          <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">24/7</div>
          <div className="text-sm text-muted-foreground">Service Available</div>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
          <IndianRupee className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">₹120+</div>
          <div className="text-sm text-muted-foreground">Starting Fare</div>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {filteredRoutes.map((route) => (
          <div
            key={route.id}
            data-testid={`taxi-route-${route.id}`}
            className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-card-foreground">{route.id}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(route.category)}`}>
                    {route.category}
                  </span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="font-medium">{route.pickup}</span>
                  <ArrowRight className="h-4 w-4 mx-2" />
                  <span className="font-medium">{route.drop}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-muted-foreground text-xs">Distance</p>
                <p className="font-semibold text-sm">{route.distance}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Time</p>
                <p className="font-semibold text-sm">{route.estimatedTime}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Fare Range</p>
                <p className="font-semibold text-sm text-green-600">{route.fare}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button 
                onClick={() => handleBookTaxi(route)}
                className="flex-1"
                data-testid={`button-book-${route.id}`}
              >
                <Car className="mr-2 h-4 w-4" />
                Book Now
              </Button>
              <Button 
                variant="outline"
                className="px-4"
                data-testid={`button-call-${route.id}`}
              >
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredRoutes.length === 0 && (
        <div className="text-center py-12">
          <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No routes found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Info Card */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mt-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Important Information</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p>• Fares may vary based on traffic and time of day</p>
            <p>• All taxis are GPS tracked for safety</p>
            <p>• 24/7 customer support available</p>
          </div>
          <div>
            <p>• Online payment and cash both accepted</p>
            <p>• Special tourist packages available</p>
            <p>• Book in advance for guaranteed availability</p>
          </div>
        </div>
      </div>
    </div>
  );
}