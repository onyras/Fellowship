import { Container } from "@/components/ui/Container";
import { Play } from "lucide-react";

export function VideoSection() {
    return (
        <section className="py-24 bg-background border-b border-border/50">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6 block">
                            Fellowship Recap Video
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-foreground">
                            Nine months is a long time.
                        </h2>
                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            Long enough to change how you think. Long enough to change how you lead.
                        </p>
                        <p className="text-base text-text-secondary leading-relaxed">
                            Watch how seven founders work through the hard questions together, guided by people who've been there. This is not a lecture. This is real work, done in real time, with people who understand what it means to build something that matters.
                        </p>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="relative aspect-video bg-accent/5 rounded-sm overflow-hidden group cursor-pointer">
                            {/* Placeholder for video thumbnail */}
                            <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-6 h-6 md:w-8 md:h-8 text-accent ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
