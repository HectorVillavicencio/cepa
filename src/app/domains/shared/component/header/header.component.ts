import { Component, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isScrolled: boolean = false;
  private scrollListener!: () => void;
  private isTicking: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.scrollListener = this.renderer.listen('window', 'scroll', () => {
      if (!this.isTicking) {
        window.requestAnimationFrame(() => {
          this.isScrolled = window.scrollY > 50;
          this.isTicking = false;
        });
        this.isTicking = true;
      }
    });
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      this.scrollListener(); // Elimina el listener cuando el componente se destruye
    }
  }
}
