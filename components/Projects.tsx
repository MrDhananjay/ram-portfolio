"use client";

import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import { ViewProjectButton } from "./ViewProjectButton";
import { CustomProjectCard } from "./CustomProjectCard";
import { InteractiveJiggleText } from "@/components/InteractiveJiggleText";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    weight: "400",
    subsets: ["latin"]
});

const customProjects = [
    {
        number: "01",
        title: "Burger King",
        description: "I chose the Burger King app for heuristic evaluation because it's a globally recognized brand with a large user base — making it essential for the app to deliver a seamless and intuitive experience.",
        defaultImage: "/1.png",
        hoverImage: "/2.png"
    },
    {
        number: "02",
        title: "Burger King",
        description: "I chose the Burger King app for heuristic evaluation because it's a globally recognized brand with a large user base — making it essential for the app to deliver a seamless and intuitive experience.",
        defaultImage: "/1.png",
        hoverImage: "/2.png"
    },
    {
        number: "03",
        title: "Burger King",
        description: "I chose the Burger King app for heuristic evaluation because it's a globally recognized brand with a large user base — making it essential for the app to deliver a seamless and intuitive experience.",
        defaultImage: "/1.png",
        hoverImage: "/2.png"
    },
    {
        number: "04",
        title: "Burger King",
        description: "I chose the Burger King app for heuristic evaluation because it's a globally recognized brand with a large user base — making it essential for the app to deliver a seamless and intuitive experience.",
        defaultImage: "/1.png",
        hoverImage: "/2.png"
    }
];

export function Projects() {
    return (
        <section id="work" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
                <h2 className="text-[15vw] md:text-9xl font-display font-bold leading-none select-none text-center" style={{ marginBottom: '92px' }}>
                    <InteractiveJiggleText
                        text="Craft"
                        className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] [mask-image:linear-gradient(to_bottom,black,rgba(0,0,0,0.3))]"
                    />
                </h2>

                <div className="flex flex-col gap-24 items-center mb-24">
                    {customProjects.map((project) => (
                        <CustomProjectCard
                            key={project.number}
                            {...project}
                        />
                    ))}
                </div>

                <h2 className="text-[15vw] md:text-9xl font-display font-bold leading-none select-none text-center">
                    <InteractiveJiggleText
                        text="About Me"
                        className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] [mask-image:linear-gradient(to_bottom,black,rgba(0,0,0,0.3))]"
                    />
                </h2>
            </div>
        </section>
    );
}

