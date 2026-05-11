import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from './components/nav.component';
import { HeroComponent } from './components/hero.component';
import { MarqueeComponent } from './components/marquee.component';
import { ManifestoComponent } from './components/manifesto.component';
import { ServicesComponent } from './components/services.component';
import { TeamComponent } from './components/team.component';
import { WorkComponent } from './components/work.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'fut-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavComponent,
    HeroComponent,
    MarqueeComponent,
    ManifestoComponent,
    ServicesComponent,
    TeamComponent,
    WorkComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <fut-nav />
    <main class="relative">
      <fut-hero />
      <fut-marquee />
      <fut-manifesto />
      <fut-services />
      <fut-team />
      <fut-work />
      <fut-testimonials />
      <fut-contact />
    </main>
    <fut-footer />
  `
})
export class App {}
