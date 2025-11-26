import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white p-8 md:p-10 border border-border/50 shadow-sm",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
