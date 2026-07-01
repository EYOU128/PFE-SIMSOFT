import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import { products } from "@/lib/products";
import {
  ArrowRight,
  Award,
  Boxes,
  ChevronDown,
  Cpu,
  Globe2,
  Headphones,
  LayoutGrid,
  LineChart,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Truck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { DashboardMock } from "@/components/simsoft/DashboardMock";
import { Counter } from "@/components/simsoft/Counter";
import { Reveal } from "@/components/simsoft/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIMSOFT — Solutions ERP, CRM & GMAO pour la transformation digitale" },
      {
        name: "description",
        content:
          "Divalto, FirstParc, WaveSoft, Quorion et développement sur mesure. SIMSOFT digitalise vos opérations avec des solutions ERP intelligentes.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav dark={dark} setDark={setDark} scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <TrustedBy />
      <Solutions />
      <Showcase />
      <WhyChoose />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <ChatWidget />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* NAV                                                                        */
/* -------------------------------------------------------------------------- */
function Nav({
  dark, setDark, scrolled, menuOpen, setMenuOpen,
}: {
  dark: boolean; setDark: (b: boolean) => void; scrolled: boolean;
  menuOpen: boolean; setMenuOpen: (b: boolean) => void;
}) {
  const [megaOpen, setMegaOpen] = useState(false);
  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-background/75 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8 h-16">
        <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="grid size-8 place-items-center rounded-xl bg-gradient-electric text-white shadow-glow">
            <Sparkles className="size-4" />
          </span>
          <span className="text-lg">SIMSOFT</span>
        </a>

        <nav className="ml-4 hidden lg:flex items-center gap-1 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 hover:bg-muted">
              Produits <ChevronDown className="size-4" />
            </button>
            {megaOpen && <Mega />}
          </div>
          <a href="#solutions" className="rounded-lg px-3 py-2 hover:bg-muted">Solutions</a>
          <a href="#showcase" className="rounded-lg px-3 py-2 hover:bg-muted">Démo</a>
          <a href="#process" className="rounded-lg px-3 py-2 hover:bg-muted">Méthodologie</a>
          <a href="#faq" className="rounded-lg px-3 py-2 hover:bg-muted">FAQ</a>
          <a href="#contact" className="rounded-lg px-3 py-2 hover:bg-muted">Contact</a>
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <button
            aria-label="Rechercher"
            className="hidden md:grid size-9 place-items-center rounded-lg hover:bg-muted"
          >
            <Search className="size-4" />
          </button>
          <button
            aria-label="Basculer le thème"
            onClick={() => setDark(!dark)}
            className="grid size-9 place-items-center rounded-lg hover:bg-muted"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a href="#contact" onClick={(e) => smoothScroll(e, "contact")} className="hidden sm:inline-flex h-9 items-center rounded-lg px-3 text-sm font-semibold hover:bg-muted">
            Se connecter
          </a>
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, "contact")}
            className="hidden sm:inline-flex h-9 items-center rounded-lg bg-gradient-electric px-4 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            Demander une démo
          </a>
          <button
            aria-label="Menu"
            className="lg:hidden grid size-9 place-items-center rounded-lg hover:bg-muted"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 grid gap-1 text-sm">
            {[
              { l: "Produits", h: "showcase" },
              { l: "Solutions", h: "solutions" },
              { l: "Démo", h: "showcase" },
              { l: "Méthodologie", h: "process" },
              { l: "FAQ", h: "faq" },
              { l: "Contact", h: "contact" },
            ].map((it) => (
              <a
                key={it.l}
                href={`#${it.h}`}
                onClick={(e) => { smoothScroll(e, it.h); setMenuOpen(false); }}
                className="rounded-lg px-3 py-2 hover:bg-muted"
              >
                {it.l}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { smoothScroll(e, "contact"); setMenuOpen(false); }}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-lg bg-gradient-electric px-4 text-sm font-semibold text-white"
            >
              Demander une démo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }
}

