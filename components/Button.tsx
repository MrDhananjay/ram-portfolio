"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
        const variants = {
            primary: "bg-white text-black hover:bg-gray-200",
            secondary: "bg-secondary text-white hover:bg-zinc-800",
            outline: "border border-white/20 text-white hover:bg-white/10",
            ghost: "text-white hover:text-accent bg-transparent",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-12 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
                {icon && <span className="ml-2">{icon}</span>}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
