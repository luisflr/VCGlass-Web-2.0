import { GalItem } from "@/app/ui/gal-item";
import { PROYECTOS } from "@/app/data";
import { useReveal } from "@/app/hooks/useReveal";

export default function Projects() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section id="proyectos" className="py-28 pad-x bg-bg-deep">
      <div className="shell">
        <div
          ref={headRef}
          className="reveal flex flex-wrap justify-between items-end mb-14 gap-8"
        >
          <div>
            <span className="eyebrow">Proyectos</span>
            <h2 className="section-title">
              Una selección de <em>obras recientes</em>.
            </h2>
          </div>
          <p className="section-lead">
            Residencial, corporativo y comercial. Cada instalación cuenta una
            historia distinta de espacio y luz.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-12 gap-5 lg:auto-rows-35"
        >
          {PROYECTOS.map((p, i) => (
            <GalItem key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
