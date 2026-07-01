import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Boxes,
  ChevronRight,
  Cpu,
  Globe2,
  Headphones,
  LayoutGrid,
  LineChart,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { getAdjacent, getProduct, products } from "@/lib/products";
import { Counter } from "@/components/simsoft/Counter";
import { Reveal } from "@/components/simsoft/Reveal";

export const Route = createFileRoute("/produits/$slug")({
  head: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) return { meta: [{ title: "Produit introuvable — SIMSOFT" }] };
    return {
      meta: [
        { title: `${p.name} — Solution ${p.tag} | SIMSOFT` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.name} — SIMSOFT` },
        { property: "og:description", content: p.tagline },
      ],
    };
  },
  loader: ({ params }) => {
    if (!getProduct(params.slug)) throw notFound();
    return {};
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-8">
      <div className="text-center">
        <p className="text-sm font-semibold text-[var(--electric)]">404</p>
        <h1 className="mt-2 text-3xl font-bold">Produit introuvable</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-electric px-5 h-11 text-white font-semibold">
          <ArrowLeft className="size-4" /> Retour à l'accueil
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="p-8 text-center">
      <p>{error.message}</p>
      <button onClick={reset} className="underline">Réessayer</button>
    </div>
  ),
  component: ProductPage,
});

const ICONS: Record<string, React.ReactNode> = {
  Boxes: <Boxes className="size-5" />,
  Wrench: <Wrench className="size-5" />,
  LineChart: <LineChart className="size-5" />,
  LayoutGrid: <LayoutGrid className="size-5" />,
  Cpu: <Cpu className="size-5" />,
  Headphones: <Headphones className="size-5" />,
  Truck: <Truck className="size-5" />,
  Globe2: <Globe2 className="size-5" />,
  ShieldCheck: <ShieldCheck className="size-5" />,
  Zap: <Zap className="size-5" />,
  Award: <Award className="size-5" />,
  Sparkles: <Sparkles className="size-5" />,
};

function ProductPage() {
  const { slug } = useParams({ from: "/produits/$slug" });
  const product = getProduct(slug)!;
  const { prev, next } = getAdjacent(slug);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased animate-rise">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="grid size-8 place-items-center rounded-xl bg-gradient-electric text-white shadow-glow">
              <Sparkles className="size-4" />
            </span>
            <span>SIMSOFT</span>
          </Link>
          <nav className="ml-auto hidden md:flex gap-1 text-sm">
            <Link to="/" className="rounded-lg px-3 py-2 hover:bg-muted">Accueil</Link>
            <Link to="/" hash="solutions" className="rounded-lg px-3 py-2 hover:bg-muted">Solutions</Link>
            <Link to="/" hash="contact" className="rounded-lg px-3 py-2 hover:bg-muted">Contact</Link>
          </nav>
          <Link
            to="/"
            hash="contact"
            className="inline-flex h-9 items-center rounded-lg bg-gradient-electric px-4 text-sm font-semibold text-white shadow-glow"
          >
            Demander une démo
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Accueil</Link>
          <ChevronRight className="size-3" />
          <Link to="/" hash="solutions" className="hover:text-foreground">Solutions</Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${product.hero} opacity-10`} />
        <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold backdrop-blur">
              <span className="size-1.5 rounded-full bg-[var(--electric)] animate-pulse-glow" />
              Solution {product.tag}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              {product.name}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {product.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-electric px-6 text-sm font-semibold text-white shadow-glow hover:brightness-110"
              >
                Demander une démo <ArrowRight className="size-4" />
              </Link>
              <a
                href="#features"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-background/70 px-6 text-sm font-semibold backdrop-blur hover:bg-background"
              >
                Voir les fonctionnalités
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <HeroBanner product={product} />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <Reveal>
            <p className="text-sm font-semibold text-[var(--electric)]">Vue d'ensemble</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">À propos de {product.name}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{product.overview}</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-[var(--electric)] uppercase tracking-wider">Objectifs</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {product.objectives.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-electric text-white text-[10px]">✓</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-[var(--electric)] uppercase tracking-wider">Entreprises cibles</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {product.targets.map((t) => (
                  <li key={t} className="rounded-full bg-muted px-3 py-1.5 text-xs font-semibold">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[var(--electric)]">Fonctionnalités</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Tout ce qu'il faut pour <span className="text-gradient">réussir</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 50}>
                <div className="group h-full rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-glow">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-electric text-white shadow-glow">
                    {ICONS[f.icon] ?? <Sparkles className="size-5" />}
                  </span>
                  <h3 className="mt-4 font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS GALLERY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold text-[var(--electric)]">Captures d'écran</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Aperçu de l'interface
            </h2>
          </Reveal>
          <div className="mt-10 relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
              <Screenshot kind={product.screenshots[carouselIdx].kind} title={product.screenshots[carouselIdx].title} large onClick={() => setLightbox(carouselIdx)} />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              {product.screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === carouselIdx ? "w-8 bg-[var(--electric)]" : "w-2 bg-muted-foreground/30"}`}
                  aria-label={s.title}
                />
              ))}
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {product.screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { setCarouselIdx(i); setLightbox(i); }}
                  className={`group overflow-hidden rounded-xl border-2 transition ${i === carouselIdx ? "border-[var(--electric)]" : "border-border hover:border-[var(--electric)]/50"}`}
                >
                  <Screenshot kind={s.kind} title={s.title} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm grid place-items-center p-6 animate-rise"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="size-5" />
          </button>
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <Screenshot kind={product.screenshots[lightbox].kind} title={product.screenshots[lightbox].title} large />
            </div>
            <p className="mt-4 text-center text-white text-sm">{product.screenshots[lightbox].title}</p>
          </div>
        </div>
      )}

      {/* BENEFITS */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold text-[var(--electric)]">Bénéfices</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Un impact mesurable sur votre business
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <p className="text-2xl font-extrabold text-gradient">{b.title}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold text-[var(--electric)]">Cas d'usage</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Adapté à votre secteur
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {product.useCases.map((u, i) => (
              <Reveal key={u.industry} delay={i * 70}>
                <div className="rounded-2xl border border-border bg-card p-6 h-full">
                  <span className="inline-flex items-center rounded-full bg-gradient-electric/10 px-3 py-1 text-xs font-bold text-[var(--electric)]">
                    {u.industry}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed">{u.scenario}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-br from-[var(--navy-deep)] to-[oklch(0.22_0.06_260)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {product.stats.map((s) => (
            <Reveal key={s.label}>
              <p className="text-4xl sm:text-5xl font-extrabold">
                <Counter end={s.value} suffix={s.suffix ?? ""} />
              </p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold text-[var(--electric)]">FAQ</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Questions fréquentes
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {product.faq.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold text-[var(--electric)]">Solutions associées</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Explorer d'autres produits
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/produits/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{p.tag}</span>
                  <h3 className="mt-2 text-lg font-bold group-hover:text-[var(--electric)]">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--electric)] group-hover:gap-2.5 transition-all">
                    Découvrir <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--navy-deep)] to-[var(--electric)] p-10 sm:p-14 text-white">
            <div className="absolute -right-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight max-w-2xl">
              Prêt à déployer {product.name} dans votre entreprise ?
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Nos experts vous accompagnent du cadrage à la mise en production.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/" hash="contact" className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[var(--navy-deep)] hover:bg-white/90">
                Réserver une démonstration <ArrowRight className="size-4" />
              </Link>
              <Link to="/" hash="contact" className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                <Phone className="size-4" /> Contacter un expert
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><Phone className="size-4" /> +216 71 000 000</span>
              <span className="inline-flex items-center gap-2"><Mail className="size-4" /> contact@simsoft.tn</span>
            </div>
          </div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="py-12 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-2">
          {prev && (
            <Link
              to="/produits/$slug"
              params={{ slug: prev.slug }}
              className="group rounded-2xl border border-border bg-card p-5 flex items-center gap-4 hover:shadow-glow transition"
            >
              <ArrowLeft className="size-5 text-muted-foreground group-hover:-translate-x-1 transition" />
              <div>
                <p className="text-xs text-muted-foreground">Précédent</p>
                <p className="font-bold group-hover:text-[var(--electric)]">{prev.name}</p>
              </div>
            </Link>
          )}
          {next && (
            <Link
              to="/produits/$slug"
              params={{ slug: next.slug }}
              className="group rounded-2xl border border-border bg-card p-5 flex items-center gap-4 justify-end text-right hover:shadow-glow transition sm:ml-auto sm:w-full"
            >
              <div>
                <p className="text-xs text-muted-foreground">Suivant</p>
                <p className="font-bold group-hover:text-[var(--electric)]">{next.name}</p>
              </div>
              <ArrowRight className="size-5 text-muted-foreground group-hover:translate-x-1 transition" />
            </Link>
          )}
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SIMSOFT. Tous droits réservés.
      </footer>
    </div>
  );
}

/* ------------ FAQ ------------ */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold hover:bg-muted/50"
      >
        {q}
        <ChevronRight className={`size-4 shrink-0 transition ${open ? "rotate-90 text-[var(--electric)]" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}

/* ------------ Hero banner illustration ------------ */
function HeroBanner({ product }: { product: ReturnType<typeof getProduct> & object }) {
  return (
    <div className="relative">
      <div aria-hidden className={`absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br ${product.hero} opacity-40 blur-3xl`} />
      <div className="glass rounded-3xl p-5 shadow-glow">
        <div className="flex items-center gap-1.5 px-1 pb-3">
          <span className="size-2.5 rounded-full bg-[oklch(0.7_0.18_25)]" />
          <span className="size-2.5 rounded-full bg-[oklch(0.82_0.16_85)]" />
          <span className="size-2.5 rounded-full bg-[oklch(0.74_0.18_150)]" />
          <div className="mx-auto rounded-md bg-muted px-3 py-0.5 text-[10px] text-muted-foreground">
            simsoft.cloud / {product.slug}
          </div>
        </div>
        <Screenshot kind={product.screenshots[0].kind} title={product.screenshots[0].title} large />
      </div>
    </div>
  );
}

/* ------------ Screenshot SVG mock ------------ */
function Screenshot({
  kind,
  title,
  large = false,
  onClick,
}: {
  kind: "crm" | "erp" | "gmao" | "pos" | "code" | "support";
  title: string;
  large?: boolean;
  onClick?: () => void;
}) {
  const h = large ? "h-[340px] sm:h-[420px]" : "h-44";
  return (
    <div onClick={onClick} className={`relative w-full ${h} bg-gradient-to-br from-[oklch(0.98_0.005_250)] to-[oklch(0.94_0.02_250)] dark:from-[oklch(0.22_0.04_255)] dark:to-[oklch(0.16_0.03_255)] overflow-hidden ${onClick ? "cursor-zoom-in" : ""}`}>
      <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.21 255)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.62 0.21 255)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* sidebar */}
        <rect x="0" y="0" width="120" height="360" fill="oklch(0.97 0.01 250)" />
        {[40, 70, 100, 130, 160].map((y) => (
          <rect key={y} x="14" y={y} width="92" height="10" rx="3" fill="oklch(0.9 0.015 250)" />
        ))}
        <rect x="14" y="40" width="92" height="10" rx="3" fill="oklch(0.62 0.21 255)" />
        {/* topbar */}
        <rect x="120" y="0" width="480" height="36" fill="oklch(0.99 0.005 250)" />
        <rect x="140" y="12" width="160" height="12" rx="6" fill="oklch(0.92 0.01 250)" />
        <circle cx="568" cy="18" r="8" fill="oklch(0.62 0.21 255)" />

        {kind === "crm" && <CRM />}
        {kind === "erp" && <ERP />}
        {kind === "gmao" && <GMAO />}
        {kind === "pos" && <POS />}
        {kind === "code" && <CodeView />}
        {kind === "support" && <Support />}
      </svg>
      <span className="absolute bottom-3 left-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{title}</span>
    </div>
  );
}

