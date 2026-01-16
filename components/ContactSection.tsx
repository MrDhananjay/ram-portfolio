"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                            GOT AN IDEA? <br />
                            <span className="text-text-secondary">SHARE IT WITH ME.</span>
                        </h2>
                        <p className="text-xl text-text-muted max-w-md mb-8">
                            I'm always looking for new challenges and interesting projects.
                            Let's collaborate to bring your vision to life.
                        </p>

                        <div className="flex flex-col gap-4 text-text-secondary">
                            <a href="mailto:hello@jaykay.design" className="hover:text-white transition-colors text-lg">hello@jaykay.design</a>
                            <a href="tel:+1234567890" className="hover:text-white transition-colors text-lg">+1 (234) 567 890</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-secondary p-8 md:p-10 rounded-3xl border border-white/5"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className={cn(
                                        "w-full bg-black/50 border border-white/10 rounded-lg h-14 px-4 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors",
                                        errors.name && "border-red-500"
                                    )}
                                    placeholder="John Doe"
                                />
                                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className={cn(
                                        "w-full bg-black/50 border border-white/10 rounded-lg h-14 px-4 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors",
                                        errors.email && "border-red-500"
                                    )}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    className={cn(
                                        "w-full bg-black/50 border border-white/10 rounded-lg h-32 p-4 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors resize-none",
                                        errors.message && "border-red-500"
                                    )}
                                    placeholder="Tell me about your project..."
                                />
                                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                size="lg"
                                disabled={isSubmitting}
                                icon={isSubmitting ? <Loader2 className="animate-spin" /> : <ArrowUpRight />}
                            >
                                {isSubmitting ? "Sending..." : "Drop a Message"}
                            </Button>

                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/10 text-green-500 rounded-lg text-center"
                                >
                                    Message sent successfully!
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
