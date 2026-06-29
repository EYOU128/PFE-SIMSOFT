import {
  Component,
  Input,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span #el>{{ prefix }}{{ displayValue | number: '1.0-0' : 'fr-FR' }}{{ suffix }}</span>`,
  imports: [DecimalPipe],
})
export class CounterComponent implements AfterViewInit, OnDestroy {
  @Input() end = 0;
  @Input() suffix = '';
  @Input() prefix = '';
  @Input() duration = 1600;
  @ViewChild('el') elRef!: ElementRef<HTMLSpanElement>;

  displayValue = 0;
  private observer: IntersectionObserver | null = null;
  private started = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.started) {
          this.started = true;
          this.animate();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    this.observer.observe(this.elRef.nativeElement);
  }

  private animate(): void {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / this.duration);
      const eased = 1 - Math.pow(1 - p, 3);
      this.displayValue = Math.round(this.end * eased);
      this.cdr.markForCheck();
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
