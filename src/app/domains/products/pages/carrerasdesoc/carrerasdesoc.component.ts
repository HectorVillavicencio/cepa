import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';

@Component({
  selector: 'app-carrerasdesoc',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './carrerasdesoc.component.html',
  styleUrl: './carrerasdesoc.component.css'
})
export class CarrerasdesocComponent {

}
