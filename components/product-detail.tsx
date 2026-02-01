"use client";

import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="mx-auto flex flex-col md:flex-row gap-12 items-start py-8">
      {product.images && product.images[0] && (
        <div className="relative h-[500px] w-full md:w-1/2 glass rounded-3xl overflow-hidden shadow-2xl group bg-gray-50">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          />
        </div>
      )}
      <div className="md:w-1/2 space-y-8 glass p-8 md:p-12 rounded-3xl shadow-xl">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            {product.name}
          </h1>
          {price && price.unit_amount && (
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold border border-blue-100">
              ${(price.unit_amount / 100).toFixed(2)}
            </div>
          )}
        </div>

        {product.description && (
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Description</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>
        )}

        <div className="pt-8 border-t border-gray-100 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Quantity</span>
            <div className="flex items-center space-x-6 glass px-2 py-1 rounded-2xl">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-red-50 hover:text-red-500 rounded-xl transition-colors"
                onClick={() => removeItem(product.id)}
              >
                –
              </Button>
              <span className="text-xl font-bold w-8 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-green-50 hover:text-green-500 rounded-xl transition-colors"
                onClick={onAddItem}
              >
                +
              </Button>
            </div>
          </div>

          <Button
            className="w-full py-8 rounded-2xl bg-black hover:bg-blue-600 text-white font-bold text-lg shadow-xl shadow-gray-200 transition-all active:scale-[0.98]"
            onClick={onAddItem}
          >
            Add to Shopping Bag
          </Button>
        </div>
      </div>
    </div>
  );
};
