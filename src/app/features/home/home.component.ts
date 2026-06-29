import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { RevealComponent } from '../../shared/components/reveal/reveal.component';
import { CounterComponent } from '../../shared/components/counter/counter.component';
import { DashboardMockComponent } from '../../shared/components/dashboard-mock/dashboard-mock.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, LucideAngularModule, RevealComponent, CounterComponent, DashboardMockComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  dark = false;
  scrolled = false;
  menuOpen = false;
  megaOpen = false;
  activeTab = 'divalto';
  faqOpen: number | null = 0;
  testimonialIdx = 0;
  chatOpen = false;
  contactSent = false;

  contactForm = { name: '', email: '', company: '', message: '' };

  products: Product[] = [];

  private testimonialTimer: ReturnType<typeof setInterval> | null = null;

  readonly showcaseTabs = [
    {
      k: 'divalto',
      name: 'Divalto',
      title: "ERP unifié pour piloter toute l'entreprise",
      features: ['Finance & comptabilité', 'Production & achats', 'CRM intégré', 'BI temps réel'],
      kpis: [{ v: '-32%', l: 'Temps de clôture' }, { v: 'x3', l: 'Productivité équipe' }, { v: '99.9%', l: 'Disponibilité' }],
    },
    {
      k: 'firstparc',
      name: 'FirstParc',
      title: 'GMAO nouvelle génération',
      features: ['Maintenance préventive', "Gestion d'actifs", 'Bons de travail mobiles', 'Indicateurs KPI'],
      kpis: [{ v: '-45%', l: 'Coût maintenance' }, { v: '+28%', l: 'Disponibilité' }, { v: '8 sem', l: 'Mise en route' }],
    },
    {
      k: 'wavesoft',
      name: 'WaveSoft',
      title: 'Gestion commerciale & comptable',
      features: ['Devis, ventes, achats', 'Compta intégrée', 'Multi-sociétés', 'Reporting avancé'],
      kpis: [{ v: '+40%', l: 'Conversion devis' }, { v: '-60%', l: 'Saisie manuelle' }, { v: '24/7', l: 'Cloud disponible' }],
    },
  ];

  readonly whyStats = [
    { v: 20, s: '+20', l: "Années d'expérience" },
    { v: 12, s: '12', l: 'Pays · présence internationale' },
    { v: 450, s: '+450', l: 'Clients ERP & GMAO' },
    { v: 99, s: '99%', l: 'Support dédié & SLA' },
  ];

  readonly processSteps = [
    { t: 'Analyse', d: 'Audit complet de vos processus et besoins métiers.' },
    { t: 'Conseil', d: 'Architecture cible, choix de la stack et roadmap.' },
    { t: 'Intégration', d: 'Paramétrage, développement et migration des données.' },
    { t: 'Formation', d: 'Accompagnement des équipes, documentation & best practices.' },
    { t: 'Support', d: "Infogérance et amélioration continue 24/7." },
  ];

  readonly testimonials = [
    {
      n: 'Karim Belkacem', r: 'DSI · Groupe Industriel',
      q: "SIMSOFT a piloté notre déploiement Divalto sur 8 sites en moins d'un an. Le ROI a été visible dès le 6e mois.",
      c: 'Manufacture+',
    },
    {
      n: 'Sonia Mahmoudi', r: 'Directrice opérations · Logistique',
      q: "FirstParc a transformé notre maintenance. Nous avons réduit nos arrêts de 45% en une saison.",
      c: 'FleetPro',
    },
    {
      n: 'Mehdi Trabelsi', r: 'CEO · Retail',
      q: "L'équipe SIMSOFT est un partenaire stratégique. Quorion + WaveSoft, une vraie révolution pour nos 24 boutiques.",
      c: 'RetailNord',
    },
  ];

  readonly faqItems = [
    { q: "Combien de temps dure une intégration ERP ?", a: "Selon le périmètre, un déploiement standard prend de 8 à 16 semaines. Pour un projet multi-sociétés ou international, comptez 4 à 9 mois." },
    { q: "Travaillez-vous en mode SaaS ou on-premise ?", a: "Les deux. Divalto, WaveSoft et FirstParc sont disponibles en cloud privé hébergé par SIMSOFT ou en installation locale." },
    { q: "Proposez-vous un support 24/7 ?", a: "Oui. Nos offres d'infogérance incluent un SLA de 99,9% avec une hotline francophone et arabophone disponible en continu." },
    { q: "Pouvez-vous migrer depuis un autre ERP ?", a: "Nous opérons régulièrement des migrations depuis SAP, Sage, Odoo et systèmes propriétaires, avec reprise complète des données historiques." },
    { q: "Quels secteurs accompagnez-vous ?", a: "Industrie, distribution, retail, logistique, services et BTP. Notre approche métier s'adapte à chaque secteur." },
  ];

  readonly marqueeLogos = [
    'Divalto', 'FirstParc', 'WaveSoft', 'Quorion', 'Sage', 'Microsoft',
    'Oracle', 'SAP', 'Odoo', 'HubSpot', 'Salesforce', 'Notion',
    'Divalto', 'FirstParc', 'WaveSoft', 'Quorion', 'Sage', 'Microsoft',
    'Oracle', 'SAP', 'Odoo', 'HubSpot', 'Salesforce', 'Notion',
  ];

  readonly footerCols = [
    { t: 'Produits', l: ['Divalto ERP', 'FirstParc', 'WaveSoft', 'Quorion POS'] },
    { t: 'Services', l: ['Intégration', 'Développement', 'Formation', 'Infogérance'] },
    { t: 'Entreprise', l: ['À propos', 'Carrières', 'Partenaires', 'Presse'] },
    { t: 'Ressources', l: ['Blog', 'Études de cas', 'Documentation', 'Support'] },
  ];

  get currentTab() {
    return this.showcaseTabs.find(t => t.k === this.activeTab)!;
  }

  get currentYear() {
    return new Date().getFullYear();
  }

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getAll();
    this.testimonialTimer = setInterval(() => {
      this.testimonialIdx = (this.testimonialIdx + 1) % this.testimonials.length;
      this.cdr.markForCheck();
    }, 6000);
  }

  ngOnDestroy(): void {
    if (this.testimonialTimer) clearInterval(this.testimonialTimer);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const wasScrolled = this.scrolled;
    this.scrolled = window.scrollY > 8;
    if (wasScrolled !== this.scrolled) this.cdr.markForCheck();
  }

  toggleDark(): void {
    this.dark = !this.dark;
    document.documentElement.classList.toggle('dark', this.dark);
  }

  smoothScroll(event: Event, id: string): void {
    const el = document.getElementById(id);
    if (el) {
      event.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
    this.menuOpen = false;
  }

  toggleFaq(i: number): void {
    this.faqOpen = this.faqOpen === i ? null : i;
  }

  setTestimonial(i: number): void {
    this.testimonialIdx = i;
  }

  submitContact(event: Event): void {
    event.preventDefault();
    const subject = encodeURIComponent(`Demande de démo — ${this.contactForm.company || this.contactForm.name}`);
    const body = encodeURIComponent(
      `Nom: ${this.contactForm.name}\nEmail: ${this.contactForm.email}\nSociété: ${this.contactForm.company}\n\n${this.contactForm.message}`,
    );
    window.location.href = `mailto:contact@simsoft.tn?subject=${subject}&body=${body}`;
    this.contactSent = true;
  }

  getTagIcon(tag: string): string {
    const map: Record<string, string> = {
      ERP: 'boxes', GMAO: 'wrench', Gestion: 'line-chart',
      POS: 'layout-grid', Custom: 'cpu', Support: 'headphones',
    };
    return map[tag] ?? 'sparkles';
  }

  getInitials(name: string): string {
    return name.split(' ').map(p => p[0]).join('');
  }

  trackBySlug(_: number, p: Product): string { return p.slug; }
}