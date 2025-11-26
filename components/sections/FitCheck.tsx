import { Container } from "@/components/ui/Container";
import { Check, X } from "lucide-react";

export function FitCheck() {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6 block">
                        Fit
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-foreground">
                        Is this CEO cohort right for you?
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Be honest about what you need
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    <div>
                        <h3 className="font-serif text-2xl font-medium mb-8 text-accent flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm">
                                <Check className="w-5 h-5" />
                            </span>
                            You are a fit if
                        </h3>
                        <ul className="space-y-8">
                            <li>
                                <h4 className="font-medium text-foreground mb-2">You lead a real company</h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Your company scaled past twenty people and you feel the leadership game changed faster than you did
                                </p>
                            </li>
                            <li>
                                <h4 className="font-medium text-foreground mb-2">You are in transition</h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    You are raising a new round, preparing for exit, or navigating a major transition and realize you need to evolve alongside it
                                </p>
                            </li>
                            <li>
                                <h4 className="font-medium text-foreground mb-2">You sense a constraint</h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Your executive team is not executing at the level you need, or you sense your own leadership might be the constraint
                                </p>
                            </li>
                            <li>
                                <h4 className="font-medium text-foreground mb-2">You've tried other approaches</h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    You have tried other approaches (coaching, courses, books, peer groups) but want something more rigorous, connected to real peers, and grounded in evidence
                                </p>
                            </li>
                            <li>
                                <h4 className="font-medium text-foreground mb-2">You can commit nine months</h4>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-2xl font-medium mb-8 text-text-secondary flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500 text-sm">
                                <X className="w-5 h-5" />
                            </span>
                            You are not a fit if
                        </h3>
                        <ul className="space-y-8">
                            <li>
                                <h4 className="font-medium text-foreground mb-2">You're looking for quick fixes</h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    You want a quick inspirational seminar instead of a real nine month journey
                                </p>
                            </li>
                            <li>
                                <h4 className="font-medium text-foreground mb-2">You outsource leadership</h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    You prefer to outsource leadership issues to HR or consultants
                                </p>
                            </li>
                            <li>
                                <h4 className="font-medium text-foreground mb-2">You avoid vulnerability</h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    You are not willing to bring real situations into the room and be challenged by peers
                                </p>
                            </li>
                            <li>
                                <h4 className="font-medium text-foreground mb-2">You're skeptical of measurement</h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    You are skeptical of measuring your own development or uncomfortable with data about your stress, recovery, and behavioral patterns
                                </p>
                            </li>
                            <li>
                                <h4 className="font-medium text-foreground mb-2">You can't show up fully</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
