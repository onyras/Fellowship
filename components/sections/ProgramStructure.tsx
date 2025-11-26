import { Container } from "@/components/ui/Container";

export function ProgramStructure() {
    const phases = [
        {
            number: "01",
            title: "Foundation Retreat",
            description: "Five day Wise Leadership kick off retreat in late summer where you meet your cohort.",
        },
        {
            number: "02",
            title: "Expert Labs",
            description: "Seven months of deep dives into strategy, culture, resilience, and leadership presence.",
        },
        {
            number: "03",
            title: "One-on-one coaching",
            description: "Monthly sessions with an executive coach who knows your story and your struggles.",
        },
        {
            number: "04",
            title: "Biofeedback Seminar",
            description: "A final gathering in form of a two day biofeedback & performance retreat in spring.",
        },
    ];

    return (
        <section className="py-24 bg-background" id="structure">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6 block">
                        Structure
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-foreground">
                        How nine months unfold
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        The fellowship moves through four distinct phases. Each one builds on the last, creating momentum toward real change.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, index) => (
                        <div key={index} className="relative p-6 border-t border-border pt-8 group hover:bg-accent/5 transition-colors duration-300 rounded-sm">
                            <span className="text-4xl font-serif text-accent/20 font-medium absolute top-6 right-6 group-hover:text-accent/30 transition-colors">
                                {phase.number}
                            </span>
                            <h3 className="text-xl font-serif font-medium mb-4 text-foreground group-hover:text-accent transition-colors">
                                {phase.title}
                            </h3>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {phase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
