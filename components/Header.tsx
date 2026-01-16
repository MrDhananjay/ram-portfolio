"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Projects", href: "#work" },
    { name: "About", href: "https://www.jaykay.design/About", external: true },
    { name: "Contact", href: "#contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-50 group">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white group-hover:text-accent transition-colors"
                    >
                        {/* Abstract JK Logo replication */}
                        <path
                            d="M10 10H15V25C15 28 13 30 10 30"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        <path
                            d="M25 10L20 20L28 30"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        {/* Pen tip hint */}
                        <circle cx="32" cy="8" r="2" fill="currentColor" />
                    </svg>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/resume.pdf"
                        className="text-sm font-medium text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
                    >
                        Get CV <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden relative z-50 text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: "-100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "-100%" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center"
                        >
                            <nav className="flex flex-col items-center gap-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-display font-bold text-white hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/resume.pdf"
                                    className="text-3xl font-display font-bold text-accent mt-4 flex items-center gap-2"
                                >
                                    Get CV <ArrowUpRight className="w-6 h-6" />
                                </Link>
                            </nav>

                            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 text-text-secondary">
                                <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                                <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
