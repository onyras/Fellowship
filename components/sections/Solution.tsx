import { Container } from "@/components/ui/Container";

export function Solution() {
    return (
        <section className="py-24 bg-accent text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
            <Container className="relative z-10 text-center max-w-3xl">
                <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8">
                    We create reflection spaces for people in responsibility.
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed mb-12">
                    <p>
                        We don't teach frameworks or give you answers. We bring together world-class experts, curate transformative experiences, and create the conditions for you to see yourself clearly.
                    </p>
                    <p>
                        Science meets contemplative practice. Data meets intuition. Peer wisdom meets expert guidance.
                    </p>
                </div>
                <p className="font-serif text-2xl md:text-3xl text-white italic">
                    The insights you need are already within you. We help you access them.
                </p>
            </Container>
        </section>
    );
}
