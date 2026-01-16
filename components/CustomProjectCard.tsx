"use client";

import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import { ViewProjectButton } from "./ViewProjectButton";
import { TypewriterText } from "./TypewriterText";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    weight: "400",
    subsets: ["latin"]
});

interface CustomProjectCardProps {
    number: string;
    title: string;
    description: string;
    defaultImage: string;
    hoverImage: string;
}

export function CustomProjectCard({ number, title, description, defaultImage, hoverImage }: CustomProjectCardProps) {
    return (
        <div
            className="flex items-center justify-between border border-white/10 group cursor-pointer relative"
            style={{ width: '994px', height: '582px', backgroundColor: '#1c1c1c', padding: '30px', borderRadius: '24px' }}
        >
            {/* Hover Glow & Stroke Effect */}
            <div
                className="absolute inset-0 rounded-[24px] pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{
                    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.5)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
                }}
            />
            <div className="w-full flex items-stretch gap-[40px]">
                {/* Text Content */}
                <div className="flex flex-col items-start justify-start flex-1">
                    <span className={`${poppins.className} mb-6`} style={{ fontSize: '24px', color: '#FFFFFF' }}>{number}</span>

                    <h3 className={`${inter.className} font-bold mb-6`} style={{ fontSize: '48px', color: '#FFFFFF', lineHeight: '1.1' }}>
                        {title}
                    </h3>

                    <TypewriterText
                        text={description}
                        className={`${inter.className}`}
                        style={{ fontSize: '18px', color: '#99A1AF', lineHeight: '1.5' }}
                    />

                    <div className="mt-auto">
                        <ViewProjectButton />
                    </div>
                </div>

                <div
                    className="relative overflow-hidden"
                    style={{ width: '522px', height: '522px', borderRadius: '4px' }}
                >
                    <Image
                        src={defaultImage}
                        alt={`${title} Default`}
                        width={522}
                        height={522}
                        className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
                        style={{ width: '522px', height: '522px' }}
                    />
                    <Image
                        src={hoverImage}
                        alt={`${title} Hover`}
                        width={522}
                        height={522}
                        className="absolute inset-0 object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                        style={{ width: '522px', height: '522px' }}
                    />
                </div>
            </div>
        </div>
    );
}
