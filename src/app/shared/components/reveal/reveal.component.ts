import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reveal',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      #container
      [style.transition]="'opacity 700ms ease-out, transform 700ms ease-out'"
      [style.opacity]="visible ? '1' : '0'"
      [style.transform]="visible ? 'translateY(0)' : 'translateY(24px)'"
      [class]="className"
    >
      <ng-content />
    </div>
  `,
})
export class RevealComponent implements AfterViewInit, OnDestroy {
  @Input() delay = 0;
  @Input() className = '';
  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;

  visible = false;
  private observer: IntersectionObserver | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.visible = true;
            this.cdr.markForCheck();
          }, this.delay);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    this.observer.observe(this.containerRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
