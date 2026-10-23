import { Proyecto } from "../data";

export function GalItem({ p }: { p: Proyecto }) {
  return (
    <a
      href="#contacto"
      className={`group relative overflow-hidden rounded-2xl border border-line cursor-pointer bg-bg-card isolate aspect-5/4 lg:aspect-auto col-span-12 ${p.span} ${p.rows}`}
    >
      <img
        src={p.img}
        alt={p.alt}
        className="w-full h-full object-cover transition-all duration-1400 ease-smooth group-hover:scale-[1.08]"
        style={{ filter: "brightness(.85) saturate(.95)" }}
      />
      <div
        className="absolute inset-0 z-2 flex flex-col justify-end p-6 opacity-0 translate-y-4 transition-all duration-500 ease-smooth group-hover:opacity-100 group-hover:translate-y-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, rgba(10,14,15,.95) 100%)",
        }}
      >
        <span className="text-[0.7rem] tracking-[0.2em] uppercase text-teal mb-2">
          {p.cat}
        </span>
        <h4 className="font-display font-normal text-[1.25rem] tracking-[-0.015em]">
          {p.titulo}
        </h4>
      </div>
    </a>
  );
}
