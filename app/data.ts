export const CONTACT = {
  whatsapp: "51999999999",
  email: "contacto@glassperu.com",
  phone: "+51 999 999 999",
} as const;

export const waLink = (msg: string): string =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

export type Servicio = {
  num: string;
  tag: string;
  titulo: string;
  desc: string;
  img: string;
  alt: string;
  span: string; // tailwind classes p/ grid
  minH: string;
};

export const SERVICIOS: Servicio[] = [
  {
    num: "01 — Baño",
    tag: "mampara",
    titulo: "Mamparas de baño en vidrio templado",
    desc: "Sistemas fijos, corredizos y pivotantes. Vidrio de 8 a 10 mm con accesorios de acero inoxidable y acabados premium.",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=85",
    alt: "Mampara de baño en vidrio templado",
    span: "lg:col-span-7",
    minH: "min-h-[480px]",
  },
  {
    num: "02 — Estructura",
    tag: "baranda",
    titulo: "Barandas de vidrio",
    desc: "Para escaleras, balcones y terrazas. Sistemas spider, U-channel y stand-off.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85",
    alt: "Baranda de vidrio en escalera moderna",
    span: "lg:col-span-5",
    minH: "min-h-[480px]",
  },
  {
    num: "03 — Detalle",
    tag: "espejo",
    titulo: "Espejos personalizados",
    desc: "Cortes especiales, biselados y formatos a medida.",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85",
    alt: "Espejo personalizado decorativo",
    span: "lg:col-span-4",
    minH: "min-h-[380px]",
  },
  {
    num: "04 — Aluminio",
    tag: "ventana",
    titulo: "Ventanas y estructuras",
    desc: "Sistemas de aluminio en perfilería estándar y europea.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85",
    alt: "Ventanas y estructuras de aluminio",
    span: "lg:col-span-4",
    minH: "min-h-[380px]",
  },
  {
    num: "05 — Comercial",
    tag: "templado",
    titulo: "Proyectos en vidrio templado",
    desc: "Fachadas, mamparas comerciales y divisiones de oficina.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85",
    alt: "Vidrio templado en proyecto comercial",
    span: "lg:col-span-4",
    minH: "min-h-[380px]",
  },
];

export type Feature = {
  icon: "check" | "shield" | "grid" | "verified" | "target";
  titulo: string;
  desc: string;
};

export const FEATURES: Feature[] = [
  {
    icon: "check",
    titulo: "Instalación profesional",
    desc: "Equipo técnico capacitado, herramientas industriales y protocolos de seguridad. Trabajos limpios, puntuales y garantizados.",
  },
  {
    icon: "shield",
    titulo: "Materiales de alta calidad",
    desc: "Vidrio templado certificado, perfilería de aluminio de primera y herrajes de acero inoxidable. Sin atajos en lo que importa.",
  },
  {
    icon: "grid",
    titulo: "Diseño moderno y arquitectónico",
    desc: "Soluciones que dialogan con el espacio: minimalismo, líneas limpias y proporciones cuidadas para resultados de alto nivel.",
  },
  {
    icon: "verified",
    titulo: "Servicio confiable",
    desc: "Cotizaciones claras, plazos respetados y soporte post-instalación. Trabajamos para constructoras, arquitectos y clientes finales.",
  },
  {
    icon: "target",
    titulo: "Atención al detalle",
    desc: "Pulido de cantos, sellos uniformes, tornillería oculta y nivelación milimétrica. El detalle es lo que separa lo bueno de lo excepcional.",
  },
];

export type Proyecto = {
  cat: string;
  titulo: string;
  img: string;
  alt: string;
  span: string;
  rows: string;
};

export const PROYECTOS: Proyecto[] = [
  {
    cat: "Residencial",
    titulo: "Mampara loft · San Isidro",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85",
    alt: "Mampara de baño tipo loft",
    span: "lg:col-span-5",
    rows: "lg:row-span-3",
  },
  {
    cat: "Estructura",
    titulo: "Baranda balcón · Miraflores",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85",
    alt: "Baranda de vidrio en balcón",
    span: "lg:col-span-4",
    rows: "lg:row-span-2",
  },
  {
    cat: "Detalle",
    titulo: "Espejo full · Surco",
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=85",
    alt: "Espejo decorativo de gran formato",
    span: "lg:col-span-3",
    rows: "lg:row-span-2",
  },
  {
    cat: "Aluminio",
    titulo: "Ventanal corredizo · La Molina",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85",
    alt: "Ventana de aluminio en interior",
    span: "lg:col-span-4",
    rows: "lg:row-span-2",
  },
  {
    cat: "Residencial",
    titulo: "Mampara walk-in · Barranco",
    img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=85",
    alt: "Mampara de baño minimalista",
    span: "lg:col-span-3",
    rows: "lg:row-span-3",
  },
  {
    cat: "Comercial",
    titulo: "Fachada corporativa · San Borja",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85",
    alt: "Fachada de edificio en vidrio templado",
    span: "lg:col-span-5",
    rows: "lg:row-span-2",
  },
  {
    cat: "Oficina",
    titulo: "División ejecutiva · Centro",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85",
    alt: "División de oficina en vidrio",
    span: "lg:col-span-4",
    rows: "lg:row-span-2",
  },
];
