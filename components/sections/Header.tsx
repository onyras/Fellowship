"use strict";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="font-serif text-lg font-medium tracking-tight">
                    Wise Leaders Fellowship
                </Link>
                <nav className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
                        <Link href="#program" className="hover:text-foreground transition-colors">
                            Program
                        </Link>
                        <Link href="#faculty" className="hover:text-foreground transition-colors">
                            Faculty
                        </Link>
                        <Link href="#difference" className="hover:text-foreground transition-colors">
                            Difference
                        </Link>
                    </div>
                    <Button size="sm" variant="primary">
                        Apply Now
                    </Button>
                </nav>
            </Container>
        </header>
    );
}
