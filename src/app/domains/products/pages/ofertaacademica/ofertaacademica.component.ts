import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';


@Component({
  selector: 'app-ofertaacademica',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ofertaacademica.component.html',
  styleUrl: './ofertaacademica.component.css'
})
export class OfertaacademicaComponent {

}
