"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>

            <Container className="relative z-10 flex flex-col items-center text-center max-w-4xl">
                <motion.div style={{ y, opacity }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
                            For Founder CEOs
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 text-foreground"
                    >
                        For founder CEOs who have outgrown standard advice
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="font-serif text-2xl md:text-3xl text-text-secondary mb-12 italic"
                    >
                        Leadership is a lonely burden. You shouldn't carry it alone.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="max-w-2xl mb-12"
                    >
                        <p className="text-lg text-text-secondary leading-relaxed">
                            The private, vetted community for experienced executives and founders who have outgrown standard advice. We focus on wisdom, legacy, and the unfiltered reality of decision-making.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link href="https://niko96.typeform.com/to/M6FxhidU" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto">
                                Apply for the next cohort
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Refer a CEO
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
