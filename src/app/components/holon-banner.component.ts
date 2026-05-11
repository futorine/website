import { ChangeDetectionStrategy, Component } from '@angular/core';

type HolonNode = {
  x: number;
  scale: number;
  opacity: number;
  isCenter?: boolean;
};

type HolonRow = {
  y: number;
  nodes: HolonNode[];
};

type DigitGlyph = {
  char: string;
  x: number;
  y: number;
  opacity: number;
};
@Component({
  selector: 'fut-holon-banner',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:block;position:absolute;inset:0' },
  template: `
    <svg
      class="size-full"
      style="mask-image:radial-gradient(ellipse 72% 74% at 50% 50%, black 26%, transparent 88%);-webkit-mask-image:radial-gradient(ellipse 72% 74% at 50% 50%, black 26%, transparent 88%)"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="holon-horizon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4deccf" stop-opacity="0.38"/>
          <stop offset="58%" stop-color="#2dd489" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="#0a1312" stop-opacity="0"/>
        </radialGradient>

        <radialGradient id="holon-center-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#6aeaad" stop-opacity="0.28"/>
          <stop offset="55%" stop-color="#4deccf" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="#0a1312" stop-opacity="0"/>
        </radialGradient>

        <filter id="holon-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>

        <symbol id="banner-holon" viewBox="-28 -28 56 56">
          <circle r="17" fill="none" stroke="#8ff8e3" stroke-width="2.1"/>
          <circle r="8" fill="none" stroke="#6aeaad" stroke-width="1.35" opacity="0.78"/>
          <circle r="2.4" fill="#f7f4ec" opacity="0.92"/>
        </symbol>

        <symbol id="banner-yin-yang" viewBox="-24 -24 48 48">
          <path
            d="M 0 -18 A 18 18 0 0 1 0 18 A 9 9 0 0 0 0 0 A 9 9 0 0 1 0 -18"
            fill="#0a1312"
          />
          <path
            d="M 0 -18 A 18 18 0 1 0 0 18 A 9 9 0 0 1 0 0 A 9 9 0 0 0 0 -18"
            fill="#f7f4ec"
          />
          <circle cy="-9" r="4.2" fill="#f7f4ec"/>
          <circle cy="9" r="4.2" fill="#0a1312"/>
          <circle cy="-9" r="1.8" fill="#0a1312"/>
          <circle cy="9" r="1.8" fill="#f7f4ec"/>
        </symbol>
      </defs>

      <g transform="translate(0 0)">
        <circle cx="600" cy="450" r="150" fill="url(#holon-center-aura)" opacity="0.72" filter="url(#holon-soft-glow)"/>
        <ellipse cx="600" cy="314" rx="420" ry="70" fill="url(#holon-horizon-glow)" opacity="0.86"/>

        <g stroke="#4deccf" stroke-width="0.8" fill="none" opacity="0.14">
          <line x1="0" y1="312" x2="1200" y2="312" opacity="0.32"/>
          @for (offset of guideOffsets; track offset) {
            <line x1="600" y1="312" [attr.x2]="600 + offset" y2="820" />
          }
          @for (band of groundBands; track band) {
            <path [attr.d]="'M 40 ' + band + ' Q 600 ' + (band - 28) + ' 1160 ' + band" opacity="0.24"/>
          }
        </g>

        <g fill="none" stroke="#caa55f" stroke-width="0.8" opacity="0.35">
          <line x1="292" y1="366" x2="548" y2="366"/>
          <line x1="650" y1="366" x2="906" y2="366"/>
        </g>

        <g font-family="'JetBrains Mono', monospace" font-size="20" letter-spacing="1.5">
          @for (glyph of goldenDigits; track glyph.x) {
            <text
              [attr.x]="glyph.x"
              [attr.y]="glyph.y"
              [attr.opacity]="glyph.opacity"
              text-anchor="middle"
              fill="#d4b36b"
            >{{ glyph.char }}</text>
          }
          @for (glyph of inverseGoldenDigits; track glyph.x) {
            <text
              [attr.x]="glyph.x"
              [attr.y]="glyph.y"
              [attr.opacity]="glyph.opacity"
              text-anchor="middle"
              fill="#d4b36b"
            >{{ glyph.char }}</text>
          }
        </g>

        <g>
          @for (row of latticeRows; track row.y) {
            @for (node of row.nodes; track node.x) {
              <g
                [attr.transform]="'translate(' + node.x + ' ' + row.y + ') scale(' + node.scale + ')'"
                [attr.opacity]="node.opacity"
              >
                @if (node.isCenter) {
                  <circle r="58" fill="none" stroke="#4deccf" stroke-width="1.15" opacity="0.22"/>
                  <use href="#banner-yin-yang" transform="scale(1.08)"/>
                  <circle r="30" fill="none" stroke="#caa55f" stroke-width="7.6" opacity="0.12"/>
                } @else {
                  <use href="#banner-holon"/>
                }
              </g>
            }
          }
        </g>
      </g>
    </svg>
  `
})
export class HolonBannerComponent {
  protected readonly guideOffsets = [-540, -390, -250, -120, 120, 250, 390, 540];
  protected readonly groundBands = [358, 412, 486, 580, 690];
  protected readonly latticeRows: HolonRow[] = [
    this.createRow(326, 180, 5, 0.34),
    this.createRow(378, 300, 7, 0.48),
    this.createRow(450, 430, 7, 0.68, true),
    this.createRow(542, 540, 9, 0.92),
    this.createRow(650, 660, 9, 1.14)
  ];
  protected readonly goldenDigits = this.createDigits('1.6180339887', 294, 360, 23, true);
  protected readonly inverseGoldenDigits = this.createDigits('0.6180339887', 654, 360, 23, false);

  private createRow(
    y: number,
    span: number,
    count: number,
    baseScale: number,
    includeCenter = false
  ): HolonRow {
    const mid = (count - 1) / 2;
    const step = count > 1 ? span / (count - 1) : 0;

    return {
      y,
      nodes: Array.from({ length: count }, (_, index) => {
        const distance = mid === 0 ? 0 : Math.abs(index - mid) / mid;
        const isCenter = includeCenter && index === mid;

        return {
          x: 600 + (index - mid) * step,
          scale: isCenter ? 1.54 : baseScale * (1.28 - distance * 0.38),
          opacity: isCenter ? 1 : 0.16 + (1 - distance) * 0.3 + baseScale * 0.06,
          isCenter
        };
      })
    };
  }

  private createDigits(
    value: string,
    startX: number,
    y: number,
    step: number,
    fadeIn: boolean
  ): DigitGlyph[] {
    const mid = (value.length - 1) / 2;

    return Array.from(value).map((char, index) => {
      const distance = Math.abs(index - mid);
      const progress = value.length === 1 ? 1 : index / (value.length - 1);

      return {
        char,
        x: startX + index * step,
        y: y + distance * 0.85,
        opacity: fadeIn
          ? 0.14 + progress * 0.82
          : 0.96 - progress * 0.82
      };
    });
  }
}