import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HolonBannerComponent } from './holon-banner.component';

@Component({
  selector: 'fut-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HolonBannerComponent],
  template: `
    <section id="top" class="relative min-h-svh overflow-hidden pt-28 pb-32">
      <!-- Ambient bioluminescent glows -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="breathe absolute -top-40 -left-40 w-150 h-150 rounded-full blur-3xl"
             [style.background]="'radial-gradient(circle, var(--color-moss-700) 0%, transparent 65%)'"></div>
        <div class="breathe-slow absolute top-[30%] -right-40 w-175 h-175 rounded-full blur-3xl"
             [style.background]="'radial-gradient(circle, var(--color-lagoon-800) 0%, transparent 60%)'"></div>
        <div class="breathe absolute bottom-0 left-[30%] w-125 h-125 rounded-full blur-3xl"
             [style.background]="'radial-gradient(circle, var(--color-moss-900) 0%, transparent 60%)'"></div>
      </div>

      <!-- Spores -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        @for (s of spores; track s.id) {
          <span
            class="spore absolute rounded-full"
            [style.left]="s.left + '%'"
            [style.top]="s.top + '%'"
            [style.width]="s.size + 'px'"
            [style.height]="s.size + 'px'"
            [style.background]="s.color"
            [style.boxShadow]="'0 0 ' + (s.size * 3) + 'px ' + s.color"
            [style.animation-delay]="s.delay + 's'"
            [style.animation-duration]="s.duration + 's'"
            [style.--dx]="s.dx + 'px'"
            [style.--dy]="s.dy + 'px'"
          ></span>
        }
      </div>

      <!-- Holon background motif -->
      <div class="pointer-events-none absolute inset-0">
        <fut-holon-banner />
      </div>

      <div class="relative max-w-350 mx-auto px-6 md:px-10">
        <!-- Top meta line -->
        <div class="drift drift-1 flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.35em] text-moss-300 mb-10 md:mb-14">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss-400 opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-moss-300"></span>
          </span>
          <span class="hero-meta-gold">Studio — Lisbon &amp; remote &nbsp;·&nbsp; Available Q2 2026</span>
        </div>

        <!-- Headline — asymmetric, mixed serif italic -->
        <h1 class="drift drift-2 font-display text-bone-50 font-normal leading-[0.95] tracking-[-0.02em] text-[3.4rem] sm:text-[4.8rem] md:text-[6.4rem] lg:text-[7.8rem]">
          <span class="block">We build</span>
          <span class="block pl-[8%] md:pl-[14%]">
            <em class="italic font-light text-moss-300">professional</em>
          </span>
          <span class="block">systems</span>
          <span class="block pl-[4%] md:pl-[7%]">
             <em class="text-[2.4rem] italic font-light text-lagoon-300">[privacy, intelligence, Cryptography]</em>
          </span>
          <span class="block pl-[16%] md:pl-[22%]"></span>
        </h1>

        <!-- Intro paragraph + CTA, right-aligned -->
        <div class="drift drift-3 mt-16 md:mt-20 grid md:grid-cols-12 gap-8">
          <div class="md:col-span-5 md:col-start-7">
            <p class="text-bone-200 text-lg md:text-xl leading-[1.55] max-w-[46ch]">
              Futorine Consulting is a protocol-engineering studio.
              We design and ship
              <span class="text-bone-50">Web3, AI and SaaS infrastructure</span>
              &mdash; wallets and credential vaults, ZKP libraries and SDKs, decentralized identity solutions,
              peer-to-peer systems, and knowledge graphs for founders who refuse shortcuts.
            </p>

            <div class="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                class="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-moss-400 text-ink-950 text-sm uppercase tracking-[0.18em] font-medium hover:bg-moss-300 transition-all"
              >
                <span class="absolute inset-0 rounded-full blur-xl bg-moss-400 opacity-40 group-hover:opacity-70 transition-opacity"></span>
                <span class="relative">Start a project</span>
                <span class="relative transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
              <a
                href="#work"
                class="inline-flex items-center gap-2 px-6 py-4 text-sm uppercase tracking-[0.18em] text-bone-200 hover:text-moss-300 transition-colors link-grow"
              >
                See selected work
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll cue -->
      <div class="absolute bottom-8 left-6 md:left-10 text-[0.7rem] uppercase tracking-[0.35em] text-bone-400 flex items-center gap-3">
        <span class="w-16 h-px bg-bone-500"></span>
        <span>scroll</span>
      </div>
      <div class="absolute bottom-8 right-6 md:right-10 font-mono text-[0.7rem] text-bone-400">
        /01 — arrival
      </div>
    </section>
  `
})
export class HeroComponent {
  protected readonly spores = Array.from({ length: 18 }).map((_, i) => {
    const hash = (i * 2654435761) >>> 0;
    const rand = (n: number): number => ((hash * (n + 1)) % 10000) / 10000;
    const colors = ['#6aeaad', '#4deccf', '#2dd489', '#1fd4b4'];
    return {
      id: i,
      left: rand(1) * 100,
      top: 20 + rand(2) * 70,
      size: 1 + rand(3) * 3,
      color: colors[i % colors.length],
      delay: rand(4) * 12,
      duration: 10 + rand(5) * 14,
      dx: (rand(6) - 0.5) * 300,
      dy: -100 - rand(7) * 300
    };
  });
}
