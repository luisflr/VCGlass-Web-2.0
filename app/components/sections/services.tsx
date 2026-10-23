"use client";

import { SERVICIOS } from "@/app/data";
import { useReveal } from "@/app/hooks/useReveal";
import { Card } from "@/app/ui/services-card";

function Services() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  return (
    <section
      id="servicios"
      className="py-28 pad-x"
      style={{
        background: "linear-gradient(180deg, #0a0e0f 0%, #0e1416 100%)",
      }}
    >
      <div className="shell">
        <div
          ref={headRef}
          className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16"
        >
          <div>
            <span className="eyebrow">Servicios</span>
            <h2 className="section-title">
              Cada superficie, una <em>declaración</em> de diseño.
            </h2>
          </div>
          <p className="section-lead">
            Desarrollamos soluciones a medida en vidrio templado y aluminio para
            hogares, oficinas, edificios y espacios comerciales. Asesoría
            técnica, instalación profesional y acabados meticulosos en cada
            proyecto.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-12 gap-6">
          {SERVICIOS.map((s) => (
            <Card key={s.tag} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