function Mega() {
  const icons: Record<string, React.ReactNode> = {
    ERP: <Boxes className="size-4" />,
    GMAO: <Wrench className="size-4" />,
    Gestion: <LineChart className="size-4" />,
    POS: <LayoutGrid className="size-4" />,
    Custom: <Cpu className="size-4" />,
    Support: <Headphones className="size-4" />,
  };
  return (
    <div className="absolute left-0 top-full pt-2 w-[640px] animate-rise">
      <div className="glass rounded-2xl p-4 grid grid-cols-2 gap-1">
        {products.map((p) => (
          <Link
            key={p.slug}
            to="/produits/$slug"
            params={{ slug: p.slug }}
            className="group flex items-start gap-3 rounded-xl p-3 hover:bg-muted transition"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-electric text-white">
              {icons[p.tag] ?? <Sparkles className="size-4" />}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold group-hover:text-[var(--electric)]">{p.name}</span>
              <span className="block text-xs text-muted-foreground line-clamp-1">{p.tagline}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-[var(--navy-deep)] backdrop-blur">
              <span className="size-1.5 rounded-full bg-[var(--electric)] animate-pulse-glow" />
              Nouveau · Divalto 11 disponible
              <ArrowRight className="size-3" />
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--navy-deep)] leading-[1.05]">
              Transformez votre entreprise avec des{" "}
              <span className="text-gradient">solutions ERP intelligentes</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
              SIMSOFT accompagne les entreprises dans leur transformation digitale grâce à
              Divalto, FirstParc, WaveSoft et des solutions sur mesure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-electric px-6 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Demander une démo <ArrowRight className="size-4" />
              </a>
              <a
                href="#solutions"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-background/70 px-6 text-sm font-semibold backdrop-blur transition hover:bg-background"
              >
                Découvrir nos solutions
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { l: "Années", v: 20, s: "+" },
                { l: "Clients", v: 450, s: "+" },
                { l: "Pays", v: 12, s: "" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[var(--navy-deep)]">
                    <Counter end={s.v} suffix={s.s} />
                  </p>
                  <p className="text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* TRUSTED BY — infinite marquee                                              */
/* -------------------------------------------------------------------------- */
function TrustedBy() {
  const logos = [
    "Divalto", "FirstParc", "WaveSoft", "Quorion", "Sage", "Microsoft",
    "Oracle", "SAP", "Odoo", "HubSpot", "Salesforce", "Notion",
  ];
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
        Ils nous font confiance · 450+ entreprises digitalisées
      </p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-12 animate-marquee w-max">
          {row.map((name, i) => (
            <div
              key={i}
              className="flex h-10 items-center px-6 text-lg font-bold tracking-tight text-muted-foreground/70 hover:text-[var(--electric)] transition"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SOLUTIONS CARDS                                                            */
/* -------------------------------------------------------------------------- */
function Solutions() {
  const icons: Record<string, React.ReactNode> = {
    ERP: <Boxes />,
    GMAO: <Wrench />,
    Gestion: <LineChart />,
    POS: <LayoutGrid />,
    Custom: <Cpu />,
    Support: <Headphones />,
  };
  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--electric)]">Nos solutions</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Une plateforme pour <span className="text-gradient">chaque métier</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              De l'ERP au point de vente, en passant par la GMAO et le développement sur mesure —
              une stack cohérente pour piloter toute l'entreprise.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 60}>
              <Link
                to="/produits/$slug"
                params={{ slug: p.slug }}
                className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 size-48 rounded-full bg-gradient-electric opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                />
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-electric text-white shadow-glow">
                    {icons[p.tag] ?? <Sparkles />}
                  </span>
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold group-hover:text-[var(--electric)] transition-colors">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>

                {/* Mini preview */}
                <div className="mt-5 h-28 overflow-hidden rounded-xl border border-border bg-muted/60 p-3">
                  <MiniPreview tag={p.tag} />
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--electric)] group-hover:gap-2.5 transition-all">
                  En savoir plus <ArrowRight className="size-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniPreview({ tag }: { tag: string }) {
  if (tag === "GMAO" || tag === "Support") {
    return (
      <svg viewBox="0 0 200 60" className="w-full h-full">
        {[12, 28, 44].map((y, i) => (
          <g key={i}>
            <rect x="0" y={y - 6} width="80" height="6" rx="3" fill="oklch(0.92 0.012 255)" />
            <rect x="0" y={y - 6} width={40 + i * 15} height="6" rx="3" fill="oklch(0.62 0.21 255)" />
            <circle cx="120" cy={y - 3} r="3" fill="oklch(0.78 0.13 215)" />
            <rect x="130" y={y - 6} width="60" height="6" rx="3" fill="oklch(0.94 0.01 250)" />
          </g>
        ))}
      </svg>
    );
  }
  if (tag === "POS") {
    return (
      <svg viewBox="0 0 200 60" className="w-full h-full">
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={i * 50 + 4} y="6" width="42" height="48" rx="6" fill="oklch(0.96 0.015 250)" />
        ))}
        <rect x="8" y="44" width="34" height="6" rx="3" fill="oklch(0.62 0.21 255)" />
      </svg>
    );
  }
  // default area
  return (
    <svg viewBox="0 0 200 60" className="w-full h-full">
      <defs>
        <linearGradient id="mp" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.21 255)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.62 0.21 255)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,46 C30,30 60,38 90,24 C120,12 150,22 200,10 L200,60 L0,60 Z" fill="url(#mp)" />
      <path d="M0,46 C30,30 60,38 90,24 C120,12 150,22 200,10" fill="none" stroke="oklch(0.62 0.21 255)" strokeWidth="2" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* SHOWCASE TABS                                                              */
/* -------------------------------------------------------------------------- */
function Showcase() {
  const tabs = [
    {
      k: "divalto",
      name: "Divalto",
      title: "ERP unifié pour piloter toute l'entreprise",
      features: ["Finance & comptabilité", "Production & achats", "CRM intégré", "BI temps réel"],
      kpis: [{ v: "-32%", l: "Temps de clôture" }, { v: "x3", l: "Productivité équipe" }, { v: "99.9%", l: "Disponibilité" }],
    },
    {
      k: "firstparc",
      name: "FirstParc",
      title: "GMAO nouvelle génération",
      features: ["Maintenance préventive", "Gestion d'actifs", "Bons de travail mobiles", "Indicateurs KPI"],
      kpis: [{ v: "-45%", l: "Coût maintenance" }, { v: "+28%", l: "Disponibilité" }, { v: "8 sem", l: "Mise en route" }],
    },
    {
      k: "wavesoft",
      name: "WaveSoft",
      title: "Gestion commerciale & comptable",
      features: ["Devis, ventes, achats", "Compta intégrée", "Multi-sociétés", "Reporting avancé"],
      kpis: [{ v: "+40%", l: "Conversion devis" }, { v: "-60%", l: "Saisie manuelle" }, { v: "24/7", l: "Cloud disponible" }],
    },
  ];
  const [active, setActive] = useState("divalto");
  const cur = tabs.find((t) => t.k === active)!;
  return (
    <section id="showcase" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-[var(--electric)]">Démo produit</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Explorez nos produits phares
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <div className="glass inline-flex rounded-full p-1.5">
            {tabs.map((t) => (
              <button
                key={t.k}
                onClick={() => setActive(t.k)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  active === t.k ? "bg-gradient-electric text-white shadow-glow" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        <div key={cur.k} className="mt-12 grid lg:grid-cols-2 gap-10 items-center animate-rise">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{cur.title}</h3>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {cur.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-gradient-electric text-white">
                    <Zap className="size-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {cur.kpis.map((k) => (
                <div key={k.l} className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-2xl font-extrabold text-gradient">{k.v}</p>
                  <p className="text-xs text-muted-foreground mt-1">{k.l}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-electric px-5 text-sm font-semibold text-white shadow-glow"
            >
              Réserver une démo <ArrowRight className="size-4" />
            </a>
          </div>
          <div>
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* WHY CHOOSE                                                                 */
/* -------------------------------------------------------------------------- */
function WhyChoose() {
  const stats = [
    { v: 20, s: "+", l: "Années d'expérience", i: <Award /> },
    { v: 12, s: "", l: "Pays · présence internationale", i: <Globe2 /> },
    { v: 450, s: "+", l: "Clients ERP & GMAO", i: <Boxes /> },
    { v: 99, s: "%", l: "Support dédié & SLA", i: <ShieldCheck /> },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--electric)]">Pourquoi SIMSOFT</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Une expertise <span className="text-gradient">construite sur 20 ans</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <div className="glass rounded-3xl p-6 h-full">
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-electric text-white shadow-glow">
                  {s.i}
                </span>
                <p className="mt-5 text-4xl font-extrabold tracking-tight text-[var(--navy-deep)]">
                  <Counter end={s.v} suffix={s.s} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PROCESS TIMELINE                                                           */
/* -------------------------------------------------------------------------- */
function Process() {
  const steps = [
    { t: "Analyse", d: "Audit complet de vos processus et besoins métiers.", i: <Search /> },
    { t: "Conseil", d: "Architecture cible, choix de la stack et roadmap.", i: <Sparkles /> },
    { t: "Intégration", d: "Paramétrage, développement et migration des données.", i: <Cpu /> },
    { t: "Formation", d: "Accompagnement des équipes, documentation & best practices.", i: <Award /> },
    { t: "Support", d: "Infogérance et amélioration continue 24/7.", i: <Headphones /> },
  ];
  return (
    <section id="process" className="bg-gradient-navy text-white py-24 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-[0.08]" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-[var(--electric)] opacity-20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--electric-glow)]">Méthodologie</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Un parcours d'intégration <span className="text-gradient">éprouvé</span>
            </h2>
          </div>
        </Reveal>

        <ol className="mt-14 relative grid gap-8 lg:grid-cols-5">
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <li className="relative">
                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-electric text-white shadow-glow">
                  {s.i}
                </div>
                <p className="mt-4 text-xs font-semibold text-[var(--electric-glow)]">Étape {i + 1}</p>
                <h3 className="mt-1 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-white/70">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* TESTIMONIALS                                                               */
/* -------------------------------------------------------------------------- */
function Testimonials() {
  const items = [
    {
      n: "Karim Belkacem", r: "DSI · Groupe Industriel",
      q: "SIMSOFT a piloté notre déploiement Divalto sur 8 sites en moins d'un an. Le ROI a été visible dès le 6e mois.",
      c: "Manufacture+",
    },
    {
      n: "Sonia Mahmoudi", r: "Directrice opérations · Logistique",
      q: "FirstParc a transformé notre maintenance. Nous avons réduit nos arrêts de 45% en une saison.",
      c: "FleetPro",
    },
    {
      n: "Mehdi Trabelsi", r: "CEO · Retail",
      q: "L'équipe SIMSOFT est un partenaire stratégique. Quorion + WaveSoft, une vraie révolution pour nos 24 boutiques.",
      c: "RetailNord",
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold text-[var(--electric)]">Témoignages</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ce que disent nos clients
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {items.map((it) => (
                <article key={it.n} className="w-full shrink-0 px-2">
                  <div className="glass rounded-3xl p-8 sm:p-12 text-center">
                    <div className="flex justify-center gap-0.5 text-[var(--electric)]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-6 text-xl sm:text-2xl font-semibold leading-relaxed text-[var(--navy-deep)]">
                      « {it.q} »
                    </p>
                    <div className="mt-8 inline-flex items-center gap-3">
                      <div className="grid size-12 place-items-center rounded-full bg-gradient-electric text-white font-bold">
                        {it.n.split(" ").map((p) => p[0]).join("")}
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold">{it.n}</p>
                        <p className="text-xs text-muted-foreground">{it.r}</p>
                      </div>
                      <span className="ml-4 hidden sm:inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold">
                        {it.c}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Témoignage ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-gradient-electric" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */
function FAQ() {
  const qs = [
    { q: "Combien de temps dure une intégration ERP ?", a: "Selon le périmètre, un déploiement standard prend de 8 à 16 semaines. Pour un projet multi-sociétés ou international, comptez 4 à 9 mois." },
    { q: "Travaillez-vous en mode SaaS ou on-premise ?", a: "Les deux. Divalto, WaveSoft et FirstParc sont disponibles en cloud privé hébergé par SIMSOFT ou en installation locale." },
    { q: "Proposez-vous un support 24/7 ?", a: "Oui. Nos offres d'infogérance incluent un SLA de 99,9% avec une hotline francophone et arabophone disponible en continu." },
    { q: "Pouvez-vous migrer depuis un autre ERP ?", a: "Nous opérons régulièrement des migrations depuis SAP, Sage, Odoo et systèmes propriétaires, avec reprise complète des données historiques." },
    { q: "Quels secteurs accompagnez-vous ?", a: "Industrie, distribution, retail, logistique, services et BTP. Notre approche métier s'adapte à chaque secteur." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold text-[var(--electric)]">FAQ</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Questions fréquentes
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 space-y-3">
          {qs.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="rounded-2xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold">{it.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CTA                                                                        */
/* -------------------------------------------------------------------------- */
function CTA() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de démo — ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nSociété: ${form.company}\n\n${form.message}`,
    );
    window.location.href = `mailto:contact@simsoft.tn?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-navy py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 0%, color-mix(in oklab, var(--electric) 40%, transparent), transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="text-sm font-semibold text-[var(--electric-glow)]">Contact</p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Prêt à <span className="text-gradient">digitaliser votre entreprise</span> ?
            </h2>
            <p className="mt-5 text-white/75 text-lg">
              Échangez avec nos experts ERP. Audit gratuit, recommandation personnalisée
              et démonstration produit en 30 minutes.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <a href="tel:+21671000000" className="flex items-center gap-3 hover:text-[var(--electric-glow)]">
                <span className="grid size-10 place-items-center rounded-xl bg-white/10"><Phone className="size-4" /></span>
                +216 71 000 000
              </a>
              <a href="mailto:contact@simsoft.tn" className="flex items-center gap-3 hover:text-[var(--electric-glow)]">
                <span className="grid size-10 place-items-center rounded-xl bg-white/10"><MessageCircle className="size-4" /></span>
                contact@simsoft.tn
              </a>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-white/10"><Globe2 className="size-4" /></span>
                Tunis, Tunisie · présence dans 12 pays
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="glass-dark rounded-3xl p-6 sm:p-8 space-y-4 border border-white/10"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold text-white/80">Nom complet</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2.5 text-sm outline-none focus:border-[var(--electric)]"
                    placeholder="Votre nom"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-white/80">Société</span>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="mt-1.5 w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2.5 text-sm outline-none focus:border-[var(--electric)]"
                    placeholder="Votre entreprise"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold text-white/80">Email professionnel</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2.5 text-sm outline-none focus:border-[var(--electric)]"
                  placeholder="vous@entreprise.com"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-white/80">Votre besoin</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2.5 text-sm outline-none focus:border-[var(--electric)] resize-none"
                  placeholder="Parlez-nous de votre projet ERP, GMAO, CRM…"
                />
              </label>
              <button
                type="submit"
                className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-electric px-6 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Réserver une démonstration <ArrowRight className="size-4" />
              </button>
              {sent && (
                <p className="text-xs text-[var(--electric-glow)] text-center">
                  Merci ! Votre messagerie va s'ouvrir pour finaliser l'envoi.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FOOTER                                                                     */
/* -------------------------------------------------------------------------- */
function Footer() {
  const cols = [
    { t: "Produits", l: ["Divalto ERP", "FirstParc", "WaveSoft", "Quorion POS"] },
    { t: "Services", l: ["Intégration", "Développement", "Formation", "Infogérance"] },
    { t: "Entreprise", l: ["À propos", "Carrières", "Partenaires", "Presse"] },
    { t: "Ressources", l: ["Blog", "Études de cas", "Documentation", "Support"] },
  ];
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <a href="#" className="flex items-center gap-2 font-extrabold">
            <span className="grid size-8 place-items-center rounded-xl bg-gradient-electric text-white">
              <Sparkles className="size-4" />
            </span>
            SIMSOFT
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Société de services informatiques tunisienne, spécialisée en ERP, GMAO, CRM et
            transformation digitale depuis plus de 20 ans.
          </p>
          <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Truck className="size-4" /> Tunis</span>
            <span className="inline-flex items-center gap-1.5"><Globe2 className="size-4" /> 12 pays</span>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.t}>
            <p className="text-sm font-bold">{c.t}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {c.l.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[var(--electric)]">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SIMSOFT. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* CHAT WIDGET                                                                */
/* -------------------------------------------------------------------------- */
function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 glass rounded-2xl p-4 animate-rise">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-gradient-electric text-white">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">Équipe SIMSOFT</p>
              <p className="text-xs text-muted-foreground">En ligne · réponse en ~2 min</p>
            </div>
          </div>
          <p className="mt-4 rounded-xl bg-muted px-3 py-2 text-sm">
            Bonjour 👋 Comment pouvons-nous vous aider à digitaliser votre entreprise ?
          </p>
          <div className="mt-3 flex gap-2">
            <input
              placeholder="Votre message…"
              className="flex-1 h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-[var(--electric)]"
            />
            <button className="h-10 rounded-lg bg-gradient-electric px-3 text-sm font-semibold text-white">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir le chat"
        className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-gradient-electric text-white shadow-glow transition hover:scale-105"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-6" />}
      </button>
    </>
  );
}
