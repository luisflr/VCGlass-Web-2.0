import { waLink } from '@/app/data';
import { Whatsapp } from '@/app/ui/icons';


export default function WhatsappFloat() {
  return (
    <a
      href={waLink('Hola GlassPeru, quisiera cotizar')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-6 right-6 z-[99] w-[60px] h-[60px] rounded-full grid place-items-center transition-transform duration-[350ms] ease-smooth hover:scale-110 animate-wa-pulse"
      style={{ background: '#25D366' }}
    >
      <Whatsapp className="w-[30px] h-[30px] text-white" />
      <span className="hidden sm:block absolute right-[72px] top-1/2 -translate-y-1/2 translate-x-2 bg-bg-deep text-ink px-4 py-[0.65rem] rounded-[10px] border border-line text-[0.82rem] font-medium whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300 ease-smooth group-hover:opacity-100 group-hover:translate-x-0">
        ¿Cotizamos tu proyecto?
      </span>
    </a>
  );
}
