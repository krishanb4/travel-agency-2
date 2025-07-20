import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Star,
  Clock,
  Users,
  Camera,
  Search,
  Filter,
  ChevronRight,
  Heart,
  Calendar,
} from "lucide-react";

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Nuwara Eliya",
      country: "Sri Lanka",
      image: "/images/hero-1.png",
      price: "$1,299",
      duration: "5 Days",
      rating: 4.8,
      reviews: 245,
      description:
        "Experience the cool climate and tea plantations of Sri Lanka's hill country.",
      highlights: [
        "Tea Factory Tours",
        "Gregory Lake",
        "Horton Plains",
        "Little England Architecture",
      ],
      category: "Mountain",
      featured: true,
    },
    {
      id: 2,
      name: "Sigiriya",
      country: "Sri Lanka",
      image: "/images/hero-5.png",
      price: "$1,499",
      duration: "3 Days",
      rating: 4.9,
      reviews: 312,
      description:
        "Climb the ancient rock fortress and explore the cultural triangle.",
      highlights: [
        "Lion Rock Fortress",
        "Ancient Frescoes",
        "Water Gardens",
        "Archaeological Museum",
      ],
      category: "Cultural",
      featured: true,
    },
    {
      id: 3,
      name: "Yala National Park",
      country: "Sri Lanka",
      image: "/images/hero-3.png",
      price: "$999",
      duration: "2 Days",
      rating: 4.7,
      reviews: 189,
      description:
        "Wildlife safari adventure in Sri Lanka's most visited national park.",
      highlights: [
        "Leopard Spotting",
        "Elephant Herds",
        "Bird Watching",
        "Coastal Views",
      ],
      category: "Wildlife",
      featured: false,
    },
    {
      id: 4,
      name: "Galle Fort",
      country: "Sri Lanka",
      image: "/images/galle-fort.webp",
      price: "$899",
      duration: "2 Days",
      rating: 4.6,
      reviews: 156,
      description: "Explore the UNESCO World Heritage Dutch colonial fort.",
      highlights: [
        "Dutch Architecture",
        "Lighthouse",
        "Rampart Walk",
        "Local Markets",
      ],
      category: "Cultural",
      featured: false,
    },
    {
      id: 5,
      name: "Ella",
      country: "Sri Lanka",
      image: "/images/hero-4.png",
      price: "$1,199",
      duration: "4 Days",
      rating: 4.8,
      reviews: 203,
      description: "Scenic train rides and breathtaking mountain views.",
      highlights: [
        "Nine Arch Bridge",
        "Little Adam's Peak",
        "Ravana Falls",
        "Tea Plantations",
      ],
      category: "Mountain",
      featured: false,
    },
    {
      id: 6,
      name: "Mirissa",
      country: "Sri Lanka",
      image: "/images/tropical-beach.png",
      price: "$1,099",
      duration: "3 Days",
      rating: 4.5,
      reviews: 167,
      description: "Whale watching and pristine beaches on the southern coast.",
      highlights: [
        "Blue Whale Watching",
        "Coconut Hill",
        "Secret Beach",
        "Surfing",
      ],
      category: "Beach",
      featured: false,
    },
  ];

  const categories = ["All", "Mountain", "Cultural", "Wildlife", "Beach"];

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
              className="text-sm font-medium text-primary"
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
        <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center">
          <div className="absolute inset-0 bg-[url('/images/hero-1.png')] opacity-20 bg-cover bg-center" />
          <div className="container relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold tracking-tight mb-4">
                Discover Amazing Destinations
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Explore handpicked destinations that offer unforgettable
                experiences and breathtaking views
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-lg p-4 flex gap-4 max-w-2xl">
                <div className="flex-1">
                  <Input
                    placeholder="Search destinations..."
                    className="border-0 focus:ring-0"
                  />
                </div>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="container py-8">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="container pb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {destinations
              .filter((dest) => dest.featured)
              .map((destination) => (
                <Card key={destination.id} className="overflow-hidden group">
                  <div className="relative h-80">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-white/90 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{destination.country}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {destination.name}
                      </h3>
                      <p className="text-white/90 mb-4">
                        {destination.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-white/90">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            <span className="text-sm">
                              {destination.rating}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">
                              {destination.duration}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white/90 text-sm">Starting from</p>
                          <p className="text-2xl font-bold text-white">
                            {destination.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* All Destinations */}
        <section className="container pb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            All Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                      {destination.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{destination.country}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {destination.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">
                        {destination.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({destination.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{destination.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Starting from
                      </p>
                      <p className="text-xl font-bold text-primary">
                        {destination.price}
                      </p>
                    </div>
                    <Button size="sm">
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Can't Find Your Dream Destination?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our travel experts can help you plan a custom itinerary to any
              destination you have in mind
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">
                <Calendar className="h-4 w-4 mr-2" />
                Plan Custom Trip
              </Button>
              <Button size="lg" variant="outline">
                Contact Expert
              </Button>
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
