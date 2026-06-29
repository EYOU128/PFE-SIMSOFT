import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { RevealComponent } from '../../shared/components/reveal/reveal.component';
import { CounterComponent } from '../../shared/components/counter/counter.component';
import { ScreenshotComponent } from '../../shared/components/dashboard-mock/screenshot.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealComponent, CounterComponent, ScreenshotComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product!: Product;
  prev: Product | null = null;
  next: Product | null = null;

  lightbox: number | null = null;
  carouselIdx = 0;
  faqOpen: number | null = null;

  readonly currentYear = new Date().getFullYear();

  private routeSub: ReturnType<ActivatedRoute['paramMap']['subscribe']> | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      const product = this.productService.getBySlug(slug);
      if (!product) {
        this.router.navigate(['/']);
        return;
      }
      this.product = product;
      const adj = this.productService.getAdjacent(slug);
      this.prev = adj.prev;
      this.next = adj.next;
      this.carouselIdx = 0;
      this.lightbox = null;
      this.faqOpen = null;
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      this.updateTitle();
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  private updateTitle(): void {
    document.title = `${this.product.name} — Solution ${this.product.tag} | SIMSOFT`;
  }

  toggleFaq(i: number): void {
    this.faqOpen = this.faqOpen === i ? null : i;
  }

  openLightbox(i: number): void {
    this.lightbox = i;
    this.carouselIdx = i;
  }

  closeLightbox(): void {
    this.lightbox = null;
  }

  setCarousel(i: number): void {
    this.carouselIdx = i;
  }

  getHeroGradient(): string {
    const map: Record<string, string> = {
      "from-blue-600 via-indigo-600 to-cyan-500": "#2563eb, #4f46e5, #06b6d4",
      "from-emerald-600 via-teal-600 to-cyan-500": "#059669, #0d9488, #06b6d4",
      "from-violet-600 via-purple-600 to-fuchsia-500": "#7c3aed, #9333ea, #d946ef",
      "from-amber-500 via-orange-600 to-red-500": "#f59e0b, #ea580c, #ef4444",
      "from-pink-600 via-rose-600 to-orange-500": "#db2777, #e11d48, #f97316",
      "from-sky-600 via-blue-600 to-indigo-500": "#0284c7, #2563eb, #6366f1",
    };
    return map[this.product?.hero] ?? "#2563eb, #4f46e5, #06b6d4";
  }

  get otherProducts(): Product[] {
    return this.productService.getAll()
      .filter(p => p.slug !== this.product.slug)
      .slice(0, 3);
  }
}

// Add helper method to the class
