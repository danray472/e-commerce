"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="relative overflow-hidden rounded-3xl border-none shadow-2xl h-[400px] group">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-full w-full bg-gray-900">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover transition-all duration-700 group-hover:scale-105"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      )}
      <CardContent className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col items-start">
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <CardTitle className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {currentProduct.name}
          </CardTitle>
          <div className="flex items-center space-x-4">
            {price && price.unit_amount && (
              <span className="text-xl md:text-2xl font-medium text-blue-400">
                ${(price.unit_amount / 100).toFixed(2)}
              </span>
            )}
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </CardContent>
      {/* Indicator dots */}
      <div className="absolute bottom-6 right-8 flex space-x-2">
        {products.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? "w-8 bg-blue-500" : "w-2 bg-white/30"}`}
          />
        ))}
      </div>
    </Card>
  );
};