function CRM() {
  return (
    <>
      {[0, 1, 2, 3].map((c) => (
        <g key={c}>
          <rect x={140 + c * 110} y={56} width="100" height="280" rx="10" fill="oklch(0.96 0.01 250)" />
          <rect x={150 + c * 110} y={66} width="60" height="10" rx="3" fill="oklch(0.62 0.21 255)" />
          {[0, 1, 2, 3].map((r) => (
            <g key={r}>
              <rect x={150 + c * 110} y={86 + r * 56} width="80" height="48" rx="6" fill="white" stroke="oklch(0.92 0.01 250)" />
              <rect x={158 + c * 110} y={94 + r * 56} width="50" height="6" rx="3" fill="oklch(0.86 0.02 250)" />
              <rect x={158 + c * 110} y={106 + r * 56} width="34" height="5" rx="2" fill="oklch(0.92 0.015 250)" />
              <circle cx={218 + c * 110} cy={122 + r * 56} r="5" fill={r % 2 ? "oklch(0.74 0.16 145)" : "oklch(0.62 0.21 255)"} />
            </g>
          ))}
        </g>
      ))}
    </>
  );
}

function ERP() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={140 + i * 160} y={56} width="150" height="80" rx="10" fill="white" stroke="oklch(0.92 0.01 250)" />
          <rect x={152 + i * 160} y={68} width="60" height="6" rx="3" fill="oklch(0.86 0.02 250)" />
          <text x={152 + i * 160} y={108} fontSize="22" fontWeight="800" fill="oklch(0.3 0.05 255)">
            {["€842K", "1 284", "+18%"][i]}
          </text>
        </g>
      ))}
      <rect x="140" y="150" width="310" height="180" rx="12" fill="white" stroke="oklch(0.92 0.01 250)" />
      <path d="M150,300 C200,260 250,280 300,240 C350,200 400,220 450,180 L450,320 L150,320 Z" fill="url(#g1)" />
      <path d="M150,300 C200,260 250,280 300,240 C350,200 400,220 450,180" fill="none" stroke="oklch(0.62 0.21 255)" strokeWidth="2.5" />
      <rect x="470" y="150" width="120" height="180" rx="12" fill="white" stroke="oklch(0.92 0.01 250)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={480} y={170 + i * 30} width={100 - i * 12} height="14" rx="3" fill={i === 0 ? "oklch(0.62 0.21 255)" : "oklch(0.9 0.015 250)"} />
      ))}
    </>
  );
}

