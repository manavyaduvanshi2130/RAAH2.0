import { Award, Target, Users, Globe, MapPin, Crown } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Smart City Initiative",
      description: "Part of Udaipur's transformation into a Smart City with intelligent transportation solutions."
    },
    {
      icon: Globe,
      title: "Real-time Tracking",
      description: "Live GPS tracking of all buses across Udaipur with accurate arrival predictions."
    },
    {
      icon: Users,
      title: "Passenger-Centric",
      description: "Designed with passengers in mind, providing convenient and reliable transportation."
    },
    {
      icon: Crown,
      title: "Heritage & Technology",
      description: "Combining Udaipur's royal heritage with cutting-edge transportation technology."
    }
  ];

  const team = [
    {
      name: "Team Pegasus",
      role: "SIH 2025 Development Team",
      description: "A passionate team of innovators working on smart transportation solutions for Udaipur and India"
    },
    {
      name: "Udaipur Municipal Corporation",
      role: "Project Partner",
      description: "Supporting the digital transformation of public transportation in the Lake City"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <MapPin className="text-primary-foreground text-xl h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">About Raah</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Raah is a revolutionary smart transportation management system developed for SIH 2025, 
          specifically designed to modernize and optimize public transportation in the beautiful Lake City of Udaipur.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed">
              To transform Udaipur's public transportation into a smart, efficient, and passenger-friendly system 
              that connects every corner of the Lake City while preserving its cultural heritage and natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Raah?</h2>
          <p className="text-lg text-muted-foreground">
            Bringing cutting-edge technology to Udaipur's transportation ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-testid={`about-feature-${index}`}
                className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SIH 2025 Section */}
      <section className="mb-16">
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Award className="text-accent h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground">Smart India Hackathon 2025</h2>
              <p className="text-muted-foreground">Building solutions for tomorrow's India</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Raah is developed by Team Pegasus as part of Smart India Hackathon 2025, India's largest digital innovation 
            initiative. Our project addresses the critical need for smart transportation solutions in 
            heritage cities like Udaipur, where modern efficiency must coexist with cultural preservation.
          </p>
        </div>
      </section>

      {/* About Udaipur */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Udaipur: The Lake City</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Known as the "Venice of the East" and "City of Lakes," Udaipur is one of Rajasthan's most 
              beautiful cities. With its stunning palaces, lakes, and heritage sites, the city attracts 
              millions of tourists annually.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Raah ensures that both residents and visitors can navigate this magnificent city efficiently 
              while minimizing the impact on its delicate ecosystem and heritage structures.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold text-primary">11+</div>
                <div className="text-muted-foreground">Beautiful Lakes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-muted-foreground">UNESCO World Heritage Sites</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.5M+</div>
                <div className="text-muted-foreground">Annual Tourists</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Team Pegasus</h2>
          <p className="text-lg text-muted-foreground">
            Passionate innovators working to revolutionize urban transportation in Udaipur
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              data-testid={`team-member-${index}`}
              className="bg-card rounded-xl p-8 shadow-sm border border-border text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{member.name}</h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}