import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TESTIMONIALS, Testimonial } from '../data/content';

@Component({
  selector: 'fut-testimonials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative py-28 md:py-40 border-t border-ink-700/40 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 opacity-[0.04]"
           [style.background-image]="'linear-gradient(var(--color-lagoon-400) 1px, transparent 1px)'"
           [style.background-size]="'100% 80px'"></div>

      <div class="relative max-w-350 mx-auto px-6 md:px-10">
        <div class="mb-16 md:mb-24 max-w-[60ch]">
          <div class="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-moss-400 mb-4">
            /06 — signal
          </div>
          <h2 class="font-display text-4xl md:text-6xl leading-none tracking-tight text-bone-50 font-normal">
            From people who&rsquo;ve <em class="italic text-lagoon-300 font-light">worked with us.</em>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          @for (t of testimonials; track t.author; let i = $index) {
            <figure
              class="relative rounded-2xl border border-ink-700 bg-ink-850/50 p-8 md:p-10 hover:border-moss-700 transition-colors"
              [class.md:translate-y-8]="i % 2 === 1"
            >
              <div class="absolute top-5 right-6 font-display text-6xl md:text-7xl leading-none text-moss-900 select-none" aria-hidden="true">
                &ldquo;
              </div>

              <blockquote class="relative z-10">
                <p class="font-display text-xl md:text-2xl leading-[1.4] text-bone-50 italic font-light">
                  {{ t.quote }}
                </p>
              </blockquote>

              <figcaption class="relative mt-8 pt-6 border-t border-ink-700/70 flex items-center gap-4">
                <div class="w-11 h-11 rounded-full bg-linear-to-br from-lagoon-600 to-moss-700 flex items-center justify-center font-mono text-xs text-bone-50">
                  {{ initials(t.author) }}
                </div>
                <div>
                  <div class="text-bone-100 font-medium">{{ t.author }}</div>
                  <div class="text-[0.82rem] text-bone-400 font-mono uppercase tracking-[0.15em]">{{ t.role }}</div>
                </div>
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  protected readonly testimonials: Testimonial[] = TESTIMONIALS;

  protected initials(name: string): string {
    return name
      .split(' ')
      .map((p) => p[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}
