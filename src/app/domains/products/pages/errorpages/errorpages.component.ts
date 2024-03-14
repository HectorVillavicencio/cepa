import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-errorpages',
  standalone: true,
  imports: [],
  templateUrl: './errorpages.component.html',
  styleUrl: './errorpages.component.css'
})
export class ErrorpagesComponent {

  redireccionar(): void {
    window.location.href = "index.html"
  }
}
