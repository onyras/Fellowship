import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function Testimonials() {
    const testimonials = [
        {
            quote: "These models help me navigate and live my life by.",
            author: "Francescu Santoni",
            role: "CEO Mojo, YC W19",
        },
        {
            quote: "This program has changed my mind. It will change yours.",
            author: "Raffael Fellmer",
            role: "CEO SirPlus",
        },
        {
            quote: "I never knew I have so much kindness in me.",
            author: "Claire Midwood",
            role: "former CEO Amorelie",
        },
        {
            quote: "Nikolas teaches the science of meditation in a way that immediately is applicable to help me be a better leader.",
            author: "Franziska Schmitt",
            role: "CEO Humanize",
        },
        {
            quote: "The fellowship showed me that leading well starts with knowing yourself. Everything else follows from there.",
            author: "Marcus Bergström",
            role: "Founder, Stockholm Labs",
        },
        {
            quote: "An amazing program to reflect how I am showing up as a leader.",
            author: "Oddur Magnusson",
            role: "Founder Klang Games",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col justify-between h-full bg-background border-border/40 hover:border-border transition-colors duration-300">
                            <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mb-8 text-foreground">
                                "{testimonial.quote}"
                            </blockquote>
                            <div>
                                <cite className="not-italic font-medium text-sm block text-foreground">
                                    {testimonial.author}
                                </cite>
                                <span className="text-xs text-text-secondary uppercase tracking-wide mt-1 block">
                                    {testimonial.role}
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
