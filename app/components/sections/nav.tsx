"use client"
import { ArrowRight, BrandMark, Menu } from '@/app/ui/icons';
import { useEffect, useState } from 'react';


export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] pad-x flex items-center justify-between transition-all duration-[450ms] ease-smooth ${
        scrolled
          ? 'py-3 bg-bg-deep/80 backdrop-blur-xl backdrop-saturate-[1.4] border-b border-line'
          : 'py-5 backdrop-blur-0'
      }`}
    >
      <a href="#" className="flex items-center gap-[0.7rem] font-display font-medium text-[1.35rem] tracking-[-0.02em]" aria-label="GlassPeru — Inicio">
        <span className="w-[34px] h-[34px] grid place-items-center" aria-hidden="true">
          <BrandMark className="w-full h-full" />
        </span>
        <span>
          Glass<span className="text-teal">Peru</span>
        </span>
      </a>

      <div className="hidden md:flex gap-10 items-center text-[0.875rem] font-medium tracking-[0.02em]">
        {[
          ['Servicios', '#servicios'],
          ['Calidad', '#porque'],
          ['Proyectos', '#proyectos'],
          ['Contacto', '#contacto'],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="text-ink-mute hover:text-ink transition-colors duration-300 ease-smooth relative group"
          >
            {label}
            <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-teal transition-all duration-[350ms] ease-smooth group-hover:w-full" />
          </a>
        ))}
      </div>

      <a
        href="#contacto"
        className="hidden md:inline-flex items-center gap-2 px-5 py-[0.7rem] border border-line rounded-full text-[0.825rem] font-semibold tracking-[0.05em] hover:bg-teal hover:text-bg-deep hover:border-teal hover:-translate-y-px transition-all duration-[350ms] ease-smooth"
      >
        Cotizar
        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.2} />
      </a>

      <button
        className="md:hidden grid place-items-center w-[42px] h-[42px] border border-line rounded-[10px]"
        aria-label="Menú"
        onClick={() => {
          const target = document.getElementById('contacto');
          target?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <Menu className="w-5 h-5" />
      </button>
    </nav>
  );
}
