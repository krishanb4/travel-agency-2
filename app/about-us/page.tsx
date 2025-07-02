import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Users,
  Star,
  Award,
  Heart,
  Target,
  Eye,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      number: "17+",
      label: "Years Experience",
      description: "Serving travelers since 2007",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      number: "100+",
      label: "Destinations",
      description: "Countries and regions covered",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      number: "10,000+",
      label: "Happy Travelers",
      description: "Satisfied customers worldwide",
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      number: "4.9",
      label: "Average Rating",
      description: "Customer satisfaction score",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Passion for Travel",
      description:
        "We believe travel enriches lives and creates lasting memories. Our passion drives us to craft extraordinary experiences.",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "Trust & Reliability",
      description:
        "Your trust is our foundation. We maintain the highest standards of service and transparency in all our dealings.",
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Innovation",
      description:
        "We embrace technology and innovative solutions to enhance your travel experience and make planning effortless.",
    },
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: "Customer-Centric",
      description:
        "Every decision we make puts our customers first. Your satisfaction is our ultimate measure of success.",
    },
  ];

  const team = [
    {
      name: "Rajesh Fernando",
      role: "Founder & CEO",
      image: "/images/adventure-couple.png",
      description:
        "With over 20 years in the travel industry, Rajesh founded Beyond The Ocean with a vision to make premium travel accessible to everyone.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rajesh@btotravel.lk",
      },
    },
    {
      name: "Priya Wijesinghe",
      role: "Head of Operations",
      image: "/images/cultural-show.png",
      description:
        "Priya ensures every trip runs smoothly with her exceptional organizational skills and attention to detail.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priya@btotravel.lk",
      },
    },
    {
      name: "Michael Silva",
      role: "Senior Travel Consultant",
      image: "/images/tropical-beach.png",
      description:
        "Michael's extensive knowledge of global destinations helps create perfect itineraries for our diverse clientele.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@btotravel.lk",
      },
    },
  ];

  const milestones = [
    {
      year: "2007",
      title: "Company Founded",
      description:
        "Beyond The Ocean Travel established with a mission to provide exceptional travel experiences.",
    },
    {
      year: "2010",
      title: "100th Destination",
      description:
        "Expanded our reach to over 100 destinations worldwide, becoming a trusted global travel partner.",
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description:
        "Launched our digital platform, making travel planning more accessible and efficient.",
    },
    {
      year: "2018",
      title: "Industry Recognition",
      description:
        "Received multiple industry awards for excellence in customer service and innovation.",
    },
    {
      year: "2020",
      title: "Incorporation",
      description:
        "Officially incorporated as Beyond The Ocean Travel (Pvt) Ltd under PV 00224427.",
    },
    {
      year: "2024",
      title: "10,000+ Travelers",
      description:
        "Celebrated serving over 10,000 satisfied travelers with unforgettable experiences.",
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
            <Link
              href="/services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link href="/about-us" className="text-sm font-medium text-primary">
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
        <section className="relative h-96 bg-gradient-to-r from-primary to-blue-600 flex items-center">
          <div className="absolute inset-0 bg-[url('/images/hero-2.png')] opacity-20 bg-cover bg-center" />
          <div className="container relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold tracking-tight mb-4">
                About Beyond The Ocean
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Creating unforgettable travel experiences since 2007, we are
                your trusted partner in exploring the world's most beautiful
                destinations.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="container py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Crafting Dreams Into Reality
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Beyond The Ocean Travel (Pvt) Ltd. was incorporated under the
                  Companies Act No. 7 of 2007 of Sri Lanka on 17th July 2020
                  under registration number PV 00224427. However, our journey in
                  the travel industry began much earlier in 2007.
                </p>
                <p>
                  We established our company to service the growing demand
                  within the Travel and Tourism sector of Sri Lanka, with a
                  vision to provide exceptional, personalized travel experiences
                  that go beyond the ordinary.
                </p>
                <p>
                  Over the years, we have evolved from a small local agency to a
                  comprehensive travel service provider, helping thousands of
                  travelers explore the world with confidence and comfort.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-1.png"
                  alt="Our story"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Achievements
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and customer
                satisfaction
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, personalized travel experiences that
                create lasting memories while ensuring the highest standards of
                service, safety, and sustainability. We strive to make every
                journey seamless, enriching, and transformative for our clients.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-l-blue-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Eye className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading travel agency in Sri Lanka and the region,
                recognized for our innovation, integrity, and commitment to
                creating extraordinary travel experiences that connect people
                with cultures, nature, and themselves.
              </p>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision we make and every
                service we provide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the
              years
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <Card className="p-6 bg-white shadow-lg">
                      <div className="text-primary font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Passionate travel experts dedicated to making your journey
                extraordinary
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden bg-white">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {member.description}
                    </p>
                    <div className="flex gap-3">
                      <Button size="icon" variant="outline" className="w-8 h-8">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="w-8 h-8">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="w-8 h-8">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Endorsements */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Endorsements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are proud to be recognized and endorsed by these prestigious
              organizations
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <Image
                src="/images/logo-sltda.png"
                alt="Sri Lanka Tourism Development Authority"
                width={120}
                height={120}
                className="mb-3"
              />
              <p className="text-sm text-center font-medium">
                Sri Lanka Tourism Development Authority
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/logo-caa.png"
                alt="Civil Aviation Authority Sri Lanka"
                width={120}
                height={120}
                className="mb-3"
              />
              <p className="text-sm text-center font-medium">
                Civil Aviation Authority Sri Lanka
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/logo-iata.png"
                alt="International Air Transport Association"
                width={120}
                height={120}
                className="mb-3"
              />
              <p className="text-sm text-center font-medium">
                International Air Transport Association
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/logo-registrar.png"
                alt="Department of the Registrar of Companies"
                width={120}
                height={120}
                className="mb-3"
              />
              <p className="text-sm text-center font-medium">
                Department of the Registrar of Companies
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Start Your Journey With Us?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let our experienced team help you create memories that will last
                a lifetime
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Calendar className="h-4 w-4 mr-2" />
                  Plan Your Trip
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
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
