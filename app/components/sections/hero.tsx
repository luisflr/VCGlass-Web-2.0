import { waLink } from "@/app/lib/constants";
import { ArrowRight } from "@/app/ui/icons";

type MetaItem = {
  num: string;
  suffix?: string;
  em?: boolean;
  label: string;
};

const META: MetaItem[] = [
  { num: "+12", suffix: " años", em: true, label: "De experiencia" },
  { num: "500+", em: true, label: "Proyectos ejecutados" },
  { num: "100%", em: true, label: "Vidrio templado certificado" },
  { num: "Lima·Perú", label: "Cobertura nacional" },
];
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pad-x pt-32 pb-16 flex flex-col justify-end overflow-hidden isolate"
    >
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=85"
          alt="Arquitectura moderna en vidrio y aluminio"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          style={{ filter: "brightness(.55) saturate(.9) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,14,15,.4) 0%, rgba(10,14,15,.5) 40%, rgba(10,14,15,.95) 100%), radial-gradient(ellipse at 70% 30%, rgba(45,212,197,.18) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="shell">
        {/* Tag */}
        <span
          className="inline-flex items-center gap-[0.65rem] px-4 py-2 border border-line rounded-full text-xs font-semibold tracking-[0.18em] uppercase text-ink-mute w-fit bg-bg-deep/40 backdrop-blur-md mb-8 opacity-0"
          style={{ animation: "rise .9s cubic-bezier(.16,.84,.3,1) .2s both" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-dot"
            style={{ boxShadow: "0 0 10px #2dd4c5" }}
          />
          Vidrio &amp; Aluminio · Perú
        </span>

        {/* Title */}
        <h1 className="hero-title">
          <span className="word" style={{ animationDelay: ".35s" }}>
            Soluciones
          </span>{" "}
          <span className="word" style={{ animationDelay: ".45s" }}>
            en
          </span>{" "}
          <span className="word" style={{ animationDelay: ".55s" }}>
            <em>vidrio</em>
          </span>{" "}
          <span className="word" style={{ animationDelay: ".65s" }}>
            con acabados
          </span>{" "}
          <span className="word" style={{ animationDelay: ".75s" }}>
            de autor.
          </span>
        </h1>

        <p
          className="text-ink-mute leading-[1.6] mb-10 max-w-[48ch] opacity-0"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.18rem)",
            animation: "rise 1s cubic-bezier(.16,.84,.3,1) .9s both",
          }}
        >
          Diseño, venta e instalación profesional de mamparas, barandas,
          espejos, ventanas y estructuras de aluminio. Ejecutamos cada proyecto
          con precisión arquitectónica y materiales de calidad superior.
        </p>

        <div
          className="flex flex-wrap gap-4 opacity-0"
          style={{ animation: "rise 1s cubic-bezier(.16,.84,.3,1) 1.05s both" }}
        >
          <a
            href={waLink("Hola GlassPeru, quisiera cotizar un proyecto")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Cotizar por WhatsApp
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
          <a href="#contacto" className="btn btn-ghost">
            Contáctanos
          </a>
        </div>

        {/* Meta stats */}
        <div
          className="mt-20 pt-8 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0"
          style={{ animation: "rise 1s cubic-bezier(.16,.84,.3,1) 1.25s both" }}
        >
          {META.map((m) => (
            <div key={m.label}>
              <div
                className="font-display font-normal tracking-[-0.02em] leading-none"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
              >
                {m.em ? (
                  <>
                    <em
                      className="not-italic font-medium text-teal"
                      style={{ fontStyle: "italic" }}
                    >
                      {m.num}
                    </em>
                    {m.suffix}
                  </>
                ) : (
                  m.num
                )}
              </div>
              <div className="mt-2 text-xs tracking-[0.15em] uppercase text-ink-soft font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="hidden md:flex absolute bottom-8 right-[clamp(1.25rem,4vw,3rem)] text-[0.7rem] tracking-[0.25em] uppercase text-ink-soft items-center gap-3 scroll-hint opacity-0"
        style={{ animation: "rise 1s cubic-bezier(.16,.84,.3,1) 1.4s both" }}
      >
        Desliza · Explora
      </div>
    </section>
  );
}

export default Hero;
