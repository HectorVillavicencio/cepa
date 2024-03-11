import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/component/footer/footer.component';
import { HeaderComponent } from '../../../shared/component/header/header.component';

@Component({
  selector: 'app-gtb',
  standalone: true,
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './gtb.component.html',
  styleUrl: './gtb.component.css'
})
export class GtbComponent {

}
