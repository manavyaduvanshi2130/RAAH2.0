import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log to console for now (as requested)
      console.log("Contact Form Submission:", formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@raah-udaipur.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 294 123 4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Smart City Office, Udaipur",
      description: "City Palace Road, Udaipur, Rajasthan"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Friday",
      description: "9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <MessageSquare className="text-primary-foreground h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions about Raah? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're a passenger, driver, or transportation authority, we're here to help you make the most of Udaipur's smart transportation system.
            </p>
          </div>

          <div className="grid gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  data-testid={`contact-info-${index}`}
                  className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">{info.title}</h3>
                    <p className="text-primary font-medium">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Help</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">• For bus tracking issues, check our Dashboard</p>
              <p className="text-sm text-muted-foreground">• Route information available on Routes page</p>
              <p className="text-sm text-muted-foreground">• Technical support: Mon-Fri 9AM-6PM</p>
              <p className="text-sm text-muted-foreground">• Emergency transport queries: 24/7 hotline</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-bold text-card-foreground mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                Subject *
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What is this regarding?"
                data-testid="input-subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your inquiry..."
                className="min-h-[120px]"
                data-testid="textarea-message"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full"
              data-testid="button-submit"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Privacy Note:</strong> Your information is secure and will only be used to respond to your inquiry. 
              We respect your privacy and will never share your details with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}