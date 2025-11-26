import { Container } from "@/components/ui/Container";

export function ProgramDetails() {
    return (
        <section className="py-24 bg-background space-y-32">
            {/* Phase I */}
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="order-2 lg:order-1 h-full min-h-[400px] bg-accent/5 rounded-sm relative overflow-hidden">
                        {/* Placeholder for retreat image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
                                AUGUST 5-10, 2025
                            </span>
                            <span className="w-px h-4 bg-border"></span>
                            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                                Phase I · Foundation Retreat
                            </span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-foreground">
                            Five days of extended silence, daily leadership labs, and deep peer connection.
                        </h3>
                        <p className="text-lg text-text-secondary mb-8">
                            This is where the real work begins.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="font-medium text-sm uppercase tracking-wide mb-4 text-foreground">Format</h4>
                                <ul className="space-y-2 text-sm text-text-secondary">
                                    <li>Location: Retreat center in nature (Germany)</li>
                                    <li>Duration: 5 days, residential</li>
                                    <li>Structure: Morning silence, afternoon labs</li>
                                    <li>Facilitators: Nikolas Konstantin + guest faculty</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-sm uppercase tracking-wide mb-4 text-foreground">Outcomes</h4>
                                <ul className="space-y-2 text-sm text-text-secondary">
                                    <li>A clearer inner compass</li>
                                    <li>Daily practices you can sustain</li>
                                    <li>Concrete behavioral commitments</li>
                                    <li>Deep bonds with your Wisdom Council</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Phase II */}
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
                                Training
                            </span>
                            <span className="w-px h-4 bg-border"></span>
                            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                                Phase II · Monthly Expert Labs
                            </span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-foreground">
                            Seven live sessions that connect wisdom to execution
                        </h3>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            All virtual labs run 18:00 to 20:00 CET. Each lab combines a short teaching, a practical framework, and work on real cases.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Navigating the growing pains of organizational growth", speaker: "Hugo Suidmann" },
                            { title: "Principles for high performance without burnout", speaker: "Bernd Kessel" },
                            { title: "Transformational conversations for high trust cultures", speaker: "Joe Hudson" },
                            { title: "Emotional intelligence as a daily leadership practice", speaker: "Jana Schmitz" },
                            { title: "The dimensions of relationship mastery in executive teams", speaker: "Dr Michael Korpiun" },
                            { title: "Navigating difference and complexity as a leader", speaker: "Vanessa Faloye" },
                            { title: "Zen and the art of long term thinking", speaker: "Zen monk Shoukei Matsumoto" },
                        ].map((lab, i) => (
                            <div key={i} className="p-6 bg-white border border-border/40 rounded-sm">
                                <h4 className="font-medium text-foreground mb-2">{lab.title}</h4>
                                <p className="text-sm text-text-secondary italic">{lab.speaker}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-text-secondary mt-8 italic">
                        The exact line up can evolve. The bar stays the same.
                    </p>
                </div>
            </Container>

            {/* Phase III */}
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
                                Performance Training
                            </span>
                            <span className="w-px h-4 bg-border"></span>
                            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                                Phase III · Biofeedback Retreat
                            </span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-foreground">
                            Design routines that your future self can sustain
                        </h3>
                        <div className="space-y-4 text-text-secondary mb-8">
                            <p>You will:</p>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>Work with your individual stress and recovery data</li>
                                <li>Learn practical breath and body protocols</li>
                                <li>Build a personal routine that fits your real life</li>
                            </ul>
                            <p>
                                You close the journey with a clear playbook for how to perform at a high level without burning out.
                            </p>
                        </div>
                        <div className="p-6 bg-accent/5 rounded-sm">
                            <p className="text-sm text-foreground font-medium mb-2">Dates: Saturday 11 to Sunday 12 April 2026</p>
                            <p className="text-sm text-text-secondary">Coaches: Jan Philipp Martini, Peter van Woerkum</p>
                        </div>
                    </div>
                    <div className="h-full min-h-[400px] bg-accent/5 rounded-sm relative overflow-hidden">
                        {/* Placeholder for biofeedback image */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 to-transparent" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
