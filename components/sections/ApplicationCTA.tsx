import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function ApplicationCTA() {
    return (
        <section className="py-24 md:py-32 bg-accent text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/70 mb-6 block">
                        Selection
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl font-medium mb-8">
                        Applications for the 2026 cohort are open.
                    </h2>
                    <p className="text-xl text-white/80 mb-12">
                        How we choose you
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
                        <div>
                            <h3 className="font-serif text-2xl font-medium mb-4">Leadership impact</h3>
                            <p className="text-white/70 leading-relaxed">
                                Evidence that you have already built something real. We want founders and CEOs who have skin in the game and carry real weight in their organizations.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl font-medium mb-4">Clarity of vision</h3>
                            <p className="text-white/70 leading-relaxed">
                                You have a clear sense of what you're building and why it matters. You're not just chasing growth for growth's sake, but aiming for something enduring.
                            </p>
                        </div>
                    </div>

                    <Link href="https://niko96.typeform.com/to/M6FxhidU" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" className="bg-white text-accent hover:bg-white/90 w-full sm:w-auto px-12 h-14 text-lg">
                            Apply now
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
