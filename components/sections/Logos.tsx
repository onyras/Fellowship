import { Container } from "@/components/ui/Container";

export function Logos() {
    const companies = [
        "Mojo",
        "SirPlus",
        "Amorelie",
        "Humanize",
        "Stockholm Labs",
        "Klang Games",
    ];

    return (
        <section className="py-16 border-b border-border/50 bg-background">
            <Container>
                <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-10">
                    Trusted by leaders at
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale">
                    {companies.map((company) => (
                        <div
                            key={company}
                            className="text-xl md:text-2xl font-serif font-medium text-text-secondary"
                        >
                            {/* Placeholder for actual logo */}
                            {company}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
