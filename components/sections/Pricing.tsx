import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Check } from "lucide-react";

export function Pricing() {
    const features = [
        "Five-day in-person foundation retreat",
        "Access to biofeedback tools",
        "Nine months of peer cohort support",
        "Ongoing measurement",
        "Seven expert lab sessions",
        "Monthly executive coaching",
        "Final two-day integration retreat",
    ];

    return (
        <section className="py-24 bg-background border-t border-border/50" id="pricing">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6 block">
                        Investment
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-foreground">
                        Investment and practical details
                    </h2>
                    <p className="text-lg text-text-secondary">
                        One price. Everything included.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Card className="max-w-lg w-full border-accent/20 shadow-lg">
                        <div className="text-center mb-8">
                            <h3 className="text-xl font-medium text-text-secondary mb-4">Full Fellowship</h3>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-5xl font-serif font-medium text-foreground">€12,000</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-text-secondary">
                                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" className="w-full">
                            Apply now
                        </Button>
                    </Card>
                </div>
            </Container>
        </section>
    );
}
