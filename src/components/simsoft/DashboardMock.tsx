import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  CircleDot,
  Cpu,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

/** Stylized SaaS dashboard mockup — pure SVG/CSS, no images. */
export function DashboardMock() {
  return (
    <div className="relative">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] opacity-70 blur-3xl bg-gradient-electric"
      />
      <div className="glass rounded-3xl p-4 sm:p-5 shadow-glow">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 px-1 pb-3">
          <span className="size-2.5 rounded-full bg-[oklch(0.7_0.18_25)]" />
          <span className="size-2.5 rounded-full bg-[oklch(0.82_0.16_85)]" />
          <span className="size-2.5 rounded-full bg-[oklch(0.74_0.18_150)]" />
          <div className="mx-auto rounded-md bg-muted px-3 py-0.5 text-[10px] text-muted-foreground">
            simsoft.cloud / dashboard
          </div>
        </div>

        <div className="grid grid-cols-6 gap-3">
          {/* KPI row */}
          <KPI label="Revenu MTD" value="€842K" delta="+18.2%" tone="electric" icon={<TrendingUp className="size-4" />} />
          <KPI label="Tickets résolus" value="1 284" delta="+6.4%" tone="cyan" icon={<CheckCircle2 className="size-4" />} />
          <KPI label="Flotte active" value="312" delta="+3" tone="navy" icon={<Briefcase className="size-4" />} />

          {/* main chart */}
          <div className="col-span-6 sm:col-span-4 rounded-2xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Performance ERP</p>
                <p className="text-sm font-semibold">Chiffre d'affaires · 30 jours</p>
              </div>
              <BarChart3 className="size-4 text-muted-foreground" />
            </div>
            <AreaChart />
            <div className="mt-3 flex items-center gap-3 text-[10px] text-muted-foreground">
              <Legend dotClass="bg-[var(--electric)]" label="Divalto" />
              <Legend dotClass="bg-[var(--cyan)]" label="WaveSoft" />
              <Legend dotClass="bg-[var(--navy)]" label="FirstParc" />
            </div>
          </div>

          {/* side panel — maintenance */}
          <div className="col-span-6 sm:col-span-2 rounded-2xl border border-border bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold">GMAO</p>
              <Wrench className="size-4 text-muted-foreground" />
            </div>
            <Ring percent={87} />
            <ul className="mt-3 space-y-1.5 text-[11px]">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-1.5"><CircleDot className="size-3 text-[var(--electric)]" /> Préventif</span>
                <span className="font-semibold">42</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-1.5"><CircleDot className="size-3 text-[var(--cyan)]" /> Curatif</span>
                <span className="font-semibold">17</span>
              </li>
              <li className="flex items-center justify-between text-muted-foreground">
                <span>Disponibilité</span>
                <span className="font-semibold text-foreground">99.4%</span>
              </li>
            </ul>
          </div>

          {/* CRM pipeline */}
          <div className="col-span-6 sm:col-span-3 rounded-2xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold">Pipeline CRM</p>
              <Users className="size-4 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              {[
                { l: "Qualifié", v: 78, c: "var(--electric)" },
                { l: "Proposition", v: 54, c: "var(--electric-glow)" },
                { l: "Négociation", v: 36, c: "var(--cyan)" },
                { l: "Gagné", v: 22, c: "oklch(0.7 0.16 150)" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="mb-1 flex justify-between text-[11px]">
                    <span>{s.l}</span>
                    <span className="text-muted-foreground">{s.v}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full" style={{ width: `${s.v}%`, background: s.c }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fleet */}
          <div className="col-span-6 sm:col-span-3 rounded-2xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold">Flotte · Aujourd'hui</p>
              <Cpu className="size-4 text-muted-foreground" />
            </div>
            <BarsChart />
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <Mini label="En route" value="186" />
              <Mini label="Maintenance" value="14" />
              <Mini label="Inactif" value="112" />
            </div>
          </div>
        </div>
      </div>

      {/* floating cards */}
      <FloatingCard
        className="absolute -left-6 top-24 hidden md:flex animate-float-slow"
        icon={<TrendingUp className="size-4 text-[var(--electric)]" />}
        title="MRR"
        value="+24.6%"
        sub="vs. mois dernier"
      />
      <FloatingCard
        className="absolute -right-4 bottom-10 hidden md:flex animate-float-fast"
        icon={<CheckCircle2 className="size-4 text-[oklch(0.7_0.16_150)]" />}
        title="SLA respecté"
        value="99.4%"
        sub="3 derniers mois"
      />
    </div>
  );
}

