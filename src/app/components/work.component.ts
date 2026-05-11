import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WORK, WorkItem } from '../data/content';

@Component({
  selector: 'fut-work',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="work" class="relative py-28 md:py-40 border-t border-ink-700/40">
      <div class="pointer-events-none absolute top-40 left-0 w-150 h-150 rounded-full blur-3xl opacity-20"
           [style.background]="'radial-gradient(circle, var(--color-moss-700) 0%, transparent 60%)'"></div>

      <div class="relative max-w-350 mx-auto px-6 md:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div class="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-moss-400 mb-4">
              /05 — selected work
            </div>
            <h2 class="font-display text-5xl md:text-7xl leading-[0.98] tracking-tight text-bone-50 font-normal max-w-[16ch]">
              Things we&rsquo;ve <em class="italic text-moss-300 font-light">been working on or shipped</em> <br/>
            </h2>
          </div>
          <p class="text-bone-200 text-lg max-w-[32ch] md:text-right">
            A selection &mdash; client work is usually under NDA.
            Happy to share case studies on request.
          </p>
        </div>

        <!-- Work grid -->
        <div class="grid md:grid-cols-2 gap-4 md:gap-6">
          @for (item of work; track item.title; let i = $index) {
            <article
              class="relative group rounded-2xl border border-ink-700 bg-ink-850/50 p-7 md:p-9 overflow-hidden hover:border-moss-700 transition-all duration-500"
              [class.md:col-span-2]="i === 0"
            >
              <!-- Hover glow -->
              <div class="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                   [style.background]="'radial-gradient(circle, var(--color-lagoon-600) 0%, transparent 65%)'"></div>

              <div class="relative flex flex-col h-full">
                <!-- Top meta row -->
                <div class="flex items-start justify-between mb-8">
                  <div class="flex items-center gap-3">
                    <span class="font-mono text-sm text-bone-400">{{ item.year }}</span>
                    <span class="w-8 h-px bg-ink-700"></span>
                    <span class="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-moss-300">
                      {{ item.kind }}
                    </span>
                  </div>
                  @if (item.highlight) {
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lagoon-900/60 border border-lagoon-700 text-lagoon-200 text-[0.66rem] uppercase tracking-[0.2em] highlight-badge">
                      {{ item.highlight }}
                    </span>
                  }
                </div>

                <!-- Title -->
                <h3
                  class="font-display text-bone-50 leading-[1.02] tracking-tight mb-5 group-hover:text-moss-200 transition-colors"
                  [class]="i === 0 ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'"
                >
                  {{ item.title }}
                </h3>

                <!-- Summary -->
                <p class="text-bone-200 leading-relaxed mb-8 max-w-[52ch]"
                   [class.md:text-lg]="i === 0">
                  {{ item.summary }}
                </p>

                <!-- Stack -->
                <div class="mt-auto flex flex-wrap gap-2 pt-6 border-t border-ink-700/70">
                  @for (tech of item.stack; track tech) {
                    <span class="text-[0.72rem] font-mono px-2.5 py-1 rounded-full border border-ink-700 bg-ink-900/60 text-bone-300">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        <!-- Pedigree strip -->
        <div class="mt-16 md:mt-24 pt-10 border-t border-ink-700/40">
          <div class="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-bone-400 mb-8">
            Partnerships &amp; join us
          </div>
          <div class="flex flex-wrap items-center gap-x-10 gap-y-5">
            @for (org of pastOrgs; track org) {
              <span class="font-display text-xl md:text-2xl text-bone-300 hover:text-moss-300 transition-colors cursor-default">
                {{ org }}
              </span>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class WorkComponent {
  protected readonly work: WorkItem[] = WORK;
  protected readonly pastOrgs = [
  ];
}
