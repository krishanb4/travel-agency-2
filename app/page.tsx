import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CalendarIcon,
  ChevronRight,
  Globe,
  MapPin,
  Plane,
  Search,
  Star,
  Users,
  Briefcase,
  Car,
  Clock,
  Headphones,
  Zap,
  DollarSign,
  Mail,
  Gift,
  Settings,
  Check,
} from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";

export default function Home() {
  const heroImages = [
    "/images/hero-1.png",
    "/images/hero-2.png",
    "/images/hero-3.png",
    "/images/hero-4.png",
    "/images/hero-5.png",
  ];

  const heroTitles = [
    "Discover breathtaking landscapes",
    "Experience wildlife adventures",
    "Explore exotic destinations",
    "Journey through scenic railways",
    "Visit ancient wonders",
  ];

  const heroDescriptions = [
    "Immerse yourself in the beauty of nature with our curated mountain expeditions",
    "Get up close with magnificent wildlife in their natural habitats",
    "Discover unique cultures and create memories that last a lifetime",
    "Travel in comfort through some of the world's most scenic railway routes",
    "Step back in time and explore ancient civilizations and historic sites",
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
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Tours
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#"
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Carousel */}
        <HeroCarousel
          images={heroImages}
          titles={heroTitles}
          descriptions={heroDescriptions}
        />

        {/* Featured Destinations */}
        <section className="container py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Destinations
              </h2>
              <p className="text-muted-foreground mt-2">
                Explore our handpicked destinations for your next adventure
              </p>
            </div>
            <Button variant="link" className="mt-2 md:mt-0 p-0">
              View all destinations
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Nuwara Eliya, Sri Lanka",
                image: "/images/hero-1.png",
                price: "$1,299",
              },
              {
                name: "Sigiriya, Sri Lanka",
                image: "/images/hero-5.png",
                price: "$1,499",
              },
              {
                name: "Safari Adventure",
                image: "/images/hero-3.png",
                price: "$999",
              },
            ].map((destination, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white">
                      {destination.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-white/90">
                        Starting from{" "}
                        <span className="font-bold text-white">
                          {destination.price}
                        </span>
                      </p>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 text-white border-none"
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* New Premium Services Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Our Premium Services
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                We offer exceptional services to make your travel experience
                seamless and memorable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Reservation service 24/7 7 days a week.",
                  icon: <Clock className="h-6 w-6 text-green-600" />,
                },
                {
                  title:
                    "Customized solutions to each client's travel requirements",
                  icon: <Settings className="h-6 w-6 text-green-600" />,
                },
                {
                  title:
                    "24/7 customer service including out of office hours + holidays.",
                  icon: <Headphones className="h-6 w-6 text-blue-600" />,
                },
                {
                  title:
                    "Multiple requirements and flexibility at every level of our client's itinerary",
                  icon: <DollarSign className="h-6 w-6 text-green-600" />,
                },
                {
                  title:
                    "Speedy reporting on related travel services, including ticket, visas and all itinerary.",
                  icon: <Zap className="h-6 w-6 text-orange-600" />,
                },
                {
                  title:
                    "Customer feedback – email, social media and face-to-face",
                  icon: <Mail className="h-6 w-6 text-green-600" />,
                },
                {
                  title:
                    "timely identification of cancelled flights and prompt re-booking",
                  icon: <Plane className="h-6 w-6 text-purple-600" />,
                },
                {
                  title:
                    "Continuous availability of attractive special offers and packages",
                  icon: <Gift className="h-6 w-6 text-green-600" />,
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    {/* Check mark and icon */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 leading-relaxed">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                About Beyond The Ocean
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Creating unforgettable travel experiences since 2007
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Beyond The Ocean Travel is a premier travel agency dedicated
                  to providing exceptional travel experiences tailored to your
                  preferences and dreams.
                </p>
                <p>
                  With over 15 years of experience in the travel industry, we've
                  helped thousands of travelers explore the world's most
                  beautiful destinations with personalized itineraries and
                  premium services.
                </p>
                <p>
                  Our team of travel experts is passionate about creating
                  seamless journeys that allow you to focus on making memories
                  while we handle all the details.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">25+</p>
                    <p className="text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">100+</p>
                    <p className="text-sm text-muted-foreground">
                      Destinations
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">10k+</p>
                    <p className="text-sm text-muted-foreground">
                      Happy Travelers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-2.png"
                  alt="Travel experiences"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-sm italic">
                  "Beyond The Ocean made our honeymoon absolutely perfect. Every
                  detail was taken care of, allowing us to simply enjoy our time
                  together."
                </p>
                <p className="text-sm font-semibold mt-2">- Sarah & Michael</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Hear from travelers who have experienced our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Emma Thompson",
                  location: "London, UK",
                  text: "The attention to detail was impressive. From the moment we landed until our departure, everything was perfectly arranged. Will definitely book with Beyond The Ocean again!",
                  image: "/images/adventure-couple.png",
                },
                {
                  name: "David Chen",
                  location: "Toronto, Canada",
                  text: "Our family trip to Costa Rica was the adventure of a lifetime. The guides were knowledgeable, accommodations were excellent, and the itinerary was perfectly balanced.",
                  image: "/images/tropical-beach.png",
                },
                {
                  name: "Sophia Rodriguez",
                  location: "Barcelona, Spain",
                  text: "As a solo traveler, safety and experience quality are my priorities. Beyond The Ocean exceeded my expectations on both fronts. Their local connections made my trip truly authentic.",
                  image: "/images/cultural-show.png",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white overflow-hidden">
                  <div className="relative h-32">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name}'s travel experience`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    </div>
                    <p className="italic mb-4">{testimonial.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-sm font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Endorsements Section */}
        <section className="container py-16 border-t">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Endorsements</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              We are proud to be recognized and endorsed by these prestigious
              organizations
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <Image
                src="/images/logo-sltda.png"
                alt="Sri Lanka Tourism Development Authority"
                width={150}
                height={150}
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
                width={150}
                height={150}
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
                width={150}
                height={150}
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
                width={150}
                height={150}
                className="mb-3"
              />
              <p className="text-sm text-center font-medium">
                Department of the Registrar of Companies
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="bg-primary rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/tropical-beach.png')] opacity-20 mix-blend-overlay bg-cover bg-center" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                Ready to start your next adventure?
              </h2>
              <p className="text-white/90 mb-6">
                Let us help you plan the perfect getaway. Our travel experts are
                ready to create a personalized itinerary just for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Book a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10"
                >
                  Browse Destinations
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-muted py-12">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-2xl font-bold tracking-tight mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-muted-foreground mb-6">
                Get travel inspiration, exclusive offers, and tips delivered
                straight to your inbox
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="bg-white" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Company Info Section */}
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
                Beyond the Ocean Travel (Pvt) Ltd., was incorporated by the
                Companies Act No. 7 of 2007 of Sri Lanka on 17 th of July 2020
                under PV 00224427 to service the growing demand within the
                Travel and Tourism sector of Sri Lanka.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Pages and Newsletter Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Pages</h4>
              <ul className="space-y-2 mb-8">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    OUR SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    OUR VALUES
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ENDORSEMENTS
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>

              {/* Newsletter Section */}
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  Newsletter
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </h4>
                <p className="text-gray-400 mb-4">
                  Subscribe our newsletter to get our latest update & news.
                </p>
                <form className="flex gap-2 mb-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-green-500 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </form>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>I agree to all terms and policies</span>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Drop a Line</p>
                    <p className="text-gray-400">+94 (0) 11 276 7184</p>
                    <p className="text-gray-400">+94 (0) 11 276 5040</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Email Address</p>
                    <p className="text-gray-400">info@btotravel.lk</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Visit office</p>
                    <p className="text-gray-400">
                      11A Prathibimbarama Road, Kalubowila Dehiwala, Mount
                      Lavinia.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Beyond The Ocean Travel. All
                rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
