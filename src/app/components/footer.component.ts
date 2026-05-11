import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fut-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="relative border-t border-ink-700/60 bg-footer py-12 md:py-16">
      <div class="max-w-350 mx-auto px-6 md:px-10">
        <div class="grid md:grid-cols-12 gap-10 md:gap-6">
          <!-- Brand -->
          <div class="md:col-span-5">
            <a href="#top" class="flex items-center gap-2.5 group mb-5">
              <span class="relative inline-block w-7 h-7">
                <span class="absolute inset-0 rounded-full bg-moss-400 blur-sm opacity-60"></span>
                <span class="absolute inset-0.75 rounded-full bg-linear-to-br from-moss-300 to-lagoon-500"></span>
                <span class="absolute inset-2.5 rounded-full bg-bone-50"></span>
              </span>
              <span class="font-display text-[1.35rem] text-bone-50 font-medium">futorine <span class="text-bone-400 font-normal">consulting</span></span>
            </a>
            <p class="text-bone-300 max-w-[42ch] leading-relaxed text-[0.95rem]">
              Futorine Consulting is a protocol-engineering studio for Web3, AI, and SaaS infrastructure.
              Rust-native by default. Founded in Portugal, working globally.
            </p>
          </div>

          <!-- Columns -->
          <div class="md:col-span-2 md:col-start-7">
            <div class="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-bone-400 mb-4">Studio</div>
            <ul class="space-y-2.5 text-bone-200 text-[0.92rem]">
              <li><a href="#services" class="hover:text-moss-300 transition-colors">Services</a></li>
              <li><a href="#team" class="hover:text-moss-300 transition-colors">Team</a></li>
              <li><a href="#work" class="hover:text-moss-300 transition-colors">Work</a></li>
              <li><a href="#contact" class="hover:text-moss-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div class="md:col-span-2">
            <div class="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-bone-400 mb-4">Elsewhere</div>
            <ul class="space-y-2.5 text-bone-200 text-[0.92rem]">
              <li><a href="#" class="hover:text-moss-300 transition-colors">GitHub</a></li>
              <li><a href="#" class="hover:text-moss-300 transition-colors">LinkedIn</a></li>
              <li><a href="#" class="hover:text-moss-300 transition-colors">Mirror</a></li>
              <li><a href="#" class="hover:text-moss-300 transition-colors">Bluesky</a></li>
            </ul>
          </div>

          <div class="md:col-span-2">
            <div class="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-bone-400 mb-4">Contact</div>
            <ul class="space-y-2.5 text-bone-200 text-[0.92rem]">
              <li><a href="mailto:info&#64;futorine.com" class="hover:text-moss-300 transition-colors">info&#64;futorine.com</a></li>
              <li class="text-bone-400">Lisbon, Portugal</li>
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="mt-16 pt-8 border-t border-ink-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="font-mono text-[0.72rem] text-bone-400">
            &copy; {{ year }} Futorine Consulting. Built with care, shipped with proofs.
          </div>
          <div class="font-mono text-[0.72rem] text-bone-400 flex items-center gap-6">
            <a href="#" class="hover:text-moss-300 transition-colors">Privacy</a>
            <a href="#" class="hover:text-moss-300 transition-colors">Imprint</a>
            <span class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-moss-400 breathe"></span>
              <span>systems online</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}
