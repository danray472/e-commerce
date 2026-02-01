import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="glass border-t border-white/20 mt-20">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            My<span className="text-blue-600">Store</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Redefining the modern shopping experience with curated collections and premium design.
                        </p>
                        <div className="flex items-center space-x-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="p-2 glass rounded-full hover:text-blue-600 transition-all hover:scale-110"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                            <li><Link href="/products" className="hover:text-blue-600 transition-colors">All Products</Link></li>
                            <li><Link href="/checkout" className="hover:text-blue-600 transition-colors">Checkout</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Order Tracking</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-6">Customer Support</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Shipping Info</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Returns & Exchanges</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-gray-900 font-bold mb-6">Contact Us</h4>
                        <div className="flex items-start space-x-3 text-sm text-gray-500">
                            <MapPin size={18} className="text-blue-600 shrink-0" />
                            <span>Westlands, Nairobi, Kenya</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <Phone size={18} className="text-blue-600 shrink-0" />
                            <span>+254 705 756 500</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <Mail size={18} className="text-blue-600 shrink-0" />
                            <span>hello@mystore.com</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} MyStore. All rights reserved. Created with passion for design.
                    </p>
                    <div className="flex items-center space-x-6 text-xs text-gray-400">
                        <a href="#" className="hover:text-gray-600">Terms of Service</a>
                        <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-600">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
