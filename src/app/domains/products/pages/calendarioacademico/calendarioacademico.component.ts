import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';

@Component({
  selector: 'app-calendarioacademico',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './calendarioacademico.component.html',
  styleUrl: './calendarioacademico.component.css'
})
export class CalendarioacademicoComponent {

}
