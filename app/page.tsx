import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  // Check if products.data is not empty and has images
  const firstProduct = products.data[0];
  if (firstProduct && firstProduct.images && firstProduct.images.length > 0) {
    return (
      <div>
        <section className="rounded bg-neutral-100 py-8 sm:py-12">
          <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
            <div className="max-w-md space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/favicon.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Welcome to My Ecommerce
                </h2>
              </div>
              <p className="text-neutral-600">
                Discover the latest products at the best prices.
              </p>
              <Button
                asChild
                variant="default"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
              >
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3"
                >
                  Browse All Products
                </Link>
              </Button>
            </div>
            <Image
              alt="Hero Image"
              src={firstProduct.images[0]}
              className="rounded"
              width={450}
              height={450}
            />
          </div>
        </section>
        <section className="py-8">
          <Carousel products={products.data} />
        </section>
      </div>
    );
  } else {
    return <div>No products available.</div>;
  }
}
