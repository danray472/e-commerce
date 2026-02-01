import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { Truck, ShieldCheck, Star } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  // Check if products.data is not empty and has images
  const firstProduct = products.data[0];
  if (firstProduct && firstProduct.images && firstProduct.images.length > 0) {
    return (
      <div className="space-y-24 pb-20">
        {/* Hero Section (Existing) */}
        <ScrollReveal animation="fade-up" duration={1000}>
          <section className="glass rounded-3xl overflow-hidden py-12 sm:py-20 relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative mx-auto grid grid-cols-1 items-center justify-items-center gap-12 px-8 sm:px-16 md:grid-cols-2">
              <ScrollReveal animation="fade-right" delay={300}>
                <div className="max-w-md space-y-8 text-center md:text-left">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span>New Arrivals Now Live</span>
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-gray-900 leading-tight">
                      Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Style</span>
                    </h1>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      Discover curated collections that blend premium quality with modern aesthetics. Your journey to better living starts here.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      asChild
                      className="rounded-full px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
                    >
                      <Link href="/products">
                        Shop Now
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full px-8 py-6 border-gray-200 hover:bg-gray-50 transition-all font-medium"
                    >
                      <Link href="/products">
                        View Collections
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="zoom-in" delay={500}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-2xl transition-all group-hover:bg-blue-600/20"></div>
                  <Image
                    alt="Featured Product"
                    src={firstProduct.images[0]}
                    className="relative rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] object-cover"
                    width={500}
                    height={600}
                    priority
                  />
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Swift Delivery",
              desc: "Free express shipping on all orders over $150. Tracked and insured.",
              icon: <Truck className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Secure Payments",
              desc: "100% encrypted checkout. We support all major cards and digital wallets.",
              icon: <ShieldCheck className="w-8 h-8 text-purple-600" />
            },
            {
              title: "Premium Quality",
              desc: "Curated selection of high-end products with lifetime warranty support.",
              icon: <Star className="w-8 h-8 text-amber-600" />
            },
          ].map((feature, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 200}>
              <div className="glass group p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:bg-white/90">
                <div className="bg-white p-4 rounded-2xl w-fit shadow-sm mb-6 transition-transform group-hover:rotate-12">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </section>

        {/* Featured Products/Carousel (Existing) */}
        <ScrollReveal animation="fade-up">
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 border-l-4 border-blue-600 pl-4">Spotlight Deals</h2>
              <Link href="/products" className="group flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Explore Store <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
            <Carousel products={products.data} />
          </section>
        </ScrollReveal>

        {/* Categories Section */}
        <section className="space-y-8">
          <ScrollReveal animation="fade-right">
            <h2 className="text-3xl font-bold tracking-tight text-center md:text-left">Shop by Category</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Electronics", items: "120+ Products", color: "from-blue-500 to-cyan-500" },
              { name: "Fashion", items: "340+ Products", color: "from-purple-500 to-pink-500" },
              { name: "Home Decor", items: "85+ Products", color: "from-amber-500 to-orange-500" },
              { name: "Accessories", items: "210+ Products", color: "from-emerald-500 to-teal-500" },
            ].map((cat, i) => (
              <ScrollReveal key={i} animation="zoom-in" delay={i * 100}>
                <div className="group relative h-48 rounded-3xl overflow-hidden cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-80 transition-transform duration-500 group-hover:scale-110`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
                    <h3 className="text-2xl font-bold mb-1 tracking-tight">{cat.name}</h3>
                    <span className="text-white/80 text-sm font-medium">{cat.items}</span>
                    <div className="mt-4 glass-dark px-4 py-1.5 rounded-full text-xs font-bold transition-all opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                      View All
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Brand Story / Mission */}
        <ScrollReveal animation="scale-up">
          <section className="glass rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 transform translate-x-1/2" />
            <div className="w-full md:w-1/2 space-y-6 relative">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Crafted for the Modern <span className="text-blue-600">Individual.</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that the products you use every day should be both functional and beautiful. Our mission is to bridge the gap between high-end design and everyday utility.
              </p>
              <div className="flex items-center space-x-12 pt-4">
                <div>
                  <span className="block text-3xl font-black text-gray-900">15k+</span>
                  <span className="text-gray-500 text-sm uppercase font-bold">Orders</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-gray-900">99%</span>
                  <span className="text-gray-500 text-sm uppercase font-bold">Happy</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-gray-900">24h</span>
                  <span className="text-gray-500 text-sm uppercase font-bold">Support</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 relative">
              <ScrollReveal animation="zoom-in" delay={200} className="aspect-square bg-blue-100 rounded-3xl">
                <div className="w-full h-full" />
              </ScrollReveal>
              <ScrollReveal animation="zoom-in" delay={400} className="aspect-square bg-purple-100 rounded-3xl mt-8">
                <div className="w-full h-full" />
              </ScrollReveal>
              <ScrollReveal animation="zoom-in" delay={300} className="aspect-square bg-amber-100 rounded-3xl -mt-8">
                <div className="w-full h-full" />
              </ScrollReveal>
              <ScrollReveal animation="zoom-in" delay={500} className="aspect-square bg-emerald-100 rounded-3xl">
                <div className="w-full h-full" />
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>

        {/* Newsletter Section */}
        <ScrollReveal animation="fade-up">
          <section className="relative overflow-hidden rounded-[3rem] bg-gray-900 py-16 px-8 md:px-16 text-center text-white">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative max-w-2xl mx-auto space-y-8">
              <div className="space-y-4">
                <ScrollReveal animation="fade-down" delay={200}>
                  <h2 className="text-4xl font-bold tracking-tight">Stay ahead of the curve</h2>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={400}>
                  <p className="text-gray-400 text-lg">Subscribe to our newsletter and get 15% off your first order plus early access to new drops.</p>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="zoom-in" delay={600}>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-500"
                  />
                  <Button className="rounded-2xl bg-white text-black hover:bg-gray-200 px-10 py-4 font-bold transition-transform active:scale-95">
                    Join Now
                  </Button>
                </form>
              </ScrollReveal>
              <p className="text-xs text-gray-500">No spam, just premium content. Unsubscribe anytime.</p>
            </div>
          </section>
        </ScrollReveal>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="glass p-8 rounded-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">No Products Available</h2>
          <p className="text-gray-500">We're updating our collection. Please check back soon.</p>
          <Button asChild className="mt-6 rounded-full px-8 py-6 bg-blue-600 hover:bg-blue-700">
            <Link href="/products">Browse All Collection</Link>
          </Button>
        </div>
      </div>
    );
  }
}
