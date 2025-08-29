import { useState } from "react";
import { MessageSquare, Star, Send, CheckCircle, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Feedback() {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    category: "",
    rating: 0,
    subject: "",
    feedback: "",
    suggestion: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFeedbackData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFeedbackData(prev => ({
      ...prev,
      category: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFeedbackData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log to console for now (as requested)
      console.log("Public Feedback Submission:", {
        ...feedbackData,
        submissionTime: new Date().toISOString(),
        userAgent: navigator.userAgent,
        platform: "Raah Web App"
      });
      
      toast({
        title: "Feedback Submitted Successfully!",
        description: "Thank you for helping us improve Raah. Your feedback is valuable to us.",
      });
      
      // Reset form
      setFeedbackData({
        name: "",
        email: "",
        category: "",
        rating: 0,
        subject: "",
        feedback: "",
        suggestion: ""
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

  const categories = [
    { value: "bus-service", label: "Bus Service" },
    { value: "taxi-service", label: "Taxi Service" },
    { value: "app-usability", label: "App Usability" },
    { value: "route-planning", label: "Route Planning" },
    { value: "real-time-updates", label: "Real-time Updates" },
    { value: "booking-system", label: "Booking System" },
    { value: "payment", label: "Payment Issues" },
    { value: "customer-support", label: "Customer Support" },
    { value: "general", label: "General Feedback" }
  ];

  const recentFeedback = [
    {
      name: "Priya S.",
      rating: 5,
      comment: "Great app for navigating Udaipur! Bus timings are very accurate.",
      category: "Bus Service",
      time: "2 hours ago"
    },
    {
      name: "Raj M.", 
      rating: 4,
      comment: "Taxi booking is convenient, but could use more payment options.",
      category: "Taxi Service",
      time: "5 hours ago"
    },
    {
      name: "Anita K.",
      rating: 5,
      comment: "Perfect for tourists! Route planning helped us visit all major attractions.",
      category: "Route Planning",
      time: "1 day ago"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <MessageSquare className="text-primary-foreground h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Public Feedback</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Help us improve Raah by sharing your experience with our transportation services in Udaipur
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Feedback Form */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">Share Your Experience</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={feedbackData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    data-testid="input-feedback-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email (Optional)
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={feedbackData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    data-testid="input-feedback-email"
                  />
                </div>
              </div>

              {/* Category and Rating */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Category *
                  </label>
                  <Select value={feedbackData.category} onValueChange={handleSelectChange} required>
                    <SelectTrigger data-testid="select-feedback-category">
                      <SelectValue placeholder="Select feedback category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Overall Rating *
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className={`p-1 transition-colors ${
                          star <= feedbackData.rating 
                            ? "text-yellow-400 hover:text-yellow-500" 
                            : "text-gray-300 hover:text-gray-400"
                        }`}
                        data-testid={`star-${star}`}
                      >
                        <Star className="h-6 w-6 fill-current" />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {feedbackData.rating > 0 ? `${feedbackData.rating}/5` : "Rate us"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={feedbackData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief summary of your feedback"
                  data-testid="input-feedback-subject"
                />
              </div>

              {/* Feedback */}
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-card-foreground mb-2">
                  Your Feedback *
                </label>
                <Textarea
                  id="feedback"
                  name="feedback"
                  required
                  value={feedbackData.feedback}
                  onChange={handleInputChange}
                  placeholder="Tell us about your experience with Raah services..."
                  className="min-h-[100px]"
                  data-testid="textarea-feedback"
                />
              </div>

              {/* Suggestions */}
              <div>
                <label htmlFor="suggestion" className="block text-sm font-medium text-card-foreground mb-2">
                  Suggestions for Improvement
                </label>
                <Textarea
                  id="suggestion"
                  name="suggestion"
                  value={feedbackData.suggestion}
                  onChange={handleInputChange}
                  placeholder="Any suggestions to make our services better?"
                  className="min-h-[80px]"
                  data-testid="textarea-suggestion"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting || feedbackData.rating === 0}
                className="w-full"
                data-testid="button-submit-feedback"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Feedback
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Recent Feedback */}
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Recent Feedback</h3>
            <div className="space-y-4">
              {recentFeedback.map((item, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{item.name}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < item.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.comment}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">{item.category}</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback Stats */}
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Feedback Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Average Rating</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.6/5</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Reviews</span>
                <span className="font-semibold">1,247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">This Month</span>
                <span className="font-semibold">89</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Need Immediate Help?</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-orange-600" />
                <span>Emergency Helpline: 1800-RAAH-911</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-blue-600" />
                <span>Live Chat Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}