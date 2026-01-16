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
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20, // slightly fade up effect as well
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
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
            {text.split("").map((char, index) => (
                <motion.span variants={child} key={index}>
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}
