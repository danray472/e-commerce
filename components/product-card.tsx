import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`} className="block h-full transition-transform duration-300 hover:-translate-y-2">
      <Card className="glass group overflow-hidden h-full flex flex-col border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl">
        {product.images && product.images[0] && (
          <div className="relative h-64 w-full overflow-hidden bg-gray-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-700 group-hover:scale-110"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

            {/* Price Tag */}
            {price && price.unit_amount && (
              <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full shadow-lg">
                <span className="text-sm font-bold text-gray-900">
                  ${(price.unit_amount / 100).toFixed(2)}
                </span>
              </div>
            )}
          </div>
        )}
        <CardHeader className="p-6 pb-2">
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between space-y-4">
          {product.description && (
            <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
          <Button className="w-full rounded-2xl bg-gray-900 hover:bg-blue-600 text-white transition-all duration-300 py-6">
            Explore Details
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};