function GMAO() {
  return (
    <>
      <rect x="140" y="56" width="450" height="40" rx="8" fill="white" stroke="oklch(0.92 0.01 250)" />
      <rect x="152" y="68" width="120" height="14" rx="3" fill="oklch(0.62 0.21 255)" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x="140" y={110 + i * 36} width="450" height="30" rx="6" fill={i % 2 ? "oklch(0.97 0.005 250)" : "white"} stroke="oklch(0.94 0.01 250)" />
          <circle cx="155" cy={125 + i * 36} r="6" fill={["oklch(0.74 0.16 145)", "oklch(0.82 0.16 85)", "oklch(0.7 0.18 25)", "oklch(0.62 0.21 255)", "oklch(0.74 0.16 145)", "oklch(0.82 0.16 85)"][i]} />
          <rect x="170" y={120 + i * 36} width="120" height="10" rx="3" fill="oklch(0.4 0.04 255)" />
          <rect x="310" y={120 + i * 36} width="80" height="10" rx="3" fill="oklch(0.9 0.015 250)" />
          <rect x="410" y={120 + i * 36} width="60" height="10" rx="3" fill="oklch(0.9 0.015 250)" />
          <rect x="500" y={120 + i * 36} width="70" height="10" rx="3" fill="oklch(0.62 0.21 255)" opacity={0.6} />
        </g>
      ))}
    </>
  );
}

