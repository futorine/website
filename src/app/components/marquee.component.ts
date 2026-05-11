import { ChangeDetectionStrategy, Component } from '@angular/core';

type MarqueePanel = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  imageClass: string;
};

@Component({
  selector: 'fut-marquee',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative py-8 md:py-10 border-y border-ink-700/60 bg-ink-850/40 overflow-hidden">
      <div class="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-10 bg-linear-to-r from-ink-900 via-ink-900/70 to-transparent"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-10 bg-linear-to-l from-ink-900 via-ink-900/70 to-transparent"></div>

      <div class="flex w-max marquee-track">
        @for (track of [0, 1]; track track) {
          <div class="flex items-center gap-4 md:gap-6 pr-4 md:pr-6 shrink-0">
            @for (panel of panels; track panel.title) {
              <article class="group relative w-64 md:w-80 h-40 md:h-48 shrink-0 overflow-hidden rounded-[1.75rem] border border-ink-700/80 bg-linear-to-br from-ink-900 via-ink-850 to-moss-900/20">
                <div class="absolute inset-0 bg-radial from-moss-400/18 via-transparent to-transparent opacity-70"></div>
                <img
                  [class]="panel.imageClass"
                  [src]="panel.src"
                  [alt]="panel.alt"
                  loading="lazy"
                  decoding="async"
                >
                <div class="absolute inset-0 bg-linear-to-t from-black/82 via-black/46 to-transparent"></div>

                <div class="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <div class="max-w-[86%] rounded-2xl border border-white/12 bg-black/44 px-4 py-3 backdrop-blur-sm">
                    <div class="font-mono text-[0.58rem] md:text-[0.64rem] uppercase tracking-[0.28em] text-[#74e6b2] mb-1.5">
                      {{ panel.eyebrow }}
                    </div>
                    <div class="font-display text-lg md:text-[1.45rem] leading-[0.95] tracking-tight text-[#f6eedc] italic">
                      {{ panel.title }}
                    </div>
                  </div>
                </div>

                <div class="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-lagoon-300/90 ring-4 ring-lagoon-300/10"></div>
              </article>
            }
          </div>
        }
      </div>
    </section>
  `
})
export class MarqueeComponent {
  protected readonly panels: MarqueePanel[] = [
    {
      src: 'public/1-cube.png',
      alt: 'Tree of life cube artwork',
      eyebrow: 'Protocol systems',
      title: 'Cryptographic core',
      imageClass: 'absolute inset-0 h-full w-full object-contain p-5 md:p-6 scale-110 opacity-90'
    },
    {
      src: 'public/2-icosahedron.png',
      alt: 'Icosahedron artwork',
      eyebrow: 'Founder-led',
      title: 'Built by seniors',
      imageClass: 'absolute inset-0 h-full w-full object-cover object-center sepia-[0.15] contrast-[1.02] saturate-[0.9]'
    },
    {
      src: 'public/3-octahedron.png',
      alt: 'Octahedron artwork',
      eyebrow: 'Identity',
      title: 'Zero-knowledge rails',
      imageClass: 'absolute inset-0 h-full w-full object-contain p-4 md:p-5 scale-125 rotate-6 opacity-85'
    },
    {
      src: 'public/4-dodecahedron.png',
      alt: 'Dodecahedron artwork',
      eyebrow: 'Delivery',
      title: 'Architecture that ships',
      imageClass: 'absolute inset-0 h-full w-full object-cover object-top sepia-[0.1] contrast-[1.04] saturate-[0.88] scale-105'
    },
    {
      src: 'public/5-ascension.png',
      alt: 'Ascension artwork',
      eyebrow: 'P2P systems',
      title: 'Offline-first thinking',
      imageClass: 'absolute inset-0 h-full w-full object-contain p-6 md:p-7 scale-[1.35] -rotate-4 opacity-80'
    },
    {
      src: 'public/6-divini.png',
      alt: 'Divini artwork',
      eyebrow: 'Product',
      title: 'Expert technical judgment',
      imageClass: 'absolute inset-0 h-full w-full object-cover object-center sepia-[0.12] brightness-[0.92] contrast-[1.05]'
    }
  ];
}
