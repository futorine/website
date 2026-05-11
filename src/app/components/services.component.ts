import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SERVICES, Service } from '../data/content';

@Component({
  selector: 'fut-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="services" class="relative py-28 md:py-40 border-t border-ink-700/40">
      <div class="max-w-350 mx-auto px-6 md:px-10">
        <!-- Section header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div class="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-moss-400 mb-4">
              /03 — services
            </div>
            <h2 class="font-display text-5xl md:text-7xl leading-[0.98] tracking-tight text-bone-50 font-normal max-w-[14ch]">
              Nine disciplines. <em class="italic text-moss-300 font-light">One team.</em>
            </h2>
          </div>
          <p class="text-bone-200 text-lg max-w-[36ch] md:text-right">
            We engage as a studio of record delivery &mdash; not a pool of contractors.
            Engagements are scoped for outcomes.
          </p>
        </div>

        <!-- Services list — accordion/list hybrid -->
        <div class="divide-y divide-ink-700/70 border-y border-ink-700/70">
          @for (service of services; track service.id) {
            <button
              type="button"
              (click)="toggle(service.id)"
              class="w-full text-left py-8 md:py-10 group relative block transition-colors duration-300"
              [class.bg-transparent]="active() !== service.id"
              [attr.aria-expanded]="active() === service.id"
            >
              <div class="grid md:grid-cols-12 gap-6 items-start">
                <!-- Title + tagline -->
                <div class="md:col-span-6">
                  <div class="flex items-start gap-4">
                    <span
                      class="inline-flex shrink-0 items-center justify-center w-10 h-10 rounded-full border transition-all duration-500"
                      [class]="active() === service.id
                        ? 'bg-moss-400 border-moss-400 text-ink-950'
                        : 'border-ink-700 text-bone-200 group-hover:border-moss-400 group-hover:text-moss-300'"
                    >
                      <span class="font-mono text-[0.82rem] font-semibold tracking-[-0.12em]">=&gt;</span>
                    </span>
                    <h3
                      class="service-title pt-1 font-display text-3xl md:text-[2.75rem] leading-none tracking-tight transition-all duration-500"
                      [class]="active() === service.id ? 'text-moss-300 italic' : 'service-title-idle text-bone-50 group-hover:text-moss-300 group-hover:translate-x-1'"
                    >
                      {{ service.title }}
                    </h3>
                  </div>
                  <p class="mt-3 text-bone-300 text-base md:text-lg">{{ service.tagline }}</p>
                </div>

                <!-- Expanded body -->
                <div class="md:col-span-5 md:col-start-8 transition-all duration-500 overflow-hidden"
                     [class]="active() === service.id ? 'max-h-100 opacity-100' : 'max-h-0 md:max-h-25 opacity-70'">
                  @if (active() === service.id) {
                    <div class="space-y-4 drift">
                      <p class="text-bone-100 leading-relaxed">{{ service.body }}</p>
                      <ul class="flex flex-wrap gap-2">
                        @for (cap of service.capabilities; track cap) {
                          <li class="text-[0.78rem] font-mono px-3 py-1.5 rounded-full border border-lagoon-700 bg-ink-850 text-lagoon-200">
                            {{ cap }}
                          </li>
                        }
                      </ul>
                    </div>
                  } @else {
                    <p class="text-bone-400 text-sm hidden md:block truncate">{{ service.body }}</p>
                  }
                </div>

              </div>
            </button>
          }
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  protected readonly services: Service[] = SERVICES;
  protected readonly active = signal<string | null>(SERVICES[0].id);

  protected toggle(id: string): void {
    this.active.update((current) => (current === id ? null : id));
  }
}
