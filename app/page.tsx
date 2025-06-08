import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ChevronRight, Globe, MapPin, Plane, Search, Star, Users, Briefcase, Car } from "lucide-react"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  const heroImages = [
    "/images/hero-1.png",
    "/images/hero-2.png",
    "/images/hero-3.png",
    "/images/hero-4.png",
    "/images/hero-5.png",
  ]

  const heroTitles = [
    "Discover breathtaking landscapes",
    "Experience wildlife adventures",
    "Explore exotic destinations",
    "Journey through scenic railways",
    "Visit ancient wonders",
  ]

  const heroDescriptions = [
    "Immerse yourself in the beauty of nature with our curated mountain expeditions",
    "Get up close with magnificent wildlife in their natural habitats",
    "Discover unique cultures and create memories that last a lifetime",
    "Travel in comfort through some of the world's most scenic railway routes",
    "Step back in time and explore ancient civilizations and historic sites",
  ]

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
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Destinations
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Tours
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
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
        <HeroCarousel images={heroImages} titles={heroTitles} descriptions={heroDescriptions} />

        {/* Search Section */}
        <section className="container relative -mt-24 z-10 mb-16">
          <div className="bg-white rounded-xl shadow-xl p-6">
            <Tabs defaultValue="flights" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="flights" className="text-sm sm:text-base">
                  <Plane className="h-4 w-4 mr-2" />
                  Flights
                </TabsTrigger>
                <TabsTrigger value="hotels" className="text-sm sm:text-base">
                  <MapPin className="h-4 w-4 mr-2" />
                  Hotels
                </TabsTrigger>
                <TabsTrigger value="packages" className="text-sm sm:text-base">
                  <Globe className="h-4 w-4 mr-2" />
                  Packages
                </TabsTrigger>
              </TabsList>
              <TabsContent value="flights" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">From</label>
                    <Input placeholder="City or Airport" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">To</label>
                    <Input placeholder="City or Airport" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Departure</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>Pick a date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Travelers</label>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      <span>2 Adults, 0 Children</span>
                    </Button>
                  </div>
                </div>
                <Button className="w-full sm:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Search Flights
                </Button>
              </TabsContent>
              <TabsContent value="hotels" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">Destination</label>
                    <Input placeholder="City or Hotel" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Check-in</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>Pick a date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Check-out</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>Pick a date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <Button className="w-full sm:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Search Hotels
                </Button>
              </TabsContent>
              <TabsContent value="packages" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Destination</label>
                    <Input placeholder="Where do you want to go?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Travel Dates</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>Select dates</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="range" />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Package Type</label>
                    <select className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md">
                      <option>All Inclusive</option>
                      <option>Flight + Hotel</option>
                      <option>Cruise Package</option>
                      <option>Adventure Tour</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full sm:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Find Packages
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="container py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Destinations</h2>
              <p className="text-muted-foreground mt-2">Explore our handpicked destinations for your next adventure</p>
            </div>
            <Button variant="link" className="mt-2 md:mt-0 p-0">
              View all destinations
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Maldives", image: "/images/hero-1.png", price: "$1,299" },
              { name: "Sigiriya, Sri Lanka", image: "/images/hero-5.png", price: "$1,499" },
              { name: "Safari Adventure", image: "/images/hero-3.png", price: "$999" },
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
                    <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-white/90">
                        Starting from <span className="font-bold text-white">{destination.price}</span>
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

        {/* Services Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Our Premium Services</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                We offer a wide range of services to make your travel experience seamless and memorable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Flight Reservations",
                  description: "Book domestic and international flights at competitive prices with flexible options.",
                  icon: <Plane className="h-10 w-10 text-primary" />,
                  image: "/images/hero-1.png",
                },
                {
                  title: "Luxury Accommodations",
                  description: "Stay at handpicked premium hotels and resorts with exclusive amenities and services.",
                  icon: <MapPin className="h-10 w-10 text-primary" />,
                  image: "/images/tropical-beach.png",
                },
                {
                  title: "Corporate Travel",
                  description:
                    "Specialized services for business travelers with priority support and executive benefits.",
                  icon: <Briefcase className="h-10 w-10 text-primary" />,
                  image: "/images/business-group.png",
                },
                {
                  title: "Airport Transfers",
                  description: "Comfortable and reliable airport pickup and drop-off services at your destination.",
                  icon: <Car className="h-10 w-10 text-primary" />,
                  image: "/images/airport-transfer.png",
                },
                {
                  title: "Guided Tours",
                  description: "Explore destinations with expert local guides who bring stories and history to life.",
                  icon: <Users className="h-10 w-10 text-primary" />,
                  image: "/images/adventure-couple.png",
                },
                {
                  title: "24/7 Customer Support",
                  description: "Round-the-clock assistance for any travel-related queries or emergencies.",
                  icon: <Star className="h-10 w-10 text-primary" />,
                  image: "/images/booking-tickets.png",
                },
              ].map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full">{service.icon}</div>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
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
                  Beyond The Ocean Travel is a premier travel agency dedicated to providing exceptional travel
                  experiences tailored to your preferences and dreams.
                </p>
                <p>
                  With over 15 years of experience in the travel industry, we've helped thousands of travelers explore
                  the world's most beautiful destinations with personalized itineraries and premium services.
                </p>
                <p>
                  Our team of travel experts is passionate about creating seamless journeys that allow you to focus on
                  making memories while we handle all the details.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">25+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">100+</p>
                    <p className="text-sm text-muted-foreground">Destinations</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">10k+</p>
                    <p className="text-sm text-muted-foreground">Happy Travelers</p>
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
                  "Beyond The Ocean made our honeymoon absolutely perfect. Every detail was taken care of, allowing us
                  to simply enjoy our time together."
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
              <h2 className="text-3xl font-bold tracking-tight">What Our Clients Say</h2>
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
                        <span className="text-sm font-semibold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
              We are proud to be recognized and endorsed by these prestigious organizations
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
              <p className="text-sm text-center font-medium">Sri Lanka Tourism Development Authority</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/logo-caa.png"
                alt="Civil Aviation Authority Sri Lanka"
                width={150}
                height={150}
                className="mb-3"
              />
              <p className="text-sm text-center font-medium">Civil Aviation Authority Sri Lanka</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/logo-iata.png"
                alt="International Air Transport Association"
                width={150}
                height={150}
                className="mb-3"
              />
              <p className="text-sm text-center font-medium">International Air Transport Association</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/logo-registrar.png"
                alt="Department of the Registrar of Companies"
                width={150}
                height={150}
                className="mb-3"
              />
              <p className="text-sm text-center font-medium">Department of the Registrar of Companies</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="bg-primary rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/tropical-beach.png')] opacity-20 mix-blend-overlay bg-cover bg-center" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Ready to start your next adventure?</h2>
              <p className="text-white/90 mb-6">
                Let us help you plan the perfect getaway. Our travel experts are ready to create a personalized
                itinerary just for you.
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
              <h3 className="text-2xl font-bold tracking-tight mb-2">Subscribe to our newsletter</h3>
              <p className="text-muted-foreground mb-6">
                Get travel inspiration, exclusive offers, and tips delivered straight to your inbox
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
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
              <p className="text-gray-400 mb-4">
                Creating unforgettable travel experiences since 2007. Your journey begins with us.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Flight Booking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Hotel Reservations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Vacation Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cruise Bookings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Travel Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Visa Assistance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-400">123 Travel Street, Colombo, Sri Lanka</span>
                </li>
                <li className="flex items-start gap-3">
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
                    className="text-gray-400 mt-0.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-gray-400">+94 123 456 7890</span>
                </li>
                <li className="flex items-start gap-3">
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
                    className="text-gray-400 mt-0.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-gray-400">info@beyondtheocean.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Beyond The Ocean Travel. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
