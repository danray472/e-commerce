"use client";

import Link from "next/link";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full glass transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-transform hover:scale-105"
        >
          My<span className="text-blue-600">Store</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="nav-link font-medium">Home</Link>
          <Link href="/products" className="nav-link font-medium">
            Products
          </Link>
          <Link href="/checkout" className="nav-link font-medium">
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          <Link href="/checkout" className="group relative p-2 transition-colors hover:bg-black/5 rounded-full">
            <ShoppingCartIcon className="h-6 w-6 transition-transform group-hover:scale-110" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-lg">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-black/5 rounded-full"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-64 border-t border-white/20" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col p-6 space-y-4 bg-white/80 backdrop-blur-lg">
          <li>
            <Link href="/" className="block text-lg font-medium hover:text-blue-600" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="block text-lg font-medium hover:text-blue-600" onClick={() => setMobileOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/checkout" className="block text-lg font-medium hover:text-blue-600" onClick={() => setMobileOpen(false)}>
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
