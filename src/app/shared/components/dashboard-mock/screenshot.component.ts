import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

type ScreenshotKind = 'crm' | 'erp' | 'gmao' | 'pos' | 'code' | 'support';

@Component({
  selector: 'app-screenshot',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      (click)="clicked.emit()"
      [style.cursor]="clickable ? 'zoom-in' : 'default'"
      [style.height]="large ? '340px' : '176px'"
      style="position:relative;width:100%;background:linear-gradient(135deg, oklch(0.98 0.005 250), oklch(0.94 0.02 250));overflow:hidden"
    >
      <svg viewBox="0 0 600 360" style="width:100%;height:100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sg1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="oklch(0.62 0.21 255)" stop-opacity="0.55"/>
            <stop offset="100%" stop-color="oklch(0.62 0.21 255)" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <!-- sidebar -->
        <rect x="0" y="0" width="120" height="360" fill="oklch(0.97 0.01 250)"/>
        <rect x="14" y="40" width="92" height="10" rx="3" fill="oklch(0.9 0.015 250)"/>
        <rect x="14" y="40" width="92" height="10" rx="3" fill="oklch(0.62 0.21 255)"/>
        <rect x="14" y="70" width="92" height="10" rx="3" fill="oklch(0.9 0.015 250)"/>
        <rect x="14" y="100" width="92" height="10" rx="3" fill="oklch(0.9 0.015 250)"/>
        <rect x="14" y="130" width="92" height="10" rx="3" fill="oklch(0.9 0.015 250)"/>
        <rect x="14" y="160" width="92" height="10" rx="3" fill="oklch(0.9 0.015 250)"/>
        <!-- topbar -->
        <rect x="120" y="0" width="480" height="36" fill="oklch(0.99 0.005 250)"/>
        <rect x="140" y="12" width="160" height="12" rx="6" fill="oklch(0.92 0.01 250)"/>
        <circle cx="568" cy="18" r="8" fill="oklch(0.62 0.21 255)"/>

        <ng-container [ngSwitch]="kind">
          <ng-container *ngSwitchCase="'crm'">
            <ng-container *ngFor="let c of [0,1,2,3]">
              <rect [attr.x]="140 + c*110" y="56" width="100" height="280" rx="10" fill="oklch(0.96 0.01 250)"/>
              <rect [attr.x]="150 + c*110" y="66" width="60" height="10" rx="3" fill="oklch(0.62 0.21 255)"/>
              <ng-container *ngFor="let r of [0,1,2,3]">
                <rect [attr.x]="150 + c*110" [attr.y]="86 + r*56" width="80" height="48" rx="6" fill="white" stroke="oklch(0.92 0.01 250)"/>
                <rect [attr.x]="158 + c*110" [attr.y]="94 + r*56" width="50" height="6" rx="3" fill="oklch(0.86 0.02 250)"/>
                <rect [attr.x]="158 + c*110" [attr.y]="106 + r*56" width="34" height="5" rx="2" fill="oklch(0.92 0.015 250)"/>
                <circle [attr.cx]="218 + c*110" [attr.cy]="122 + r*56" r="5" [attr.fill]="r%2 ? 'oklch(0.74 0.16 145)' : 'oklch(0.62 0.21 255)'"/>
              </ng-container>
            </ng-container>
          </ng-container>

          <ng-container *ngSwitchCase="'erp'">
            <ng-container *ngFor="let i of [0,1,2]">
              <rect [attr.x]="140 + i*160" y="56" width="150" height="80" rx="10" fill="white" stroke="oklch(0.92 0.01 250)"/>
              <rect [attr.x]="152 + i*160" y="68" width="60" height="6" rx="3" fill="oklch(0.86 0.02 250)"/>
              <text [attr.x]="152 + i*160" y="108" font-size="22" font-weight="800" fill="oklch(0.3 0.05 255)">{{ ['€842K','1 284','+18%'][i] }}</text>
            </ng-container>
            <rect x="140" y="150" width="310" height="180" rx="12" fill="white" stroke="oklch(0.92 0.01 250)"/>
            <path d="M150,300 C200,260 250,280 300,240 C350,200 400,220 450,180 L450,320 L150,320 Z" fill="url(#sg1)"/>
            <path d="M150,300 C200,260 250,280 300,240 C350,200 400,220 450,180" fill="none" stroke="oklch(0.62 0.21 255)" stroke-width="2.5"/>
            <rect x="470" y="150" width="120" height="180" rx="12" fill="white" stroke="oklch(0.92 0.01 250)"/>
            <ng-container *ngFor="let i of [0,1,2,3,4]">
              <rect x="480" [attr.y]="170 + i*30" [attr.width]="100 - i*12" height="14" rx="3" [attr.fill]="i===0 ? 'oklch(0.62 0.21 255)' : 'oklch(0.9 0.015 250)'"/>
            </ng-container>
          </ng-container>

          <ng-container *ngSwitchCase="'gmao'">
            <rect x="140" y="56" width="450" height="40" rx="8" fill="white" stroke="oklch(0.92 0.01 250)"/>
            <rect x="152" y="68" width="120" height="14" rx="3" fill="oklch(0.62 0.21 255)"/>
            <ng-container *ngFor="let i of [0,1,2,3,4,5]">
              <rect x="140" [attr.y]="110 + i*36" width="450" height="30" rx="6" [attr.fill]="i%2 ? 'oklch(0.97 0.005 250)' : 'white'" stroke="oklch(0.94 0.01 250)"/>
              <circle cx="155" [attr.cy]="125 + i*36" r="6" [attr.fill]="gmaoColors[i]"/>
              <rect x="170" [attr.y]="120 + i*36" width="120" height="10" rx="3" fill="oklch(0.4 0.04 255)"/>
              <rect x="310" [attr.y]="120 + i*36" width="80" height="10" rx="3" fill="oklch(0.9 0.015 250)"/>
              <rect x="410" [attr.y]="120 + i*36" width="60" height="10" rx="3" fill="oklch(0.9 0.015 250)"/>
              <rect x="500" [attr.y]="120 + i*36" width="70" height="10" rx="3" fill="oklch(0.62 0.21 255)" opacity="0.6"/>
            </ng-container>
          </ng-container>

          <ng-container *ngSwitchCase="'pos'">
            <rect x="140" y="56" width="290" height="280" rx="10" fill="white" stroke="oklch(0.92 0.01 250)"/>
            <ng-container *ngFor="let r of [0,1,2]">
              <ng-container *ngFor="let c of [0,1,2,3]">
                <rect [attr.x]="150 + c*68" [attr.y]="66 + r*90" width="60" height="82" rx="8" [attr.fill]="(r+c)%2 ? 'oklch(0.62 0.21 255)' : 'oklch(0.96 0.015 250)'"/>
                <rect [attr.x]="156 + c*68" [attr.y]="130 + r*90" width="40" height="8" rx="2" [attr.fill]="(r+c)%2 ? 'white' : 'oklch(0.5 0.04 255)'" opacity="0.9"/>
              </ng-container>
            </ng-container>
            <rect x="450" y="56" width="140" height="280" rx="10" fill="oklch(0.97 0.01 250)"/>
            <rect x="462" y="68" width="116" height="40" rx="6" fill="white"/>
            <text x="470" y="94" font-size="18" font-weight="800" fill="oklch(0.3 0.05 255)">€ 42.80</text>
            <rect x="462" y="120" width="116" height="24" rx="4" fill="white" stroke="oklch(0.92 0.01 250)"/>
            <rect x="462" y="150" width="116" height="24" rx="4" fill="white" stroke="oklch(0.92 0.01 250)"/>
            <rect x="462" y="180" width="116" height="24" rx="4" fill="white" stroke="oklch(0.92 0.01 250)"/>
            <rect x="462" y="290" width="116" height="36" rx="8" fill="oklch(0.62 0.21 255)"/>
            <text x="488" y="313" font-size="12" font-weight="700" fill="white">Encaisser</text>
          </ng-container>

          <ng-container *ngSwitchCase="'code'">
            <rect x="140" y="56" width="450" height="280" rx="10" fill="oklch(0.17 0.03 255)"/>
            <ng-container *ngFor="let i of [0,1,2,3,4,5,6,7,8,9]">
              <text x="155" [attr.y]="84 + i*24" font-size="11" fill="oklch(0.5 0.08 255)" font-family="monospace">{{ lineNums[i] }}</text>
              <rect x="180" [attr.y]="74 + i*24" [attr.width]="codeWidths[i]" height="10" rx="2" [attr.fill]="codeColors[i]"/>
            </ng-container>
          </ng-container>

          <ng-container *ngSwitchCase="'support'">
            <rect x="140" y="56" width="280" height="280" rx="10" fill="white" stroke="oklch(0.92 0.01 250)"/>
            <ng-container *ngFor="let i of [0,1,2,3]">
              <circle cx="160" [attr.cy]="80 + i*60" r="14" fill="oklch(0.86 0.04 250)"/>
              <rect x="184" [attr.y]="70 + i*60" width="220" height="38" rx="10" [attr.fill]="i%2 ? 'oklch(0.62 0.21 255)' : 'oklch(0.95 0.01 250)'"/>
              <rect x="194" [attr.y]="82 + i*60" [attr.width]="i%2 ? 160 : 140" height="6" rx="2" [attr.fill]="i%2 ? 'white' : 'oklch(0.5 0.04 255)'" opacity="0.8"/>
              <rect x="194" [attr.y]="94 + i*60" [attr.width]="i%2 ? 100 : 120" height="6" rx="2" [attr.fill]="i%2 ? 'white' : 'oklch(0.6 0.04 255)'" opacity="0.6"/>
            </ng-container>
            <rect x="440" y="56" width="150" height="280" rx="10" fill="oklch(0.97 0.01 250)"/>
            <ng-container *ngFor="let i of [0,1,2,3]">
              <rect x="452" [attr.y]="70 + i*60" width="126" height="50" rx="8" fill="white"/>
              <rect x="462" [attr.y]="82 + i*60" width="80" height="8" rx="2" fill="oklch(0.62 0.21 255)"/>
              <rect x="462" [attr.y]="98 + i*60" width="100" height="6" rx="2" fill="oklch(0.9 0.015 250)"/>
            </ng-container>
          </ng-container>
        </ng-container>
      </svg>
      <span style="position:absolute;bottom:0.75rem;left:1rem;right:1rem;font-size:0.625rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--muted-foreground)">{{ title }}</span>
    </div>
  `,
})
export class ScreenshotComponent {
  @Input() kind: ScreenshotKind = 'erp';
  @Input() title = '';
  @Input() large = false;
  @Input() clickable = false;
  @Output() clicked = new EventEmitter<void>();

  readonly gmaoColors = [
    'oklch(0.74 0.16 145)',
    'oklch(0.82 0.16 85)',
    'oklch(0.7 0.18 25)',
    'oklch(0.62 0.21 255)',
    'oklch(0.74 0.16 145)',
    'oklch(0.82 0.16 85)',
  ];

  readonly lineNums = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
  readonly codeWidths = [120, 180, 220, 90, 200, 160, 240, 100, 180, 150];
  readonly codeColors = [
    'oklch(0.78 0.13 215)',
    'oklch(0.85 0.15 110)',
    'oklch(0.7 0.16 320)',
    'oklch(0.78 0.13 215)',
    'oklch(0.95 0.01 250)',
    'oklch(0.85 0.15 110)',
    'oklch(0.7 0.16 320)',
    'oklch(0.78 0.13 215)',
    'oklch(0.95 0.01 250)',
    'oklch(0.85 0.15 110)',
  ];
}
