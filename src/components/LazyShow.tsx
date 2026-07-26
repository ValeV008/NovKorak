import { ReactNode, useEffect, useRef, useState } from "react";

const LazyShow = ({ children }: { children: ReactNode }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`lazy-div ${isVisible ? "lazy-div--visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default LazyShow;
