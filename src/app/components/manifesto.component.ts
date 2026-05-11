import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fut-manifesto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative py-28 md:py-40">
      <div class="max-w-350 mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div class="md:col-span-4">
          <div class="sticky top-32">
            <div class="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-moss-400 mb-4">
              /02 — approach
            </div>
            <h2 class="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-bone-50 font-normal">
              A quiet studio <br/>
              <em class="italic text-lagoon-300 font-light">for loud systems.</em>
            </h2>
          </div>
        </div>

        <div class="md:col-span-7 md:col-start-6 space-y-10 text-bone-100">
          <p class="text-xl md:text-2xl leading-[1.45] text-bone-50">
            Most of what calls itself &ldquo;Web3&rdquo; is a veneer of tokens over bad software.
            Most of what calls itself &ldquo;AI&rdquo; is a wrapper over a model nobody understands.
            We build the opposite &mdash;
            <span class="text-moss-300">systems that earn trust by construction,</span>
            not by marketing.
          </p>

          <div class="grid sm:grid-cols-2 gap-8 pt-6">
            @for (tenet of tenets; track tenet.title) {
              <div class="border-l border-ink-700 pl-5 hover:border-moss-400 transition-colors">
                <div class="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-bone-400 mb-2">
                  — {{ tenet.num }}
                </div>
                <h3 class="font-display text-xl text-bone-50 mb-2">{{ tenet.title }}</h3>
                <p class="text-[0.95rem] leading-relaxed text-bone-200">{{ tenet.body }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class ManifestoComponent {
  protected readonly tenets = [
    {
      num: '01',
      title: 'Correctness first',
      body: 'Cryptography, finance, identity — these are domains where "mostly works" is a liability. Types, tests, proofs.'
    },
    {
      num: '02',
      title: 'Small by design',
      body: 'We stay small so we stay sharp. No pyramid of juniors, no outsourced execution. Senior hands on every line.'
    },
    {
      num: '03',
      title: 'Open by default',
      body: 'We contribute upstream and prefer open-source primitives. Your stack should not live or die by a single vendor.'
    },
    {
      num: '04',
      title: 'Regenerative tech',
      body: 'We choose work that leaves the commons better than we found it. Mission-driven projects get priority and better rates.'
    }
  ];
}
