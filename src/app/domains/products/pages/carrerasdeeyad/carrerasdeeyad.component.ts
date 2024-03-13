import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';


@Component({
  selector: 'app-carrerasdeeyad',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './carrerasdeeyad.component.html',
  styleUrl: './carrerasdeeyad.component.css'
})
export class CarrerasdeeyadComponent {

}
