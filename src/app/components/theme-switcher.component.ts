import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'fut-theme-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center gap-px p-0.5 rounded-full border border-ink-700/60 bg-ink-900/50 backdrop-blur-sm">

      <button
        (click)="theme.set('dark')"
        title="Dark"
        aria-label="Switch to dark theme"
        class="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200"
        [class]="theme.current() === 'dark'
          ? 'bg-ink-700 text-moss-300'
          : 'text-bone-400 hover:text-bone-100'"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>

      <button
        (click)="theme.set('paper')"
        title="Paper"
        aria-label="Switch to paper theme"
        class="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200"
        [class]="theme.current() === 'paper'
          ? 'bg-ink-700 text-moss-300'
          : 'text-bone-400 hover:text-bone-100'"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
        </svg>
      </button>

      <button
        (click)="theme.set('light')"
        title="Light"
        aria-label="Switch to light theme"
        class="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200"
        [class]="theme.current() === 'light'
          ? 'bg-ink-700 text-moss-300'
          : 'text-bone-400 hover:text-bone-100'"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      </button>

    </div>
  `
})
export class ThemeSwitcherComponent {
  protected readonly theme = inject(ThemeService);
}
