import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  kind: string;
  budget: string;
  message: string;
}

@Component({
  selector: 'fut-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <section id="contact" class="relative py-28 md:py-40 border-t border-ink-700/40 overflow-hidden">
      <!-- Background orb -->
      <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div class="breathe-slow w-225 h-225 rounded-full blur-3xl opacity-30"
             [style.background]="'radial-gradient(circle, var(--color-moss-700) 0%, var(--color-lagoon-900) 40%, transparent 70%)'"></div>
      </div>

      <div class="relative max-w-350 mx-auto px-6 md:px-10">
        <div class="grid md:grid-cols-12 gap-10 md:gap-16">
          <!-- Left: headline + copy + direct details -->
          <div class="md:col-span-6">
            <div class="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-moss-400 mb-4">
              /07 — begin
            </div>
            <h2 class="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-bone-50 font-normal mb-8">
              Got something <br/>
              <em class="italic text-moss-300 font-light">worth building?</em>
            </h2>
            <p class="text-xl text-bone-200 leading-normal max-w-[48ch] mb-12">
              Tell us about it. We reply to every serious enquiry within two business days &mdash;
              usually with specific questions, not a sales deck.
            </p>

            <dl class="space-y-8">
              <div>
                <dt class="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-bone-400 mb-2">
                  Direct
                </dt>
                <dd>
                  <a href="mailto:info@futorine-consulting.net" class="font-display text-2xl md:text-3xl text-bone-50 hover:text-moss-300 transition-colors link-grow">
                    info&#64;futorine-consulting.net
                  </a>
                </dd>
              </div>
              <div>
                <dt class="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-bone-400 mb-2">
                  Studio
                </dt>
                <dd class="text-bone-100 text-lg">
                  Lisbon, Portugal &nbsp;·&nbsp; remote worldwide
                </dd>
              </div>
              <div>
                <dt class="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-bone-400 mb-2">
                  Availability
                </dt>
                <dd class="flex items-center gap-3 text-bone-100">
                  <span class="relative flex h-2 w-2">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss-400 opacity-75"></span>
                    <span class="relative inline-flex h-2 w-2 rounded-full bg-moss-300"></span>
                  </span>
                  Taking new engagements for Q2–Q3 2026
                </dd>
              </div>
            </dl>
          </div>

          <!-- Right: form -->
          <div class="md:col-span-6 md:col-start-7">
            <div class="relative rounded-2xl border border-ink-700 bg-ink-850/70 backdrop-blur-xl p-8 md:p-10">
              @if (!submitted()) {
                <form (submit)="submit($event)" class="space-y-6">
                  <div class="grid sm:grid-cols-2 gap-5">
                    <label class="block">
                      <span class="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-bone-400 mb-2 block">Name</span>
                      <input
                        type="text"
                        name="name"
                        [(ngModel)]="form.name"
                        required
                        class="w-full bg-ink-900 border border-ink-700 rounded-lg px-4 py-3 text-bone-50 focus:border-moss-400 focus:outline-none focus:ring-2 focus:ring-moss-700/40 transition-all"
                      />
                    </label>
                    <label class="block">
                      <span class="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-bone-400 mb-2 block">Email</span>
                      <input
                        type="email"
                        name="email"
                        [(ngModel)]="form.email"
                        required
                        class="w-full bg-ink-900 border border-ink-700 rounded-lg px-4 py-3 text-bone-50 focus:border-moss-400 focus:outline-none focus:ring-2 focus:ring-moss-700/40 transition-all"
                      />
                    </label>
                  </div>

                  <label class="block">
                    <span class="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-bone-400 mb-2 block">What kind of project?</span>
                    <div class="flex flex-wrap gap-2">
                      @for (kind of kinds; track kind) {
                        <button
                          type="button"
                          (click)="setKind(kind)"
                          class="px-4 py-2 rounded-full text-sm border transition-all"
                          [class]="form.kind === kind
                            ? 'bg-moss-400 border-moss-400 text-ink-950'
                            : 'bg-ink-900 border-ink-700 text-bone-200 hover:border-moss-600 hover:text-moss-200'"
                        >
                          {{ kind }}
                        </button>
                      }
                    </div>
                  </label>

                  <label class="block">
                    <span class="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-bone-400 mb-2 block">Budget range (optional)</span>
                    <select
                      name="budget"
                      [(ngModel)]="form.budget"
                      class="w-full bg-ink-900 border border-ink-700 rounded-lg px-4 py-3 text-bone-50 focus:border-moss-400 focus:outline-none focus:ring-2 focus:ring-moss-700/40 transition-all"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="&lt;25k">&lt; &euro;25k</option>
                      <option value="25-75k">&euro;25k – &euro;75k</option>
                      <option value="75-200k">&euro;75k – &euro;200k</option>
                      <option value="200k+">&euro;200k+</option>
                    </select>
                  </label>

                  <label class="block">
                    <span class="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-bone-400 mb-2 block">Tell us what you&rsquo;re building</span>
                    <textarea
                      name="message"
                      rows="5"
                      [(ngModel)]="form.message"
                      required
                      class="w-full bg-ink-900 border border-ink-700 rounded-lg px-4 py-3 text-bone-50 focus:border-moss-400 focus:outline-none focus:ring-2 focus:ring-moss-700/40 transition-all resize-none"
                      placeholder="A paragraph or two is plenty. The more specific, the better."
                    ></textarea>
                  </label>

                  <button
                    type="submit"
                    class="group w-full relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-moss-400 text-ink-950 text-sm uppercase tracking-[0.18em] font-medium hover:bg-moss-300 transition-all"
                  >
                    <span class="absolute inset-0 rounded-full blur-xl bg-moss-400 opacity-40 group-hover:opacity-70 transition-opacity"></span>
                    <span class="relative">Send enquiry</span>
                    <span class="relative transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </button>
                </form>
              } @else {
                <div class="text-center py-12 drift">
                  <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-moss-400/20 border border-moss-400 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-moss-300)" stroke-width="1.5">
                      <path d="M5 12l4 4L19 8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3 class="font-display text-3xl text-bone-50 mb-3">Thank you.</h3>
                  <p class="text-bone-200 max-w-[36ch] mx-auto leading-relaxed">
                    Your message is in. We&rsquo;ll reply within two business days, usually with a few specific questions.
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  protected readonly kinds = ['Web3 / Aztec', 'AI / Agents', 'SaaS', 'Rust desktop app', 'Identity / ZK', 'P2P systems', 'Not sure yet'];
  protected readonly submitted = signal(false);

  protected form: ContactForm = {
    name: '',
    email: '',
    kind: '',
    budget: '',
    message: ''
  };

  protected setKind(kind: string): void {
    this.form.kind = kind;
  }

  protected submit(event: Event): void {
    event.preventDefault();
    // In production, wire this to your backend / form service (e.g. Formspree, Resend, custom).
    console.log('Contact form submission:', this.form);
    this.submitted.set(true);
  }
}
