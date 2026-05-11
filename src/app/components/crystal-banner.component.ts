import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * A pure-SVG background motif combining a hexagonal water crystal
 * with architectural scaffolding (isometric grid + structural cube).
 *
 * Crystal = natural order. Architecture = intentional order.
 * Together: systems that grow from principles.
 *
 * NOTE: Uses hardcoded hex values matching the design tokens because
 * SVG `stroke`/`fill` presentation attributes do not resolve CSS custom
 * properties from :root — only inline `style="stroke: var(...)"` would,
 * and that's noisier than just referencing the same tokens as hex here.
 *
 * Token map (keep in sync with styles.css):
 *   --color-moss-300   = #6aeaad   (crystal lines, bright)
 *   --color-moss-400   = #2dd489   (structural cube)
 *   --color-lagoon-300 = #4deccf   (annotations)
 *   --color-lagoon-400 = #1fd4b4   (grid lines)
 *   --color-lagoon-200 = #8ff8e3   (crystal hex frames)
 */
@Component({
  selector: 'fut-crystal-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:block;position:absolute;inset:0' },
  template: `
    <svg
      class="size-full"
      style="mask-image:radial-gradient(ellipse 65% 75% at 50% 50%,black 25%,transparent 85%);-webkit-mask-image:radial-gradient(ellipse 65% 75% at 50% 50%,black 25%,transparent 85%)"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <symbol id="arm" viewBox="-200 -200 400 400">
          <line x1="0" y1="0" x2="0" y2="-180" stroke="currentColor" stroke-width="1.2"/>
          <g stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round">
            <line x1="0" y1="-40"  x2="-22" y2="-60"/>
            <line x1="0" y1="-40"  x2="22"  y2="-60"/>
            <line x1="0" y1="-80"  x2="-36" y2="-110"/>
            <line x1="0" y1="-80"  x2="36"  y2="-110"/>
            <line x1="0" y1="-120" x2="-26" y2="-144"/>
            <line x1="0" y1="-120" x2="26"  y2="-144"/>
            <line x1="0" y1="-150" x2="-14" y2="-168"/>
            <line x1="0" y1="-150" x2="14"  y2="-168"/>
          </g>
          <g stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.85">
            <line x1="-22" y1="-60"  x2="-28" y2="-72"/>
            <line x1="22"  y1="-60"  x2="28"  y2="-72"/>
            <line x1="-36" y1="-110" x2="-44" y2="-120"/>
            <line x1="36"  y1="-110" x2="44"  y2="-120"/>
            <line x1="-36" y1="-110" x2="-42" y2="-100"/>
            <line x1="36"  y1="-110" x2="42"  y2="-100"/>
          </g>
          <polygon
            points="0,-188 6,-181 6,-167 0,-160 -6,-167 -6,-181"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
          />
          <circle cx="0" cy="-80" r="2" fill="currentColor"/>
          <circle cx="0" cy="-120" r="1.6" fill="currentColor"/>
        </symbol>
      </defs>

      <g
        stroke="#1fd4b4"
        stroke-width="0.6"
        fill="none"
        opacity="0.45"
        transform="translate(600 420)"
      >
        @for (n of gridLines; track n) {
          <line
            [attr.x1]="-800"
            [attr.y1]="n * 40"
            [attr.x2]="800"
            [attr.y2]="n * 40 + 462"
          />
        }
        @for (n of gridLines; track n) {
          <line
            [attr.x1]="-800"
            [attr.y1]="n * 40 + 462"
            [attr.x2]="800"
            [attr.y2]="n * 40"
          />
        }
        @for (n of gridLines; track n) {
          <line
            [attr.x1]="n * 60"
            y1="-400"
            [attr.x2]="n * 60"
            y2="400"
            stroke-width="0.4"
            opacity="0.6"
          />
        }

        <g stroke-width="1.6" opacity="0.95" stroke="#2dd489">
          <polygon points="0,-150 130,-75 0,0 -130,-75" fill="none"/>
          <polygon points="-130,-75 -130,75 0,150 0,0" fill="none"/>
          <polygon points="130,-75 130,75 0,150 0,0" fill="none"/>
          <polygon points="0,-90 78,-45 0,0 -78,-45" fill="none" stroke-width="0.9" opacity="0.6"/>
        </g>
      </g>

      <g
        color="#8ff8e3"
        transform="translate(600 400)"
        opacity="0.85"
      >
        <polygon
          points="0,-260 225,-130 225,130 0,260 -225,130 -225,-130"
          fill="none"
          stroke="currentColor"
          stroke-width="0.9"
          opacity="0.4"
        />
        <polygon
          points="0,-170 147,-85 147,85 0,170 -147,85 -147,-85"
          fill="none"
          stroke="currentColor"
          stroke-width="0.7"
          opacity="0.32"
        />

        <g transform="scale(1.2)">
          @for (rot of rotations; track rot) {
            <use href="#arm" [attr.transform]="'rotate(' + rot + ')'"/>
          }
        </g>

        <polygon
          points="0,-28 24,-14 24,14 0,28 -24,14 -24,-14"
          fill="none"
          stroke="#6aeaad"
          stroke-width="1.4"
        />
        <polygon
          points="0,-14 12,-7 12,7 0,14 -12,7 -12,-7"
          fill="#2dd489"
          opacity="0.4"
        />
      </g>

      <g
        stroke="#2dd489"
        stroke-width="0.6"
        fill="none"
        opacity="0.5"
        font-family="monospace"
        font-size="10"
      >
        <g transform="translate(200 180)">
          <line x1="0" y1="0" x2="80" y2="0"/>
          <line x1="0" y1="-4" x2="0" y2="4"/>
          <line x1="80" y1="-4" x2="80" y2="4"/>
          <text x="40" y="-8" fill="#2dd489" text-anchor="middle" opacity="0.7" stroke="none">
            hex·6
          </text>
        </g>
        <g transform="translate(920 640)">
          <line x1="0" y1="0" x2="60" y2="0"/>
          <line x1="0" y1="-4" x2="0" y2="4"/>
          <line x1="60" y1="-4" x2="60" y2="4"/>
          <text x="30" y="18" fill="#4deccf" text-anchor="middle" opacity="0.7" stroke="none">
            axis
          </text>
        </g>
        <g transform="translate(960 220)" stroke="#4deccf">
          <path d="M 0 0 L 30 0 A 30 30 0 0 0 21 -21 Z" fill="none"/>
          <text x="10" y="-8" font-size="9" fill="#4deccf" opacity="0.7" stroke="none">60°</text>
        </g>
      </g>
    </svg>
  `
})
export class CrystalBannerComponent {
  protected readonly rotations = [0, 60, 120, 180, 240, 300];
  protected readonly gridLines = Array.from({ length: 21 }, (_, i) => i - 10);
}
