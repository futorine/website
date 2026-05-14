import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'paper' | 'light';

const THEMES: Theme[] = ['dark', 'paper', 'light'];
const STORAGE_KEY = 'fut-theme';
const META_COLORS: Record<Theme, string> = {
  dark: '#0a1312',
  paper: '#f5edd8',
  light: '#f9fafb',
};

function resolvePreferredTheme(): Theme {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveInitialTheme(): Theme {
  if (typeof localStorage === 'undefined') return 'dark';
  const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (saved && THEMES.includes(saved)) return saved;
  return resolvePreferredTheme();
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly current = signal<Theme>(resolveInitialTheme());

  constructor() {
    if (typeof document !== 'undefined') {
      this.applyTheme(this.current());
    }
  }

  set(theme: Theme): void {
    this.current.set(theme);
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute('content', META_COLORS[theme]);
  }
}
