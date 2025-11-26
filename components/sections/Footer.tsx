import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-20">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-serif text-2xl font-medium">Nikolas Konstantin</h3>
                        <p className="text-text-secondary text-sm max-w-xs">
                            The private, vetted community for experienced executives and founders.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-medium text-sm uppercase tracking-wider text-text-secondary">Program</h4>
                            <Link href="#structure" className="text-sm hover:text-accent transition-colors">Structure</Link>
                            <Link href="#faculty" className="text-sm hover:text-accent transition-colors">Faculty</Link>
                            <Link href="#pricing" className="text-sm hover:text-accent transition-colors">Investment</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-medium text-sm uppercase tracking-wider text-text-secondary">Company</h4>
                            <Link href="#" className="text-sm hover:text-accent transition-colors">About</Link>
                            <Link href="#" className="text-sm hover:text-accent transition-colors">Contact</Link>
                            <Link href="#" className="text-sm hover:text-accent transition-colors">Privacy</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-medium text-sm uppercase tracking-wider text-text-secondary">Contact</h4>
                            <a href="mailto:hello@nikolaskonstantin.com" className="text-sm hover:text-accent transition-colors">
                                hello@nikolaskonstantin.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
                    <p>&copy; 2025 Nikolas Konstantin. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground">Terms</Link>
                        <Link href="#" className="hover:text-foreground">Privacy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
