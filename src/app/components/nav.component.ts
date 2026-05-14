import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ThemeSwitcherComponent } from './theme-switcher.component';

@Component({
  selector: 'fut-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemeSwitcherComponent],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      [class]="scrolled() ? 'backdrop-blur-xl bg-ink-900/75 border-b border-ink-700/60' : 'bg-transparent'"
    >
      <div class="max-w-350 mx-auto px-4 sm:px-6 lg:px-10 py-4 lg:py-5 flex items-center justify-between gap-3">
        <a href="#top" class="flex min-w-0 flex-1 items-center gap-2.5 group pr-3">
          <span class="relative inline-block w-7 h-7">
            <span class="absolute inset-0 rounded-full bg-moss-400 blur-sm opacity-60 group-hover:opacity-90 transition-opacity"></span>
            <span class="absolute inset-0.75 rounded-full bg-linear-to-br from-moss-300 to-lagoon-500"></span>
            <span class="absolute inset-2.5 rounded-full bg-bone-50"></span>
          </span>
          <span class="truncate font-display text-[1.02rem] sm:text-[1.2rem] lg:text-[1.35rem] tracking-tight text-bone-50 font-medium">
            futorine <span class="text-bone-400 font-normal">consulting</span>
          </span>
        </a>

        <nav class="hidden lg:flex items-center gap-10 text-[0.82rem] uppercase tracking-[0.2em] text-bone-200">
          <a href="#services" class="link-grow hover:text-moss-300 transition-colors">Services</a>
          <a href="#team" class="link-grow hover:text-moss-300 transition-colors">Studio</a>
          <a href="#work" class="link-grow hover:text-moss-300 transition-colors">Work</a>
          <a href="#contact" class="link-grow hover:text-moss-300 transition-colors">Contact</a>
        </nav>

        <a
          href="#contact"
          class="group hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-moss-700 bg-ink-850/40 text-[0.82rem] uppercase tracking-[0.18em] text-moss-200 hover:bg-moss-900/40 hover:border-moss-400 hover:text-moss-100 transition-all"
        >
          Start a project
          <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </a>

        <div class="flex shrink-0 items-center gap-2">
          <div class="hidden lg:block">
            <fut-theme-switcher />
          </div>

          <button
            (click)="toggleMobile()"
            class="lg:hidden p-2 text-bone-100"
            [attr.aria-expanded]="mobileOpen()"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              @if (!mobileOpen()) {
                <path d="M3 7h18M3 12h18M3 17h18" stroke-linecap="round" />
              } @else {
                <path d="M5 5l14 14M19 5l-14 14" stroke-linecap="round" />
              }
            </svg>
          </button>
        </div>
      </div>

      @if (mobileOpen()) {
        <nav class="lg:hidden border-t border-ink-700 bg-ink-900/95 backdrop-blur-xl">
          <div class="px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-[0.2em] text-bone-200">
            <div class="pb-1">
              <fut-theme-switcher />
            </div>
            <a href="#services" (click)="close()">Services</a>
            <a href="#team" (click)="close()">Studio</a>
            <a href="#work" (click)="close()">Work</a>
            <a href="#contact" (click)="close()">Contact</a>
          </div>
        </nav>
      }
    </header>
  `
})
export class NavComponent {
  protected readonly scrolled = signal(false);
  protected readonly mobileOpen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 40);
      }, { passive: true });
    }
  }

  protected toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  protected close(): void {
    this.mobileOpen.set(false);
  }
}
