"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "scale-up";
    delay?: number;
    duration?: number;
    className?: string;
}

export const ScrollReveal = ({
    children,
    animation = "fade-up",
    delay = 0,
    duration = 700,
    className = ""
}: ScrollRevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optional: unobserve after showing once
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Reveal when 10% of the element is visible
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const getAnimationClass = () => {
        if (!isVisible) {
            switch (animation) {
                case "fade-up": return "opacity-0 translate-y-12";
                case "fade-down": return "opacity-0 -translate-y-12";
                case "fade-left": return "opacity-0 translate-x-12";
                case "fade-right": return "opacity-0 -translate-x-12";
                case "zoom-in": return "opacity-0 scale-90";
                case "scale-up": return "opacity-0 scale-95 translate-y-4";
                default: return "opacity-0";
            }
        }
        return "opacity-100 translate-y-0 translate-x-0 scale-100";
    };

    return (
        <div
            ref={domRef}
            className={`${getAnimationClass()} transition-all ease-out ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};
