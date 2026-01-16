"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-text-secondary text-sm">
                    © {new Date().getFullYear()} JayKay Design. All rights reserved.
                </div>

                <div className="flex items-center gap-8">
                    <Link href="#" className="text-text-secondary hover:text-white transition-colors text-sm font-medium">Twitter</Link>
                    <Link href="#" className="text-text-secondary hover:text-white transition-colors text-sm font-medium">LinkedIn</Link>
                    <Link href="#" className="text-text-secondary hover:text-white transition-colors text-sm font-medium">Instagram</Link>
                </div>
            </div>
        </footer>
    );
}
