import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  Building,
  Car,
  MapPin,
  Shield,
  Clock,
  Headphones,
  Settings,
  DollarSign,
  Mail,
  Gift,
  Zap,
  Check,
  Globe,
  Calendar,
  Users,
  Camera,
  Utensils,
  CreditCard,
  FileText,
  Phone,
} from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: <Plane className="h-12 w-12 text-blue-600" />,
      title: "Flight Bookings",
      description:
        "Domestic and international flight reservations with competitive prices and flexible options.",
      features: [
        "Best price guarantee",
        "24/7 booking support",
        "Flexible date changes",
        "Group booking discounts",
        "Travel insurance options",
      ],
      popular: true,
    },
    {
      icon: <Building className="h-12 w-12 text-green-600" />,
      title: "Hotel Reservations",
      description:
        "Luxury hotels, boutique accommodations, and budget-friendly stays worldwide.",
      features: [
        "Curated hotel selection",
        "Best rate guarantee",
        "Room upgrades available",
        "Special occasion packages",
        "24/7 concierge support",
      ],
      popular: true,
    },
    {
      icon: <Car className="h-12 w-12 text-orange-600" />,
      title: "Transportation",
      description:
        "Comfortable and reliable transportation solutions for all your travel needs.",
      features: [
        "Airport transfers",
        "Private vehicle hire",
        "Chauffeur services",
        "Group transportation",
        "Multi-destination trips",
      ],
      popular: false,
    },
    {
      icon: <MapPin className="h-12 w-12 text-purple-600" />,
      title: "Custom Itineraries",
      description:
        "Personalized travel plans crafted to match your interests and preferences.",
      features: [
        "Expert travel consultation",
        "Personalized recommendations",
        "Flexible scheduling",
        "Local insider access",
        "Detailed travel guides",
      ],
      popular: true,
    },
    {
      icon: <FileText className="h-12 w-12 text-cyan-600" />,
      title: "Visa Assistance",
      description:
        "Complete visa processing support and documentation guidance.",
      features: [
        "Visa requirement consultation",
        "Document preparation",
        "Application submission",
        "Status tracking",
        "Express processing available",
      ],
      popular: false,
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "Travel Insurance",
      description:
        "Comprehensive travel protection for peace of mind during your journey.",
      features: [
        "Medical coverage",
        "Trip cancellation protection",
        "Baggage insurance",
        "Emergency assistance",
        "24/7 claim support",
      ],
      popular: false,
    },
  ];

  const premiumServices = [
    {
      title: "Reservation service 24/7 7 days a week",
      description:
        "Round-the-clock booking and reservation support whenever you need it",
      icon: <Clock className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Customized solutions to each client's travel requirements",
      description:
        "Tailored travel solutions designed specifically for your unique needs",
      icon: <Settings className="h-6 w-6 text-green-600" />,
    },
    {
      title: "24/7 customer service including out of office hours + holidays",
      description:
        "Always available customer support, even during holidays and after hours",
      icon: <Headphones className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Multiple requirements and flexibility at every level",
      description:
        "Adaptable services that can be modified throughout your journey",
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
    },
    {
      title:
        "Speedy reporting on travel services, tickets, visas and itinerary",
      description:
        "Quick updates and comprehensive reporting on all your travel arrangements",
      icon: <Zap className="h-6 w-6 text-orange-600" />,
    },
    {
      title: "Customer feedback through multiple channels",
      description:
        "Email, social media and face-to-face feedback collection and response",
      icon: <Mail className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Timely identification of cancelled flights and prompt re-booking",
      description:
        "Proactive monitoring and immediate rebooking assistance for disrupted flights",
      icon: <Plane className="h-6 w-6 text-purple-600" />,
    },
    {
      title: "Attractive special offers and packages",
      description:
        "Continuous availability of exclusive deals and promotional packages",
      icon: <Gift className="h-6 w-6 text-green-600" />,
    },
  ];

  const additionalServices = [
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: "Photography Services",
      description: "Professional photography for your special moments",
    },
    {
      icon: <Utensils className="h-8 w-8 text-green-600" />,
      title: "Culinary Experiences",
      description: "Authentic local dining and cooking experiences",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Cultural Immersion",
      description: "Deep cultural experiences with local communities",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Group Travel",
      description: "Specialized services for group and corporate travel",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Beyond The Ocean Travel Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/tours"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Tours
            </Link>
            <Link href="/services" className="text-sm font-medium text-primary">
              Services
            </Link>
            <Link
              href="/about-us"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log In
            </Button>
            <Button size="sm">Book Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
          <div className="absolute inset-0 bg-[url('/images/hero-2.png')] opacity-20 bg-cover bg-center" />
          <div className="container relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold tracking-tight mb-4">
                Comprehensive Travel Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                From flight bookings to custom itineraries, we provide all the
                services you need for a perfect journey
              </p>
              <Button size="lg" variant="secondary">
                <Phone className="h-4 w-4 mr-2" />
                Get Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a seamless travel experience, all in one
              place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className={`overflow-hidden group hover:shadow-lg transition-shadow relative ${
                  service.popular ? "border-primary" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white">Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Premium Services */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Premium Service Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We go above and beyond to ensure your travel experience is
                exceptional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {premiumServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 leading-relaxed">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Extra touches that make your journey even more special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Process */}
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                How We Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process ensures you get the best service from
                consultation to completion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description:
                    "Share your travel dreams and requirements with our expert consultants",
                },
                {
                  step: "02",
                  title: "Planning",
                  description:
                    "We create a detailed itinerary tailored to your preferences and budget",
                },
                {
                  step: "03",
                  title: "Booking",
                  description:
                    "All reservations are made with our trusted partners and confirmed",
                },
                {
                  step: "04",
                  title: "Support",
                  description:
                    "24/7 support throughout your journey for a worry-free experience",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Service Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the service level that best fits your travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Essential",
                price: "Free",
                description: "Basic travel booking services",
                features: [
                  "Flight bookings",
                  "Hotel reservations",
                  "Basic itinerary planning",
                  "Email support",
                  "Standard booking fees",
                ],
                popular: false,
                buttonText: "Get Started",
              },
              {
                name: "Premium",
                price: "$99",
                description: "Enhanced travel experience with premium support",
                features: [
                  "Everything in Essential",
                  "Custom itinerary design",
                  "24/7 phone support",
                  "Priority booking",
                  "Travel insurance included",
                  "Airport transfers",
                  "Local guide recommendations",
                ],
                popular: true,
                buttonText: "Most Popular",
              },
              {
                name: "Luxury",
                price: "$299",
                description: "White-glove service for discerning travelers",
                features: [
                  "Everything in Premium",
                  "Personal travel concierge",
                  "VIP airport services",
                  "Luxury accommodation upgrades",
                  "Private transportation",
                  "Exclusive experiences",
                  "24/7 emergency assistance",
                  "Photography services",
                ],
                popular: false,
                buttonText: "Contact Us",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`overflow-hidden ${
                  plan.popular ? "border-primary ring-2 ring-primary/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {plan.price}
                      {plan.price !== "Free" && (
                        <span className="text-lg text-muted-foreground">
                          /trip
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${plan.popular ? "bg-primary" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from travelers who have experienced our exceptional service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Mitchell",
                  role: "Business Executive",
                  image: "/images/adventure-couple.png",
                  text: "Beyond The Ocean's premium service made our corporate retreat flawless. Their attention to detail and 24/7 support exceeded our expectations.",
                },
                {
                  name: "David Chen",
                  role: "Family Traveler",
                  image: "/images/tropical-beach.png",
                  text: "The custom itinerary they created for our family vacation was perfect. Every detail was thought through, making our trip stress-free and memorable.",
                },
                {
                  name: "Maria Rodriguez",
                  role: "Solo Traveler",
                  image: "/images/cultural-show.png",
                  text: "As a solo female traveler, their comprehensive support and local connections made me feel safe and confident exploring new destinations.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Check className="h-4 w-4 text-yellow-500" key={i} />
                      ))}
                    </div>
                    <p className="italic mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-sm font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="bg-primary rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero-1.png')] opacity-20 mix-blend-overlay bg-cover bg-center" />
            <div className="relative z-10 max-w-2xl text-center mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                Ready to Experience Our Premium Service?
              </h2>
              <p className="text-white/90 mb-6">
                Let our travel experts handle every detail of your journey.
                Contact us today for a personalized consultation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Beyond The Ocean Travel Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto bg-white p-1 rounded"
                />
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Beyond the Ocean Travel (Pvt) Ltd., creating unforgettable
                travel experiences since 2007.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tours"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <p className="text-gray-400">+94 (0) 11 276 7184</p>
              <p className="text-gray-400">info@btotravel.lk</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Beyond The Ocean Travel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
