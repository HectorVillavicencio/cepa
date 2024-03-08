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
  @Input({required: true}) notice!: Notice;

  constructor(private router: Router) {}

  redireccionar(permalink: string): void {
    window.location.href = permalink
  }
}

  
