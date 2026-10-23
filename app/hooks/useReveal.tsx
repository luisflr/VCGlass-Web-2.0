import { useEffect, useRef } from "react";

/**
 * Hook que añade clase `in` cuando el elemento entra al viewport.
 * Funciona con clases `reveal` o `reveal-stagger` definidas en index.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return ref;
}