function POS() {
  return (
    <>
      <rect x="140" y="56" width="290" height="280" rx="10" fill="white" stroke="oklch(0.92 0.01 250)" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <g key={`${r}-${c}`}>
            <rect x={150 + c * 68} y={66 + r * 90} width="60" height="82" rx="8" fill={(r + c) % 2 ? "oklch(0.62 0.21 255)" : "oklch(0.96 0.015 250)"} />
            <rect x={156 + c * 68} y={130 + r * 90} width="40" height="8" rx="2" fill={(r + c) % 2 ? "white" : "oklch(0.5 0.04 255)"} opacity="0.9" />
          </g>
        )),
      )}
      <rect x="450" y="56" width="140" height="280" rx="10" fill="oklch(0.97 0.01 250)" />
      <rect x="462" y="68" width="116" height="40" rx="6" fill="white" />
      <text x="470" y="94" fontSize="18" fontWeight="800" fill="oklch(0.3 0.05 255)">€ 42.80</text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x="462" y={120 + i * 30} width="116" height="24" rx="4" fill="white" stroke="oklch(0.92 0.01 250)" />
      ))}
      <rect x="462" y="290" width="116" height="36" rx="8" fill="oklch(0.62 0.21 255)" />
      <text x="488" y="313" fontSize="12" fontWeight="700" fill="white">Encaisser</text>
    </>
  );
}

