"use client";

import React from 'react';
import { motion } from "framer-motion";

export const InteractiveJiggleText = ({ text, className = "" }: { text: string, className?: string }) => {
    return (
        <span className={`inline-flex flex-wrap justify-center gap-x-[0.05em] ${className}`}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block cursor-default"
                    whileHover={{
                        y: -5,
                        rotate: ((index % 5) - 2) * 3, // Deterministic rotation based on index
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
};
