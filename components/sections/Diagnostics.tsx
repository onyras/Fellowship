import { Container } from "@/components/ui/Container";

export function Diagnostics() {
    return (
        <section className="py-24 bg-background border-b border-border/50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6 block">
                        Sapiens Diagnostics
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-foreground">
                        Stress-proof your leadership with body data.
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        In partnership with Be-Sapiens, every Fellow receives comprehensive stress diagnostics and a personalized resilience plan. This isn't generic wellness advice. It's a scientific assessment of how your body handles the demands of leadership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white border border-border/40 rounded-sm">
                        <span className="text-xs font-medium uppercase tracking-wide text-accent mb-4 block">
                            Aug 5–10, 2025 · Germany
                        </span>
                        <h3 className="font-serif text-xl font-medium mb-6 text-foreground">DIAGNOSTICS</h3>
                        <ul className="space-y-3 text-sm text-text-secondary">
                            <li>Hair Stress Hormone Profile</li>
                            <li>Saliva Cortisol Profile</li>
                            <li>Recovery Analytics with ECG Monitor</li>
                            <li>Scientifically Validated Self-Assessment</li>
                        </ul>
                    </div>

                    <div className="p-8 bg-white border border-border/40 rounded-sm">
                        <span className="text-xs font-medium uppercase tracking-wide text-accent mb-4 block">
                            Sep–Mar, 2025–2026 · Virtual
                        </span>
                        <h3 className="font-serif text-xl font-medium mb-6 text-foreground">YOUR REPORT</h3>
                        <ul className="space-y-3 text-sm text-text-secondary">
                            <li>Body Reserve Index</li>
                            <li>Stress Age vs. Actual Age</li>
                            <li>System-by-system breakdown</li>
                            <li>Protective Factors and Stress Drivers</li>
                            <li>Thought Patterns analysis</li>
                        </ul>
                    </div>

                    <div className="p-8 bg-white border border-border/40 rounded-sm">
                        <span className="text-xs font-medium uppercase tracking-wide text-accent mb-4 block">
                            Apr 11–12, 2026 · Germany
                        </span>
                        <h3 className="font-serif text-xl font-medium mb-6 text-foreground">YOUR ACTION PLAN</h3>
                        <ul className="space-y-3 text-sm text-text-secondary">
                            <li>Personalized focus areas</li>
                            <li>Specific daily protocols</li>
                            <li>Nutrition recommendations</li>
                            <li>Movement prescriptions</li>
                            <li>Recovery routines</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
