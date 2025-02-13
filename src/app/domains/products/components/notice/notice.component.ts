import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notice } from '../../../shared/model/notice.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css'
})
export class NoticeComponent {
  @Input() notice!: Notice;
  currentIndex: number = 0;

  getImages(): string[] {
    return this.notice.children?.data.map(media => media.media_url) || [];
  }

  nextImage() {
    if (this.currentIndex < this.getImages().length - 1) {
      this.currentIndex++;
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  redireccionar(url: string) {
    window.open(url, '_blank');
  }

  goToImage(index: number): void {
    this.currentIndex = index;
  }
}
