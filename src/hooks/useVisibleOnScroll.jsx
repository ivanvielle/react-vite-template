import { useEffect, useState } from "react";

function useVisibleOnScroll(ref) {
    const [isVisibleOnScroll, setIsVisibleOnScroll] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisibleOnScroll(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

    return isVisibleOnScroll;
}

export default useVisibleOnScroll;