function KPI({
  label, value, delta, tone, icon,
}: { label: string; value: string; delta: string; tone: "electric" | "cyan" | "navy"; icon: React.ReactNode }) {
  const bg =
    tone === "electric"
      ? "bg-gradient-electric text-white"
      : tone === "cyan"
        ? "bg-[color-mix(in_oklab,var(--cyan)_18%,white)]"
        : "bg-[color-mix(in_oklab,var(--navy)_8%,white)]";
  const meta = tone === "electric" ? "text-white/80" : "text-muted-foreground";
  return (
    <div className={`col-span-6 sm:col-span-2 rounded-2xl border border-border p-4 ${bg}`}>
      <div className="flex items-center justify-between">
        <p className={`text-[10px] uppercase tracking-wider ${meta}`}>{label}</p>
        {icon}
      </div>
      <p className="mt-2 text-2xl font-bold tracking-tight">{value}</p>
      <p className={`mt-1 inline-flex items-center gap-1 text-[11px] ${meta}`}>
        <ArrowUpRight className="size-3" />
        {delta}
      </p>
    </div>
  );
}

function Legend({ dotClass, label }: { dotClass: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`size-2 rounded-full ${dotClass}`} />
      {label}
    </span>
  );
}
function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-muted px-2 py-1.5">
      <p className="text-sm font-bold">{value}</p>
      <p className="text-[10px] text-muted-foreground">{label}</p>
    </div>
  );
}

function AreaChart() {
  // smooth area shape
  return (
    <svg viewBox="0 0 320 110" className="w-full h-[110px]">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.21 255)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.62 0.21 255)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.13 215)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="oklch(0.78 0.13 215)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[20, 50, 80].map((y) => (
        <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.06" />
      ))}
      <path
        d="M0,80 C30,60 50,70 80,55 C110,40 140,50 170,35 C200,20 230,30 260,25 C285,20 305,30 320,22 L320,110 L0,110 Z"
        fill="url(#g1)"
      />
      <path
        d="M0,80 C30,60 50,70 80,55 C110,40 140,50 170,35 C200,20 230,30 260,25 C285,20 305,30 320,22"
        fill="none"
        stroke="oklch(0.62 0.21 255)"
        strokeWidth="2"
      />
      <path
        d="M0,95 C30,85 60,90 90,80 C120,70 150,80 180,68 C210,55 240,65 270,55 C295,48 310,55 320,50 L320,110 L0,110 Z"
        fill="url(#g2)"
      />
      <path
        d="M0,95 C30,85 60,90 90,80 C120,70 150,80 180,68 C210,55 240,65 270,55 C295,48 310,55 320,50"
        fill="none"
        stroke="oklch(0.78 0.13 215)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function BarsChart() {
  const bars = [40, 64, 30, 78, 56, 48, 70, 58, 84, 46, 62, 72];
  return (
    <svg viewBox="0 0 240 90" className="w-full h-[90px]">
      {bars.map((b, i) => (
        <rect
          key={i}
          x={i * 20 + 2}
          y={90 - b}
          width="12"
          height={b}
          rx="3"
          fill={i === 8 ? "oklch(0.62 0.21 255)" : "oklch(0.86 0.05 250)"}
        />
      ))}
    </svg>
  );
}
function Ring({ percent }: { percent: number }) {
  const r = 30, c = 2 * Math.PI * r, off = c - (percent / 100) * c;
  return (
    <div className="relative mx-auto size-[88px]">
      <svg viewBox="0 0 80 80" className="size-full -rotate-90">
        <circle cx="40" cy="40" r={r} fill="none" stroke="oklch(0.92 0.012 255)" strokeWidth="8" />
        <circle
          cx="40" cy="40" r={r} fill="none" stroke="url(#ringg)"
          strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={off}
        />
        <defs>
          <linearGradient id="ringg" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.21 255)" />
            <stop offset="100%" stopColor="oklch(0.78 0.13 215)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="text-lg font-bold">{percent}%</p>
          <p className="text-[10px] text-muted-foreground">Conformité</p>
        </div>
      </div>
    </div>
  );
}

function FloatingCard({
  className = "", icon, title, value, sub,
}: { className?: string; icon: React.ReactNode; title: string; value: string; sub: string }) {
  return (
    <div className={`glass rounded-2xl px-4 py-3 items-center gap-3 ${className}`}>
      <div className="grid size-9 place-items-center rounded-xl bg-muted">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="text-sm font-bold">{value}</p>
        <p className="text-[10px] text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}
