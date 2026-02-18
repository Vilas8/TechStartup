import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Target, Lightbulb, Heart } from "lucide-react";

/**
 * About Page
 * Company mission, vision, and values
 */

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold tracking-wider">PIONEERS</span>
          </button>
          <Button
            onClick={() => setLocation("/")}
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
          >
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold">About Pioneers</h1>
              <p className="text-xl text-muted-foreground">
                Building the future of technology, one innovation at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, Pioneers emerged from a simple belief: technology should be accessible, powerful, and transformative. What started as a small team of engineers with a shared vision has grown into a global organization of over 50 talented professionals dedicated to solving the world's most challenging problems.
              </p>

              <p>
                Our journey began when our founders realized that existing solutions in the market were either too complex, too expensive, or simply didn't meet the needs of modern businesses. They decided to build something different—something that would combine cutting-edge technology with intuitive design and exceptional customer service.
              </p>

              <p>
                Today, Pioneers serves thousands of companies across 50+ countries, helping them streamline their operations, accelerate their growth, and achieve their boldest ambitions. From startups to Fortune 500 companies, our products have become essential tools in the modern tech stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="space-y-4 p-8 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and transformation in the digital age.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-4 p-8 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/70 to-accent/30 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most trusted technology partner, known for innovation, reliability, and our unwavering commitment to customer success.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4 p-8 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/50 to-accent/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Innovation, integrity, customer-centricity, and excellence drive everything we do. We believe in building lasting relationships and creating positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Our Journey</h2>

            <div className="space-y-8">
              {[
                { year: "2020", title: "Founded", description: "Pioneers is established with a mission to transform technology" },
                { year: "2021", title: "First Product Launch", description: "CloudSync becomes our flagship product with 100+ early adopters" },
                { year: "2022", title: "Series A Funding", description: "Raise ₹10 Crore to accelerate product development and market expansion" },
                { year: "2023", title: "Global Expansion", description: "Expand to 50+ countries and reach 5000+ active customers" },
                { year: "2024", title: "Series B Funding", description: "Raise ₹50 Crore to scale operations and build new products" },
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-accent" />
                    {idx !== 4 && <div className="w-1 h-24 bg-gradient-to-b from-accent to-transparent mt-4" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm font-bold text-accent mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Team Members" },
              { value: "5000+", label: "Active Customers" },
              { value: "50+", label: "Countries" },
              { value: "₹50Cr", label: "Funding Raised" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl font-bold text-accent">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Join Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Be part of a team that's transforming the future of technology. We're always looking for talented individuals to join us.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-primary-foreground hover:bg-accent/90 h-12 px-8 text-base font-semibold">
                View Careers
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => setLocation("/")}
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 h-12 px-8 text-base font-semibold"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Pioneers. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
