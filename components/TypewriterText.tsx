"use client";

import { motion } from "framer-motion";

interface TypewriterTextProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

export function TypewriterText({ text, className = "", style }: TypewriterTextProps) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            transition: {
                duration: 0,
            },
        },
        hidden: {
            opacity: 0,
        },
    };

    return (
        <motion.div
            className={`inline-block ${className}`}
            style={style}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // animate only once when it comes into view
        >
            {words.map((word, index) => (
                <span key={index} className="inline-block whitespace-nowrap mr-[0.25em]">
                    {word.split("").map((char, charIndex) => (
                        <motion.span variants={child} key={charIndex} className="inline-block">
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.div>
    );
}
