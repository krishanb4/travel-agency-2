import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle,
  Users,
  Headphones,
  Navigation,
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-green-600" />,
      title: "Call Us",
      description: "Speak directly with our travel experts",
      details: ["+94 (0) 11 276 7184", "+94 (0) 11 276 5040"],
      action: "Call Now",
      available: "24/7 Support Available",
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Email Us",
      description: "Send us your travel requirements",
      details: ["info@btotravel.lk", "bookings@btotravel.lk"],
      action: "Send Email",
      available: "Response within 2 hours",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-purple-600" />,
      title: "Live Chat",
      description: "Get instant support through chat",
      details: ["Available on website", "Mobile app support"],
      action: "Start Chat",
      available: "Online 9 AM - 9 PM",
    },
    {
      icon: <Calendar className="h-8 w-8 text-orange-600" />,
      title: "Book Consultation",
      description: "Schedule a personalized travel consultation",
      details: ["30-minute free consultation", "Video or phone call"],
      action: "Schedule Now",
      available: "Flexible timings",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 2:00 PM" },
    { day: "Holidays", hours: "Emergency support only" },
  ];

  const faqs = [
    {
      question: "How far in advance should I book my trip?",
      answer:
        "We recommend booking at least 2-3 months in advance for international trips and 2-4 weeks for domestic travel to get the best rates and availability.",
    },
    {
      question: "Do you provide travel insurance?",
      answer:
        "Yes, we offer comprehensive travel insurance options to protect your trip investment and provide peace of mind during your travels.",
    },
    {
      question: "Can you help with visa applications?",
      answer:
        "Absolutely! We provide complete visa assistance including documentation, application submission, and status tracking for most destinations.",
    },
    {
      question: "What if I need to cancel or modify my booking?",
      answer:
        "We offer flexible cancellation and modification policies. Terms depend on the specific booking, but we always work to minimize any penalties.",
    },
    {
      question: "Do you offer group discounts?",
      answer:
        "Yes, we provide attractive group discounts for bookings of 6 or more people. Contact us for customized group pricing.",
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
            <Link
              href="/about-us"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary">
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
          <div className="absolute inset-0 bg-[url('/images/cultural-show.png')] opacity-20 bg-cover bg-center" />
          <div className="container relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold tracking-tight mb-4">
                Get In Touch
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Ready to plan your next adventure? Our travel experts are here
                to help you create the perfect journey.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book a consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              How Can We Help You?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to reach us. We're here to assist you with all
              your travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {method.description}
                </p>
                <div className="space-y-1 mb-4">
                  {method.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <Badge variant="secondary" className="mb-4">
                  {method.available}
                </Badge>
                <Button className="w-full" size="sm">
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours with a personalized response.
                </p>

                <Card className="bg-white">
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            First Name
                          </label>
                          <Input placeholder="Enter your first name" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Last Name
                          </label>
                          <Input placeholder="Enter your last name" />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email Address
                        </label>
                        <Input type="email" placeholder="Enter your email" />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Travel Type
                        </label>
                        <select className="w-full px-3 py-2 border rounded-md">
                          <option>Select travel type</option>
                          <option>Leisure Travel</option>
                          <option>Business Travel</option>
                          <option>Group Travel</option>
                          <option>Honeymoon</option>
                          <option>Adventure Travel</option>
                          <option>Family Vacation</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Destination of Interest
                        </label>
                        <Input placeholder="Where would you like to go?" />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell us about your travel plans, preferences, budget, and any special requirements..."
                          rows={6}
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="newsletter"
                          className="rounded"
                        />
                        <label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for travel tips and
                          exclusive offers
                        </label>
                      </div>

                      <Button className="w-full" size="lg">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & Office Hours */}
              <div className="space-y-8">
                {/* Office Location */}
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        Visit Our Office
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-muted-foreground">
                        11A Prathibimbarama Road,
                        <br />
                        Kalubowila Dehiwala,
                        <br />
                        Mount Lavinia, Sri Lanka
                      </p>
                      <Button variant="outline" className="w-full">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Office Hours</h3>
                    </div>
                    <div className="space-y-3">
                      {officeHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {schedule.day}
                          </span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Headphones className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">
                          24/7 Emergency Support Available
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Follow Us</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Stay connected for travel inspiration and updates
                    </p>
                    <div className="flex gap-3">
                      <Button size="icon" variant="outline">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Instagram className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and booking
              process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-3 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground ml-7">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for?
            </p>
            <Button variant="outline">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="bg-red-50 py-12">
          <div className="container">
            <Card className="border-red-200 bg-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    24/7 Emergency Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    If you're traveling and need immediate assistance, our
                    emergency support team is available around the clock.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="destructive" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency: +94 77 123 4567
                    </Button>
                    <Button variant="outline" size="lg">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
