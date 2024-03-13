import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';


@Component({
  selector: 'app-carrerasdeea',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './carrerasdeea.component.html',
  styleUrl: './carrerasdeea.component.css'
})
export class CarrerasdeeaComponent {

}
