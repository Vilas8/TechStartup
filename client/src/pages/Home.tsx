import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Users, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import ContactForm from "@/components/ContactForm";
import { products } from "@/const/products";
import { formatINR } from "@/lib/currency";

/**
 * Design System: Modern Minimalist with Kinetic Energy
 * - Deep charcoal background (#0F172A) with electric cyan accents (#00D9FF)
 * - Space Mono for headlines (technical credibility), Inter for body
 * - Asymmetric layouts with diagonal dividers and staggered sections
 * - Smooth scroll animations and hover effects with kinetic energy
 */

export default function Home() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [, setLocation] = useLocation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-6 h-6" />;
      case "Code2":
        return <Code2 className="w-6 h-6" />;
      case "Users":
        return <Users className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setLocation("/")}>
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-lg tracking-wider">PIONEERS</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setLocation("/about")}
              className="text-sm hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => setLocation("/pricing")}
              className="text-sm hover:text-accent transition-colors"
            >
              Pricing
            </button>
            <a href="#products" className="text-sm hover:text-accent transition-colors">
              Products
            </a>
            <a href="#team" className="text-sm hover:text-accent transition-colors">
              Team
            </a>
            <Button
              onClick={() => setLocation("/pricing")}
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-primary-foreground"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/cX0LVZAy4L4f3TBou6zTYA/sandbox/Av1WaBkou6CSDErzEpZE4E-img-1_1771312120000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY1gwTFZaQXk0TDRmM1RCb3U2elRZQS9zYW5kYm94L0F2MVdhQmtvdTZDU0RFcnpFcFpFNEUtaW1nLTFfMTc3MTMxMjEyMDAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sxl1SDTyr9EbsXE5M4K38Ap4uOFSb6jzUy1QrTzHUmUchJMluc8Du6SRO9LOacSgpfLKMMN7c9aJ08K6Q7y-5KW7ShEvGv1tn3IAUrexngKJc-sFWkExTxYLV7tOnpvATaSdlmKdhOzBp1eiOTj6IHeugbbo6t90LoB-IC6WnRe1bDut1fP8-MyCCQmnANrM4av86U8~p2rBF5qZxEx99T6qynFkzinesZWXidx20zfxyZO-A2FxjF5eArGF~JNZ5q5a7pF67-DdpBrFyPXxenIvB7GhyNE77Apq76piP1BNIPnLP4gGhIqe5PRTRfgAQ2fYAUZ6Z03rgh4JPc0A6w__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />

        {/* Content */}
        <div className="container relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                The Future of
                <br />
                <span className="text-accent">Innovation</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Pioneers is building cutting-edge technology solutions that transform how businesses operate. We combine bold vision with technical excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setLocation("/pricing")}
                className="bg-accent text-primary-foreground hover:bg-accent/90 h-12 px-8 text-base font-semibold"
              >
                Explore Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => setLocation("/about")}
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 h-12 px-8 text-base font-semibold"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/50 border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-accent font-semibold">50+</span> team members worldwide
              </p>
            </div>
          </div>

          {/* Right side visual - empty space for asymmetry */}
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/30 relative overflow-hidden">
        {/* Diagonal divider top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-block">
                <span className="text-accent text-sm font-mono font-bold tracking-widest">ABOUT US</span>
              </div>
              <h2 className="text-4xl font-bold">
                Building Tomorrow's Technology Today
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2020, Pioneers emerged from a simple belief: technology should be accessible, powerful, and transformative. Our team of engineers, designers, and visionaries work together to solve the world's most challenging problems.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">150+</div>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">₹50Cr</div>
                  <p className="text-sm text-muted-foreground">Funding Raised</p>
                </div>
              </div>

              <Button
                onClick={() => setLocation("/about")}
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 mt-4"
              >
                Learn Our Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Right visual */}
            <div className="relative h-96 order-1 lg:order-2">
              <div
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/cX0LVZAy4L4f3TBou6zTYA/sandbox/Av1WaBkou6CSDErzEpZE4E-img-2_1771312118000_na1fn_cHJvZHVjdC1zaG93Y2FzZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY1gwTFZaQXk0TDRmM1RCb3U2elRZQS9zYW5kYm94L0F2MVdhQmtvdTZDU0RFcnpFcFpFNEUtaW1nLTJfMTc3MTMxMjExODAwMF9uYTFmbl9jSEp2WkhWamRDMXphRzkzWTJGelpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=O5Gvh6yBnPZ~A4gZPvn6V1TFVXSuJVxuUQG9kuOIwUVo0XaZk-64Q1oWqjucEcQzOYs~srmr3nRyrzMICwhlMtthfy6dv7cpuspDSsX0ea6ITtP2PIIic-bWdDHtgOUoYWy9bfgoeBTu7WRSYJcI0-Dwk8J-TXXjkixkpHUtSTClU3o-raKwi3-vZC-B98cf1GP1Ek~AaUP7KobNPdeh3DmDB7WSp1Z20yA04rBF8WWuykM36lCTzEyPSQFxV8bC4vNIY5gHUimtD5nj5j2CFZ53PPUD246OVAzJtoHkz48EAJ-ZOKJCt3xtBgZ9FaeYJ91XIdk7ltCo-5raeMt1eA__')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/cX0LVZAy4L4f3TBou6zTYA/sandbox/Av1WaBkou6CSDErzEpZE4E-img-3_1771312121000_na1fn_aW5ub3ZhdGlvbi1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY1gwTFZaQXk0TDRmM1RCb3U2elRZQS9zYW5kYm94L0F2MVdhQmtvdTZDU0RFcnpFcFpFNEUtaW1nLTNfMTc3MTMxMjEyMTAwMF9uYTFmbl9hVzV1YjNaaGRHbHZiaTF3WVhSMFpYSnUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BFDgqIzTEv~EulTVHsHop9r5haQvTg~dIu2~0NHnk1-Hx55AqgA-BLh-TIpv7Mw4-C2~q679OSHGVaiYJlVAJh00mzWb9BKIZTZ-mvOhBCOusZmEXY4tC7qG8fxdBNa5YJ2JippQIuLx3sR2UVTIWcg5UATzCYtw5zxSwIUKC1SC73gWBjqwSJaVHF0O3zySCiA~lt9d~5WKi-avRXnIaA~12Ea4DsIMIW9Z-psW8me~SB7H1dAj-myuCujjfr7RMnR4DWhd0bUfebmJwW2KTgGzR-FF8yf4ARDsis0ZiaVEiubW1A9Oal69ayoPG2foQel9YAaW16Gk561exB8ZTg__')",
            backgroundSize: "cover",
          }}
        />

        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-accent text-sm font-mono font-bold tracking-widest">OUR PRODUCTS</span>
            <h2 className="text-4xl font-bold">Innovative Solutions for Modern Challenges</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We build products that combine cutting-edge technology with intuitive design to solve real-world problems.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                onClick={() => setLocation(`/product/${product.slug}`)}
                className="group relative p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-all duration-300 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredProduct(idx)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Hover gradient background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${product.color}`}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-primary-foreground`}>
                    {getIcon(product.icon)}
                  </div>

                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{product.shortDescription}</p>

                  <div className="pt-4 space-y-3">
                    <div className="text-sm">
                      <span className="text-accent font-bold">Starting at</span>
                      <div className="text-lg font-bold text-accent">
                        {formatINR(Math.min(...Object.values(product.pricing)))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Border animation */}
                <div className="absolute inset-0 border border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setLocation("/pricing")}
              className="bg-accent text-primary-foreground hover:bg-accent/90 h-12 px-8 text-base font-semibold"
            >
              View All Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-card/30 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/cX0LVZAy4L4f3TBou6zTYA/sandbox/Av1WaBkou6CSDErzEpZE4E-img-4_1771312120000_na1fn_dGVhbS1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY1gwTFZaQXk0TDRmM1RCb3U2elRZQS9zYW5kYm94L0F2MVdhQmtvdTZDU0RFcnpFcFpFNEUtaW1nLTRfMTc3MTMxMjEyMDAwMF9uYTFmbl9kR1ZoYlMxd1lYUjBaWEp1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RoJikzpX6MKG7~0rv5sr7gHorde79S8xIOPCOd0xDdLEoq15LauFSGiQNy5BnRbecCz48or7llOIJkhkzio7b5Egu2ik~1aH~DnW~gDApr033jsovtk0uF0rtO-2-DWpuBByjoxwVy-EaF4XLKy1uLlialalWVvMZxvJTAmVwwinzUcvXm1SECBQHL5joKNP-eGRMxamBe5fANOBMUPZnX8aOaDkJzGWoJf0fPUkdVNo0yqeus93P8tQTSEUvWJwPHYuhs6E53yCR5B9ZzFog6AWrzBK67caT4KELEq14KhejiK-AfvfMr26kbWSAb3Sa0toDPE5Fm1uGscxx1DHwQ__')",
            backgroundSize: "cover",
          }}
        />

        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-accent text-sm font-mono font-bold tracking-widest">OUR TEAM</span>
            <h2 className="text-4xl font-bold">Meet the Pioneers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse team of engineers, designers, and visionaries united by the mission to transform technology.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Alex Chen", role: "CEO & Co-founder", initials: "AC" },
              { name: "Sarah Williams", role: "CTO & Co-founder", initials: "SW" },
              { name: "Marcus Johnson", role: "Head of Design", initials: "MJ" },
              { name: "Elena Rodriguez", role: "VP Engineering", initials: "ER" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-lg border border-border bg-background/50 hover:bg-card/50 transition-all duration-300 text-center overflow-hidden"
              >
                {/* Avatar */}
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {member.initials}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="p-2 rounded-full bg-card hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-accent" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-card hover:bg-accent/20 transition-colors">
                    <Twitter className="w-4 h-4 text-accent" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-card hover:bg-accent/20 transition-colors">
                    <Github className="w-4 h-4 text-accent" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container">
          <div className="relative rounded-lg border border-border bg-gradient-to-r from-accent/10 to-accent/5 p-12 md:p-16 text-center overflow-hidden">
            {/* Accent background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

            <h2 className="text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Get in touch with our team to learn how Pioneers can help transform your business with cutting-edge technology solutions.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">P</span>
                </div>
                <span className="font-bold tracking-wider">PIONEERS</span>
              </div>
              <p className="text-sm text-muted-foreground">Building the future of technology, one innovation at a time.</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {products.map((product) => (
                  <li key={product.id}>
                    <button
                      onClick={() => setLocation(`/product/${product.slug}`)}
                      className="hover:text-accent transition-colors"
                    >
                      {product.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => setLocation("/about")} className="hover:text-accent transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <a href="#team" className="hover:text-accent transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <button onClick={() => setLocation("/pricing")} className="hover:text-accent transition-colors">
                    Pricing
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full bg-card hover:bg-accent/20 transition-colors">
                  <Github className="w-4 h-4 text-accent" />
                </a>
                <a href="#" className="p-2 rounded-full bg-card hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-accent" />
                </a>
                <a href="#" className="p-2 rounded-full bg-card hover:bg-accent/20 transition-colors">
                  <Twitter className="w-4 h-4 text-accent" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
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
