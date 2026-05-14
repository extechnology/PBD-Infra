import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 1000,
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  let transformClass = "translate-y-8"; // default up
  if (direction === "down") transformClass = "-translate-y-8";
  if (direction === "left") transformClass = "translate-x-8";
  if (direction === "right") transformClass = "-translate-x-8";
  if (direction === "none") transformClass = "translate-y-0 translate-x-0";

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : "",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className={`transition-transform duration-[inherit] delay-[inherit] ${
          !isVisible ? transformClass : "translate-y-0 translate-x-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FadeIn;
