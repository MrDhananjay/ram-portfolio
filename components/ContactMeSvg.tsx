import React from 'react';

export const ContactMeSvg = () => {
    return (
        <div className="relative w-[268px] h-[79px] rounded-full overflow-hidden p-[2px] group">
            {/* Spinning Gradient Border - Glow Layer */}
            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_10%,transparent_20%)] blur-lg opacity-80" />

            {/* Spinning Gradient Border - Sharp Layer */}
            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_10%,transparent_20%)]" />

            {/* Inner Content - Glassmorphism */}
            <div className="relative h-full w-full rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-black/30 transition-all duration-300">
                <span
                    className="text-white font-bold text-[24px] uppercase tracking-wider relative z-10"
                    style={{ fontFamily: 'var(--font-inter), sans-serif', textShadow: "0 0 10px rgba(255,255,255,0.3)" }}
                >
                    Contact Me
                </span>

                {/* Inner shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-50" />
            </div>
        </div>
    );
};
