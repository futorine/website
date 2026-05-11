import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TEAM, TeamMember } from '../data/content';

@Component({
  selector: 'fut-team',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="team" class="relative py-28 md:py-40 border-t border-ink-700/40">
      <!-- Background accent -->
      <div class="pointer-events-none absolute top-20 right-0 w-125 h-125 rounded-full blur-3xl opacity-30"
           [style.background]="'radial-gradient(circle, var(--color-lagoon-800) 0%, transparent 60%)'"></div>

      <div class="relative max-w-350 mx-auto px-6 md:px-10">
        <div class="grid md:grid-cols-12 gap-8 mb-20">
          <div class="md:col-span-7">
            <div class="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-moss-400 mb-4">
              /04 — studio
            </div>
            <h2 class="font-display text-5xl md:text-7xl leading-[0.98] tracking-tight text-bone-50 font-normal">
              A principal, and a <em class="italic text-lagoon-300 font-light">network</em> of people we trust.
            </h2>
          </div>
          <div class="md:col-span-4 md:col-start-9 flex items-end">
            <p class="text-bone-200 leading-relaxed">
              Futorine Consulting is founder-led. Engagements are assembled from a small, vetted network of senior engineers and designers we have worked with on production systems. <span class="text-moss-300">No bait-and-switch, no juniors disguised as seniors.</span>
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-12 gap-6">
          <!-- Principal card -->
          <article class="md:col-span-5 md:row-span-2 relative rounded-2xl border border-moss-700 bg-linear-to-br from-ink-850 via-ink-850 to-moss-900/40 p-8 md:p-10 overflow-hidden group">
            <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity"
                 [style.background]="'radial-gradient(circle, var(--color-moss-600) 0%, transparent 65%)'"></div>

            <div class="relative">
              <div class="flex items-start justify-between mb-10">
                <div class="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-moss-300">
                  {{ principal.role }}
                </div>
                <span class="founder-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-moss-900/80 border border-moss-700 text-moss-200 text-[0.68rem] uppercase tracking-[0.2em]">
                  <span class="w-1.5 h-1.5 rounded-full bg-moss-300"></span>
                  Founder
                </span>
              </div>

              <div class="flex items-center gap-5 mb-8">
                <div class="w-20 h-20 rounded-full overflow-hidden ring-2 ring-moss-700 relative z-10 isolate">
                  <img src="public/tcal_consultant.png" alt="{{ principal.initials }}" class="block w-full h-full object-cover">
                </div>
                <div>
                  <h3 class="font-display text-3xl text-bone-50 leading-tight">{{ principal.name }}</h3>
                  <p class="text-bone-300 text-sm mt-1">{{ principal.focus }}</p>
                </div>
              </div>

              <p class="text-bone-100 leading-relaxed text-[1.02rem] mb-8 max-w-[42ch]">
                {{ principal.bio }}
              </p>

              <div class="flex flex-wrap gap-2 mb-10">
                @for (tag of principal.tags; track tag) {
                  <span class="text-[0.72rem] font-mono px-2.5 py-1 rounded-full border border-ink-700 bg-ink-900/50 text-bone-200">
                    {{ tag }}
                  </span>
                }
              </div>

              <dl class="grid grid-cols-3 gap-4 pt-8 border-t border-ink-700">
                <div>
                  <dt class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-bone-400 mb-2">Shipped</dt>
                  <dd class="font-display text-3xl text-moss-300">20<span class="text-xl">yrs</span></dd>
                </div>
                <div>
                  <dt class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-bone-400 mb-2">Hackathons</dt>
                  <dd class="font-display text-3xl text-lagoon-300">16+</dd>
                </div>
                <div>
                  <dt class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-bone-400 mb-2">wins</dt>
                  <dd class="font-display text-3xl text-moss-200">4</dd>
                </div>
              </dl>
            </div>
          </article>

          <!-- Network cards -->
          @for (member of network; track member.role; let i = $index) {
            <article class="md:col-span-3 rounded-2xl border border-ink-700 bg-ink-850/60 p-6 hover:border-lagoon-700 hover:bg-ink-800/60 transition-all group">
              <div class="flex items-start justify-between mb-6">
                <div class="w-12 h-12 rounded-full border border-dashed border-lagoon-700 flex items-center justify-center font-mono text-xs text-lagoon-300">
                  {{ member.initials }}
                </div>
                <span class="font-mono text-[0.64rem] uppercase tracking-[0.25em] text-bone-400">
                  Network
                </span>
              </div>
              <div class="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-moss-300 mb-2">
                {{ shortRole(member.role) }}
              </div>
              <h3 class="font-display text-xl text-bone-50 leading-tight mb-3">
                {{ member.focus }}
              </h3>
              <p class="text-[0.9rem] text-bone-200 leading-relaxed mb-5">
                {{ member.bio }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                @for (tag of member.tags; track tag) {
                  <span class="text-[0.66rem] font-mono px-2 py-0.5 rounded border border-ink-700 text-bone-300">
                    {{ tag }}
                  </span>
                }
              </div>
            </article>
          }
        </div>

        <p class="mt-10 font-mono text-[0.78rem] text-bone-400 max-w-[60ch] leading-relaxed">
          * Network members are independent professionals engaged per project under NDA.
            Exact team composition is shared during scoping.
        </p>
      </div>
    </section>
  `
})
export class TeamComponent {
  protected readonly principal: TeamMember = TEAM.find((t) => t.isPrincipal)!;
  protected readonly network: TeamMember[] = TEAM.filter((t) => !t.isPrincipal);

  protected shortRole(role: string): string {
    return role.replace('Network — ', '');
  }
}
