"use client";

import { motion } from "framer-motion";
import React from 'react';
import { ContactMeSvg } from "@/components/ContactMeSvg";
import { InteractiveJiggleText } from "@/components/InteractiveJiggleText";

export function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    return (
        <section className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
            {/* Animated Background Lights */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full blur-[100px] -top-[10%] -left-[10%] pointer-events-none"
                style={{ background: 'rgba(152, 16, 250, 0.2)' }} // #9810FA @ 20%
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -100, 50, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full blur-[120px] -bottom-[10%] -right-[10%] pointer-events-none"
                style={{ background: 'rgba(21, 93, 252, 0.2)' }} // #155DFC @ 20%
                animate={{
                    x: [0, -120, 60, 0],
                    y: [0, 80, -40, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-6xl flex flex-col items-center gap-[18px]"
                >
                    <motion.h1
                        variants={item}
                        className="text-[13vw] md:text-[128px] font-sans font-bold leading-[1.1] tracking-tight text-center mx-auto text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        <InteractiveJiggleText text="UIUX &" /> <br />
                        <InteractiveJiggleText
                            text="PRODUCT DESIGNER"
                            className="md:text-[100px]"
                        />
                    </motion.h1>

                    <motion.div variants={item} className="flex flex-col items-center gap-[70px]">
                        <p className="text-[#99A1AF] text-[24px] font-normal max-w-4xl leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                            Hi I’m Ram, Crafting digital experiences that blend aesthetics with functionality. Specializing in user-centric product design for tech startups.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="focus:outline-none"
                        >
                            <ContactMeSvg />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
