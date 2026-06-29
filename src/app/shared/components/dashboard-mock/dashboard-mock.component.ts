import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-mock',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative">
      <div aria-hidden="true" style="position:absolute;inset:-2.5rem;z-index:-1;border-radius:3rem;opacity:0.7;filter:blur(3rem);background-image:var(--gradient-electric)"></div>
      <div class="glass" style="border-radius:1.5rem;padding:1.25rem;box-shadow:var(--shadow-glow)">
        <!-- Window chrome -->
        <div style="display:flex;align-items:center;gap:0.375rem;padding:0 0.25rem 0.75rem">
          <span style="width:0.625rem;height:0.625rem;border-radius:50%;background:oklch(0.7 0.18 25)"></span>
          <span style="width:0.625rem;height:0.625rem;border-radius:50%;background:oklch(0.82 0.16 85)"></span>
          <span style="width:0.625rem;height:0.625rem;border-radius:50%;background:oklch(0.74 0.18 150)"></span>
          <div style="margin:0 auto;border-radius:0.375rem;background:var(--muted);padding:0.125rem 0.75rem;font-size:0.625rem;color:var(--muted-foreground)">
            simsoft.cloud / dashboard
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:0.75rem">
          <!-- KPI cards -->
          <ng-container *ngFor="let kpi of kpis">
            <div [ngStyle]="kpiStyle(kpi.tone)" style="grid-column:span 2;border-radius:1rem;border:1px solid var(--border);padding:1rem">
              <div style="display:flex;align-items:center;justify-content:space-between">
                <p style="font-size:0.625rem;text-transform:uppercase;letter-spacing:0.08em" [style.color]="kpi.tone==='electric'?'rgba(255,255,255,0.8)':'var(--muted-foreground)'">{{ kpi.label }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <p style="margin-top:0.5rem;font-size:1.5rem;font-weight:700;letter-spacing:-0.025em">{{ kpi.value }}</p>
              <p style="margin-top:0.25rem;font-size:0.6875rem;display:flex;align-items:center;gap:0.25rem" [style.color]="kpi.tone==='electric'?'rgba(255,255,255,0.8)':'var(--muted-foreground)'">
                {{ kpi.delta }}
              </p>
            </div>
          </ng-container>

          <!-- Area chart -->
          <div style="grid-column:span 6;border-radius:1rem;border:1px solid var(--border);background:var(--card);padding:1rem">
            <div style="margin-bottom:0.75rem;display:flex;align-items:center;justify-content:space-between">
              <div>
                <p style="font-size:0.625rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--muted-foreground)">Performance ERP</p>
                <p style="font-size:0.875rem;font-weight:600">Chiffre d'affaires · 30 jours</p>
              </div>
            </div>
            <svg viewBox="0 0 320 110" style="width:100%;height:110px">
              <defs>
                <linearGradient id="dg1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="oklch(0.62 0.21 255)" stop-opacity="0.5"/>
                  <stop offset="100%" stop-color="oklch(0.62 0.21 255)" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="dg2" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="oklch(0.78 0.13 215)" stop-opacity="0.45"/>
                  <stop offset="100%" stop-color="oklch(0.78 0.13 215)" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <line x1="0" x2="320" y1="20" y2="20" stroke="currentColor" stroke-opacity="0.06"/>
              <line x1="0" x2="320" y1="50" y2="50" stroke="currentColor" stroke-opacity="0.06"/>
              <line x1="0" x2="320" y1="80" y2="80" stroke="currentColor" stroke-opacity="0.06"/>
              <path d="M0,80 C30,60 50,70 80,55 C110,40 140,50 170,35 C200,20 230,30 260,25 C285,20 305,30 320,22 L320,110 L0,110 Z" fill="url(#dg1)"/>
              <path d="M0,80 C30,60 50,70 80,55 C110,40 140,50 170,35 C200,20 230,30 260,25 C285,20 305,30 320,22" fill="none" stroke="oklch(0.62 0.21 255)" stroke-width="2"/>
              <path d="M0,95 C30,85 60,90 90,80 C120,70 150,80 180,68 C210,55 240,65 270,55 C295,48 310,55 320,50 L320,110 L0,110 Z" fill="url(#dg2)"/>
              <path d="M0,95 C30,85 60,90 90,80 C120,70 150,80 180,68 C210,55 240,65 270,55 C295,48 310,55 320,50" fill="none" stroke="oklch(0.78 0.13 215)" stroke-width="1.5"/>
            </svg>
            <div style="margin-top:0.75rem;display:flex;align-items:center;gap:0.75rem;font-size:0.625rem;color:var(--muted-foreground)">
              <span style="display:inline-flex;align-items:center;gap:0.375rem"><span style="width:0.5rem;height:0.5rem;border-radius:50%;background:var(--electric)"></span>Divalto</span>
              <span style="display:inline-flex;align-items:center;gap:0.375rem"><span style="width:0.5rem;height:0.5rem;border-radius:50%;background:var(--cyan)"></span>WaveSoft</span>
              <span style="display:inline-flex;align-items:center;gap:0.375rem"><span style="width:0.5rem;height:0.5rem;border-radius:50%;background:var(--navy)"></span>FirstParc</span>
            </div>
          </div>

          <!-- GMAO ring -->
          <div style="grid-column:span 2;border-radius:1rem;border:1px solid var(--border);background:var(--card);padding:1rem">
            <p style="font-size:0.875rem;font-weight:600;margin-bottom:0.5rem">GMAO</p>
            <div style="position:relative;margin:0 auto;width:88px;height:88px">
              <svg viewBox="0 0 80 80" style="width:100%;height:100%;transform:rotate(-90deg)">
                <defs>
                  <linearGradient id="ringg" x1="0" x2="1">
                    <stop offset="0%" stop-color="oklch(0.62 0.21 255)"/>
                    <stop offset="100%" stop-color="oklch(0.78 0.13 215)"/>
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="30" fill="none" stroke="oklch(0.92 0.012 255)" stroke-width="8"/>
                <circle cx="40" cy="40" r="30" fill="none" stroke="url(#ringg)" stroke-width="8" stroke-linecap="round" stroke-dasharray="188.5" stroke-dashoffset="24.5"/>
              </svg>
              <div style="position:absolute;inset:0;display:grid;place-items:center;text-align:center">
                <div>
                  <p style="font-size:1.125rem;font-weight:700">87%</p>
                  <p style="font-size:0.625rem;color:var(--muted-foreground)">Conformité</p>
                </div>
              </div>
            </div>
            <ul style="margin-top:0.75rem;display:flex;flex-direction:column;gap:0.375rem;font-size:0.6875rem">
              <li style="display:flex;align-items:center;justify-content:space-between">
                <span style="display:flex;align-items:center;gap:0.375rem;color:var(--electric)">● Préventif</span>
                <span style="font-weight:600">42</span>
              </li>
              <li style="display:flex;align-items:center;justify-content:space-between">
                <span style="display:flex;align-items:center;gap:0.375rem;color:var(--cyan)">● Curatif</span>
                <span style="font-weight:600">17</span>
              </li>
              <li style="display:flex;align-items:center;justify-content:space-between;color:var(--muted-foreground)">
                <span>Disponibilité</span>
                <span style="font-weight:600;color:var(--foreground)">99.4%</span>
              </li>
            </ul>
          </div>

          <!-- CRM pipeline -->
          <div style="grid-column:span 4;border-radius:1rem;border:1px solid var(--border);background:var(--card);padding:1rem">
            <p style="font-size:0.875rem;font-weight:600;margin-bottom:0.75rem">Pipeline CRM</p>
            <div style="display:flex;flex-direction:column;gap:0.5rem">
              <ng-container *ngFor="let stage of pipeline">
                <div>
                  <div style="display:flex;justify-content:space-between;font-size:0.6875rem;margin-bottom:0.25rem">
                    <span>{{ stage.l }}</span>
                    <span style="color:var(--muted-foreground)">{{ stage.v }}%</span>
                  </div>
                  <div style="height:0.375rem;border-radius:9999px;background:var(--muted);overflow:hidden">
                    <div style="height:100%;border-radius:9999px;transition:width 1s" [style.width.%]="stage.v" [style.background]="stage.c"></div>
                  </div>
                </div>
              </ng-container>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating cards -->
      <div class="animate-float-slow" style="position:absolute;left:-1.5rem;top:6rem;display:none;border-radius:1rem;padding:0.75rem 1rem;align-items:center;gap:0.75rem" [class.glass]="true" [style.display]="'none'" #floatCard1>
      </div>
    </div>
  `,
})
export class DashboardMockComponent {
  kpis = [
    { label: 'Revenu MTD', value: '€842K', delta: '+18.2%', tone: 'electric' },
    { label: 'Tickets résolus', value: '1 284', delta: '+6.4%', tone: 'cyan' },
    { label: 'Flotte active', value: '312', delta: '+3', tone: 'navy' },
  ];

  pipeline = [
    { l: 'Qualifié', v: 78, c: 'var(--electric)' },
    { l: 'Proposition', v: 54, c: 'var(--electric-glow)' },
    { l: 'Négociation', v: 36, c: 'var(--cyan)' },
    { l: 'Gagné', v: 22, c: 'oklch(0.7 0.16 150)' },
  ];

  kpiStyle(tone: string): Record<string, string> {
    if (tone === 'electric') return { background: 'var(--gradient-electric)', color: 'white' };
    if (tone === 'cyan') return { background: 'color-mix(in oklab, var(--cyan) 18%, white)' };
    return { background: 'color-mix(in oklab, var(--navy) 8%, white)' };
  }
}
