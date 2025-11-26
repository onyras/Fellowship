import { Container } from "@/components/ui/Container";

export function Metrics() {
    return (
        <section className="py-24 md:py-32 border-b border-border/50">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-border/50">
                    <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
                        <span className="font-serif text-5xl md:text-6xl font-medium text-accent mb-4 block">
                            350+
                        </span>
                        <p className="text-text-secondary text-sm uppercase tracking-wide font-medium max-w-[200px]">
                            Health markers measured
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
                        <span className="font-serif text-5xl md:text-6xl font-medium text-accent mb-4 block">
                            30%
                        </span>
                        <p className="text-text-secondary text-sm uppercase tracking-wide font-medium max-w-[200px]">
                            Less negative self-talk reported by alumni
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
                        <span className="font-serif text-5xl md:text-6xl font-medium text-accent mb-4 block">
                            40%
                        </span>
                        <p className="text-text-secondary text-sm uppercase tracking-wide font-medium max-w-[200px]">
                            Perceived as better leaders by their teams
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
