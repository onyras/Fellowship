import { Container } from "@/components/ui/Container";

export function Problem() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6 block">
                            The Unspoken Truth
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-foreground">
                            You've outgrown standard advice.
                        </h2>
                        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                            <p>
                                Most CEO groups are noisy, tactical, full of people trying to become leaders. But you're already there. You've already built something real.
                            </p>
                            <p>
                                The problem isn't finding more advice. It's finding space to think clearly about what actually matters.
                            </p>
                            <p>
                                You can't be vulnerable with your employees. You can't be uncertain with your board. And the further you go, the fewer people truly understand what you carry.
                            </p>
                        </div>
                        <div className="mt-12 p-8 bg-accent/5 border-l-2 border-accent">
                            <p className="font-serif text-2xl text-accent italic">
                                This is a sanctuary for those already in the arena.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full h-full min-h-[400px] bg-accent/5 rounded-sm relative overflow-hidden">
                        {/* Placeholder for contemplative image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
