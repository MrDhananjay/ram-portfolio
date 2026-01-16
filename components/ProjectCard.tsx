"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    category: string;
    year: string;
    description: string;
    stats: string;
    color: string;
    index: number;
}

export function ProjectCard({ title, category, year, description, stats, color, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group relative w-full"
        >
            <div className={cn(
                "rounded-2xl p-8 md:p-12 transition-all duration-500 hover:scale-[1.01]",
                "bg-secondary border border-white/5 hover:border-white/10 overflow-hidden"
            )}>
                {/* Hover Gradient Background */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
                />

                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 text-sm font-mono text-text-secondary uppercase tracking-widest mb-6">
                            <span>{year}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <span>{category}</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                            {title}
                        </h3>

                        <p className="text-text-muted text-lg max-w-lg mb-8">
                            {description}
                        </p>

                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-display font-medium text-accent">
                                {stats}
                            </span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 aspect-[4/3] rounded-lg overflow-hidden relative bg-black/50">
                        {/* Abstract Placeholder for Project Image */}
                        <div
                            className="absolute inset-0 opacity-80"
                            style={{
                                background: `linear-gradient(135deg, ${color}20 0%, transparent 100%)`
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-white/5 backdrop-blur-sm">
                                <ArrowUpRight className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
