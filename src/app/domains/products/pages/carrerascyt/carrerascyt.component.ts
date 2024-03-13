import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';

@Component({
  selector: 'app-carrerascyt',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './carrerascyt.component.html',
  styleUrl: './carrerascyt.component.css'
})
export class CarrerascytComponent {

}
