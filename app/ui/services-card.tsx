import { Servicio } from "../data";
import { ArrowRight } from "./icons";

export function Card({ s }: { s: Servicio }) {
  return (
    <article
      className={`group relative rounded-[20px] overflow-hidden bg-bg-card border border-line transition-all duration-550 ease-smooth cursor-pointer isolate hover:border-teal/40 hover:-translate-y-1 col-span-12 ${s.span} ${s.minH}`}
    >
      {/* Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={s.img}
          alt={s.alt}
          className="w-full h-full object-cover transition-transform duration-1200 ease-smooth group-hover:scale-[1.06]"
          style={{ filter: "brightness(.5) saturate(.95)" }}
        />
        <div
          className="absolute inset-0 z-1 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,14,15,.1) 0%, rgba(10,14,15,.5) 50%, rgba(10,14,15,.95) 100%)",
          }}
        />
      </div>

      {/* Arrow */}
      <div
        className="absolute top-7 right-7 w-10.5 h-10.5 rounded-full border border-line grid place-items-center bg-bg-deep/40 backdrop-blur-md transition-all duration-450 ease-smooth z-2 group-hover:bg-teal group-hover:border-teal group-hover:text-bg-deep group-hover:-rotate-45"
        aria-hidden="true"
      >
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="relative z-2 p-8 h-full flex flex-col justify-between gap-8">
        <span className="font-display italic font-normal text-[0.95rem] text-teal tracking-wider">
          {s.num}
        </span>
        <div>
          <h3
            className="font-display font-normal leading-[1.1] tracking-[-0.02em] mb-3"
            style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
          >
            {s.titulo}
          </h3>
          <p className="text-ink-mute text-[0.92rem] leading-[1.55] max-w-[38ch]">
            {s.desc}
          </p>
        </div>
      </div>
    </article>
  );
}
