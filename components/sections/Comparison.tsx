import { Container } from "@/components/ui/Container";

export function Comparison() {
    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6 block">
                        Difference
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-foreground">
                        There's a better way to develop as a leader.
                    </h2>
                    <p className="text-lg text-text-secondary">
                        The new way vs. the old way
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="py-6 px-4 w-1/4"></th>
                                <th className="py-6 px-4 w-1/3 font-serif text-xl font-medium text-accent">Wise Leaders Fellowship</th>
                                <th className="py-6 px-4 w-1/3 font-serif text-xl font-medium text-text-secondary">CEO Peer Groups (The old way)</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm md:text-base">
                            <tr className="border-b border-border/50">
                                <td className="py-6 px-4 font-medium text-foreground">Investment</td>
                                <td className="py-6 px-4 text-text-secondary">€12,000 for 9 months</td>
                                <td className="py-6 px-4 text-text-secondary">€15,000–€30,000/year</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-6 px-4 font-medium text-foreground">Time-to-clarity</td>
                                <td className="py-6 px-4 text-text-secondary">Immediate. A 5-day silent retreat cuts through years of noise in three days.</td>
                                <td className="py-6 px-4 text-text-secondary">Months, maybe never. Surface-level sharing. The same stories on repeat.</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-6 px-4 font-medium text-foreground">Focus</td>
                                <td className="py-6 px-4 text-text-secondary">Inner development. Your stress patterns, your blind spots, how you show up under pressure.</td>
                                <td className="py-6 px-4 text-text-secondary">Tactical problems. Useful, but doesn't address why the same problems keep showing up.</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-6 px-4 font-medium text-foreground">Transformation</td>
                                <td className="py-6 px-4 text-text-secondary">Measured. Diagnostics before and after. Contemplative practices. New operating patterns you can see.</td>
                                <td className="py-6 px-4 text-text-secondary">Rare. No inner work. No diagnostics. Same ceiling year after year.</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-6 px-4 font-medium text-foreground">Community</td>
                                <td className="py-6 px-4 text-text-secondary">Hand-matched. Curated by experience, industry, personality. Professionally facilitated. Built to last.</td>
                                <td className="py-6 px-4 text-text-secondary">Random matching. Grouped by geography. Peer-only discussions stay shallow.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-16 text-center max-w-4xl mx-auto">
                    <p className="font-serif text-2xl md:text-3xl italic text-foreground leading-relaxed">
                        "Silence creates space for truth. Diagnostics reveal what you can't see. Practices build new capacity. Peers who do this work become allies in a way networking groups never touch."
                    </p>
                </div>
            </Container>
        </section>
    );
}
