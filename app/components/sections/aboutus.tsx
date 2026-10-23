"use client";

import { FEATURES } from "@/app/data";
import { useReveal } from "@/app/hooks/useReveal";
import { FEAT_ICONS } from "@/app/ui/icons";

export default function AboutUs() {
  const visualRef = useReveal<HTMLElement>();
  const eyebrowRef = useReveal<HTMLSpanElement>();
  const titleRef = useReveal<HTMLHeadingElement>();
  const leadRef = useReveal<HTMLParagraphElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="aboutus"
      className="relative py-28 pad-x bg-bg-night overflow-hidden"
    >
      {/* Glow decor */}
      <div
        className="absolute -top-52 -right-52 w-125 h-125 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,197,.08) 0%, transparent 70%)",
        }}
      />

      <div className="shell">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Visual */}
          <aside
            ref={visualRef}
            className="reveal relative lg:sticky lg:top-24 rounded-3xl overflow-hidden border border-line aspect-4/5 mx-auto w-full max-w-140"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85"
              alt="Interior con instalación de vidrio premium"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(.85) saturate(1.05)" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(45deg, rgba(45,212,197,.1), transparent 60%)",
              }}
            />
            <div className="porque-quote absolute bottom-8 left-8 right-8 p-6 bg-bg-deep/70 backdrop-blur-xl border border-line rounded-2xl font-display italic font-light text-[1.1rem] leading-[1.4] tracking-[-0.01em]">
              La calidad no es un acto, es un hábito. Cada milímetro cuenta
              cuando se trata de vidrio.
            </div>
          </aside>

          {/* Content */}
          <div>
            <span ref={eyebrowRef} className="reveal eyebrow">
              ¿Por qué GlassPeru?
            </span>
            <h2 ref={titleRef} className="reveal section-title">
              Trabajo serio, acabados <em>impecables</em>.
            </h2>
            <p ref={leadRef} className="reveal section-lead">
              No improvisamos. Cada proyecto pasa por medición técnica, asesoría
              en sistemas, fabricación verificada e instalación supervisada por
              personal especializado.
            </p>

            <div ref={listRef} className="reveal-stagger flex flex-col mt-12">
              {FEATURES.map((f, i) => {
                const Icon = FEAT_ICONS[f.icon];
                return (
                  <div
                    key={f.titulo}
                    className={`group grid grid-cols-[60px_1fr] gap-7 py-8 border-t border-line transition-all duration-400 ease-smooth hover:pl-3 ${
                      i === FEATURES.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <div className="w-15 h-15 border border-line rounded-2xl grid place-items-center bg-bg-elev transition-all duration-400 ease-smooth text-teal group-hover:bg-teal group-hover:text-bg-deep group-hover:border-teal">
                      <Icon className="w-6.5 h-6.5" />
                    </div>
                    <div>
                      <h4 className="font-display font-normal text-[1.4rem] tracking-[-0.015em] mb-2">
                        {f.titulo}
                      </h4>
                      <p className="text-ink-mute text-[0.95rem] leading-[1.6] max-w-[48ch]">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
