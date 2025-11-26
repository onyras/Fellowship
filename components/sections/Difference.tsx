import { Container } from "@/components/ui/Container";
import { Brain, Heart, Users, Zap } from "lucide-react";

export function Difference() {
    const features = [
        {
            icon: <Brain className="w-6 h-6" />,
            text: "Silence creates space for truth.",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            text: "Diagnostics reveal what you can't see.",
        },
        {
            icon: <Heart className="w-6 h-6" />,
            text: "Practices build new capacity.",
        },
        {
            icon: <Users className="w-6 h-6" />,
            text: "Peers who do this work become allies in a way networking groups never touch.",
        },
    ];

    return (
        <section className="py-24 bg-background border-b border-border/50" id="difference">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6 block">
                            The Fellowship Difference
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-foreground">
                            Where wisdom meets performance.
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            Most leadership programs focus on what you do. We focus on who you are when you do it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col gap-4 p-6 bg-white border border-border/40 rounded-sm hover:border-accent/30 transition-colors duration-300">
                                <div className="w-12 h-12 bg-accent/5 rounded-full flex items-center justify-center text-accent">
                                    {feature.icon}
                                </div>
                                <p className="font-medium text-foreground leading-snug">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
