import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

/**
 * ContactForm Component
 * Captures user inquiries with validation and success feedback
 * Design: Matches Pioneers minimalist aesthetic with electric cyan accents
 */

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
    if (errors.subject) {
      setErrors((prev) => ({
        ...prev,
        subject: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Please fix the errors above",
      });
      return;
    }

    setStatus({ type: "loading" });

    try {
      // Simulate API call - in production, replace with actual backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Store form data in localStorage for demonstration
      const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

      setStatus({
        type: "success",
        message: "Thank you! We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: "idle" });
      }, 5000);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl mx-auto">
      {/* Status Messages */}
      {status.type === "success" && (
        <div className="p-4 rounded-lg bg-accent/10 border border-accent flex items-start gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-sm text-accent font-medium">{status.message}</p>
        </div>
      )}

      {status.type === "error" && status.message && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive flex items-start gap-3 animate-fade-in">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <p className="text-sm text-destructive font-medium">{status.message}</p>
        </div>
      )}

      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-semibold text-foreground">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          className={`bg-card/50 border-border focus:border-accent focus:ring-accent/50 ${
            errors.name ? "border-destructive" : ""
          }`}
          disabled={status.type === "loading"}
        />
        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-foreground">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          className={`bg-card/50 border-border focus:border-accent focus:ring-accent/50 ${
            errors.email ? "border-destructive" : ""
          }`}
          disabled={status.type === "loading"}
        />
        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
      </div>

      {/* Company Field */}
      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-semibold text-foreground">
          Company (Optional)
        </label>
        <Input
          id="company"
          name="company"
          type="text"
          placeholder="Your Company"
          value={formData.company}
          onChange={handleChange}
          className="bg-card/50 border-border focus:border-accent focus:ring-accent/50"
          disabled={status.type === "loading"}
        />
      </div>

      {/* Subject Dropdown */}
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
          Subject
        </label>
        <Select value={formData.subject} onValueChange={handleSelectChange} disabled={status.type === "loading"}>
          <SelectTrigger className={`bg-card/50 border-border focus:border-accent focus:ring-accent/50 ${
            errors.subject ? "border-destructive" : ""
          }`}>
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="partnership">Partnership Inquiry</SelectItem>
            <SelectItem value="product">Product Demo</SelectItem>
            <SelectItem value="support">Technical Support</SelectItem>
            <SelectItem value="sales">Sales Question</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your inquiry..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`bg-card/50 border-border focus:border-accent focus:ring-accent/50 resize-none ${
            errors.message ? "border-destructive" : ""
          }`}
          disabled={status.type === "loading"}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={status.type === "loading" || status.type === "success"}
        className="w-full bg-accent text-primary-foreground hover:bg-accent/90 h-12 font-semibold text-base"
      >
        {status.type === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      {/* Privacy Notice */}
      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
}
