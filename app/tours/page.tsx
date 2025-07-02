import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Star,
  Clock,
  Users,
  Calendar,
  Search,
  Filter,
  ChevronRight,
  Mountain,
  Waves,
  TreePine,
  Camera,
  Utensils,
  Car,
  Phone,
} from "lucide-react";

export default function Tours() {
  const tours = [
    {
      id: 1,
      title: "Cultural Triangle Explorer",
      location: "Anuradhapura, Polonnaruwa, Sigiriya",
      image: "/images/hero-5.png",
      price: "$2,499",
      originalPrice: "$2,899",
      duration: "7 Days / 6 Nights",
      groupSize: "2-12 People",
      rating: 4.9,
      reviews: 324,
      category: "Cultural",
      difficulty: "Easy",
      highlights: [
        "Ancient ruins of Anuradhapura",
        "Sigiriya Rock Fortress climb",
        "Traditional village experience",
        "Local cooking class",
      ],
      includes: ["Accommodation", "Meals", "Transport", "Guide"],
      departureDate: "Every Monday",
      featured: true,
    },
    {
      id: 2,
      title: "Hill Country Tea Trail",
      location: "Nuwara Eliya, Ella, Kandy",
      image: "/images/hero-1.png",
      price: "$1,899",
      originalPrice: "$2,199",
      duration: "5 Days / 4 Nights",
      groupSize: "4-16 People",
      rating: 4.8,
      reviews: 267,
      category: "Nature",
      difficulty: "Moderate",
      highlights: [
        "Tea plantation tours",
        "Scenic train journey",
        "Nine Arch Bridge",
        "Little Adam's Peak hike",
      ],
      includes: ["Accommodation", "Breakfast", "Transport", "Activities"],
      departureDate: "Daily",
      featured: true,
    },
    {
      id: 3,
      title: "Wildlife Safari Adventure",
      location: "Yala, Udawalawe, Wilpattu",
      image: "/images/hero-3.png",
      price: "$1,599",
      originalPrice: "$1,799",
      duration: "4 Days / 3 Nights",
      groupSize: "6-20 People",
      rating: 4.7,
      reviews: 189,
      category: "Wildlife",
      difficulty: "Easy",
      highlights: [
        "Leopard spotting in Yala",
        "Elephant orphanage visit",
        "Bird watching tours",
        "Night safari experience",
      ],
      includes: ["Safari Jeep", "Park Fees", "Accommodation", "Meals"],
      departureDate: "Wed, Sat",
      featured: false,
    },
    {
      id: 4,
      title: "Southern Coast Beach Hopping",
      location: "Galle, Mirissa, Weligama",
      image: "/images/tropical-beach.png",
      price: "$1,299",
      originalPrice: "$1,499",
      duration: "4 Days / 3 Nights",
      groupSize: "2-15 People",
      rating: 4.6,
      reviews: 156,
      category: "Beach",
      difficulty: "Easy",
      highlights: [
        "Whale watching tour",
        "Galle Fort exploration",
        "Surfing lessons",
        "Beach relaxation",
      ],
      includes: ["Beach Resort", "Boat Tour", "Surfboard", "Breakfast"],
      departureDate: "Tue, Fri, Sun",
      featured: false,
    },
    {
      id: 5,
      title: "Adventure Seeker's Paradise",
      location: "Ella, Kitulgala, Adam's Peak",
      image: "/images/hero-4.png",
      price: "$2,199",
      originalPrice: "$2,599",
      duration: "6 Days / 5 Nights",
      groupSize: "4-12 People",
      rating: 4.8,
      reviews: 201,
      category: "Adventure",
      difficulty: "Challenging",
      highlights: [
        "Adam's Peak pilgrimage hike",
        "White water rafting",
        "Zip-lining adventure",
        "Rock climbing sessions",
      ],
      includes: [
        "Adventure Gear",
        "Safety Equipment",
        "Expert Guides",
        "Meals",
      ],
      departureDate: "Every Friday",
      featured: false,
    },
    {
      id: 6,
      title: "Culinary Journey",
      location: "Colombo, Kandy, Galle",
      image: "/images/cultural-show.png",
      price: "$1,799",
      originalPrice: "$2,099",
      duration: "5 Days / 4 Nights",
      groupSize: "6-14 People",
      rating: 4.9,
      reviews: 143,
      category: "Culinary",
      difficulty: "Easy",
      highlights: [
        "Traditional cooking classes",
        "Spice garden visits",
        "Street food tours",
        "High tea experiences",
      ],
      includes: [
        "Cooking Classes",
        "Food Tastings",
        "Recipe Book",
        "Markets Tour",
      ],
      departureDate: "Thu, Sun",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Cultural",
    "Nature",
    "Wildlife",
    "Beach",
    "Adventure",
    "Culinary",
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Cultural":
        return <Camera className="h-4 w-4" />;
      case "Nature":
        return <TreePine className="h-4 w-4" />;
      case "Wildlife":
        return <Mountain className="h-4 w-4" />;
      case "Beach":
        return <Waves className="h-4 w-4" />;
      case "Adventure":
        return <Mountain className="h-4 w-4" />;
      case "Culinary":
        return <Utensils className="h-4 w-4" />;
      default:
        return <MapPin className="h-4 w-4" />;
    }
  };

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
            <Link href="/tours" className="text-sm font-medium text-primary">
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
        <section className="relative h-96 bg-gradient-to-r from-green-600 to-blue-600 flex items-center">
          <div className="absolute inset-0 bg-[url('/images/hero-4.png')] opacity-20 bg-cover bg-center" />
          <div className="container relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold tracking-tight mb-4">
                Curated Tour Packages
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Join our expertly crafted tours for an immersive travel
                experience with like-minded adventurers
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-lg p-4 flex gap-4 max-w-2xl">
                <div className="flex-1">
                  <Input
                    placeholder="Search tours by destination or activity..."
                    className="border-0 focus:ring-0"
                  />
                </div>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search Tours
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="container py-8">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            <div className="flex flex-wrap gap-2">
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    {category !== "All" && getCategoryIcon(category)}
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <select className="px-3 py-2 border rounded-md text-sm">
                <option>All Durations</option>
                <option>1-3 Days</option>
                <option>4-6 Days</option>
                <option>7+ Days</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Tours */}
        <section className="container pb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Featured Tours
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {tours
              .filter((tour) => tour.featured)
              .map((tour) => (
                <Card key={tour.id} className="overflow-hidden group">
                  <div className="relative h-80">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">
                        {tour.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-red-500 text-white"
                      >
                        Save $
                        {parseInt(tour.originalPrice.slice(1)) -
                          parseInt(tour.price.slice(1))}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-white/90 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{tour.location}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {tour.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-white/90">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            <span className="text-sm">{tour.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">{tour.groupSize}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white/90 text-sm line-through">
                            {tour.originalPrice}
                          </p>
                          <p className="text-2xl font-bold text-white">
                            {tour.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* All Tours */}
        <section className="container pb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">All Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <Card
                key={tour.id}
                className="overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white flex items-center gap-1">
                      {getCategoryIcon(tour.category)}
                      {tour.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        tour.difficulty === "Easy"
                          ? "secondary"
                          : tour.difficulty === "Moderate"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {tour.difficulty}
                    </Badge>
                  </div>
                  {tour.originalPrice !== tour.price && (
                    <div className="absolute bottom-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-red-500 text-white"
                      >
                        Save $
                        {parseInt(tour.originalPrice.slice(1)) -
                          parseInt(tour.price.slice(1))}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tour.title}</h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{tour.groupSize}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="text-sm font-medium">
                          {tour.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          ({tour.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{tour.departureDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Highlights:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tour.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {highlight}
                        </li>
                      ))}
                      {tour.highlights.length > 2 && (
                        <li className="text-primary text-xs">
                          +{tour.highlights.length - 2} more
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {tour.originalPrice !== tour.price && (
                        <p className="text-sm text-muted-foreground line-through">
                          {tour.originalPrice}
                        </p>
                      )}
                      <p className="text-xl font-bold text-primary">
                        {tour.price}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        per person
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

        {/* Tour Types Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Choose Your Adventure Style
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer different types of tours to match your travel
                preferences and experience level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Camera className="h-8 w-8 text-blue-600" />,
                  title: "Cultural Tours",
                  description:
                    "Explore ancient sites, temples, and immerse in local traditions",
                  count: "12 Tours Available",
                },
                {
                  icon: <TreePine className="h-8 w-8 text-green-600" />,
                  title: "Nature & Wildlife",
                  description:
                    "Experience Sri Lanka's diverse ecosystems and wildlife",
                  count: "8 Tours Available",
                },
                {
                  icon: <Mountain className="h-8 w-8 text-orange-600" />,
                  title: "Adventure Tours",
                  description: "Thrilling activities for adrenaline seekers",
                  count: "6 Tours Available",
                },
                {
                  icon: <Waves className="h-8 w-8 text-cyan-600" />,
                  title: "Beach & Coastal",
                  description:
                    "Relax on pristine beaches and enjoy water activities",
                  count: "10 Tours Available",
                },
              ].map((type, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                      {type.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {type.count}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Tours */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Why Choose Our Tours?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We create unforgettable experiences with attention to every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Expert Local Guides",
                description:
                  "Our certified guides share deep knowledge and hidden stories of each destination",
              },
              {
                icon: <Car className="h-6 w-6 text-primary" />,
                title: "Comfortable Transportation",
                description:
                  "Modern, air-conditioned vehicles with experienced drivers for safe travels",
              },
              {
                icon: <Calendar className="h-6 w-6 text-primary" />,
                title: "Flexible Scheduling",
                description:
                  "Multiple departure dates and customizable itineraries to fit your schedule",
              },
              {
                icon: <Star className="h-6 w-6 text-primary" />,
                title: "Premium Accommodations",
                description:
                  "Carefully selected hotels and resorts that meet our quality standards",
              },
              {
                icon: <Utensils className="h-6 w-6 text-primary" />,
                title: "Authentic Cuisine",
                description:
                  "Experience local flavors with included meals at authentic restaurants",
              },
              {
                icon: <Camera className="h-6 w-6 text-primary" />,
                title: "Photo Opportunities",
                description:
                  "Planned stops at the most photogenic locations for lasting memories",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Join an Amazing Tour?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Book your spot today and embark on an unforgettable journey with
                fellow travelers
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Calendar className="h-4 w-4 mr-2" />
                  Browse All Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Custom Tour Request
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