function CodeView() {
  return (
    <>
      <rect x="140" y="56" width="450" height="280" rx="10" fill="oklch(0.17 0.03 255)" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <g key={i}>
          <text x="155" y={84 + i * 24} fontSize="11" fill="oklch(0.5 0.08 255)" fontFamily="monospace">
            {String(i + 1).padStart(2, "0")}
          </text>
          <rect x="180" y={74 + i * 24} width={[120, 180, 220, 90, 200, 160, 240, 100, 180, 150][i]} height="10" rx="2" fill={[ "oklch(0.78 0.13 215)", "oklch(0.85 0.15 110)", "oklch(0.7 0.16 320)", "oklch(0.78 0.13 215)", "oklch(0.95 0.01 250)", "oklch(0.85 0.15 110)", "oklch(0.7 0.16 320)", "oklch(0.78 0.13 215)", "oklch(0.95 0.01 250)", "oklch(0.85 0.15 110)"][i]} />
        </g>
      ))}
    </>
  );
}

function Support() {
  return (
    <>
      <rect x="140" y="56" width="280" height="280" rx="10" fill="white" stroke="oklch(0.92 0.01 250)" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="160" cy={80 + i * 60} r="14" fill="oklch(0.86 0.04 250)" />
          <rect x="184" y={70 + i * 60} width="220" height="38" rx="10" fill={i % 2 ? "oklch(0.62 0.21 255)" : "oklch(0.95 0.01 250)"} />
          <rect x="194" y={82 + i * 60} width={i % 2 ? 160 : 140} height="6" rx="2" fill={i % 2 ? "white" : "oklch(0.5 0.04 255)"} opacity="0.8" />
          <rect x="194" y={94 + i * 60} width={i % 2 ? 100 : 120} height="6" rx="2" fill={i % 2 ? "white" : "oklch(0.6 0.04 255)"} opacity="0.6" />
        </g>
      ))}
      <rect x="440" y="56" width="150" height="280" rx="10" fill="oklch(0.97 0.01 250)" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="452" y={70 + i * 60} width="126" height="50" rx="8" fill="white" />
          <rect x="462" y={82 + i * 60} width="80" height="8" rx="2" fill="oklch(0.62 0.21 255)" />
          <rect x="462" y={98 + i * 60} width="100" height="6" rx="2" fill="oklch(0.9 0.015 250)" />
        </g>
      ))}
    </>
  );
}
