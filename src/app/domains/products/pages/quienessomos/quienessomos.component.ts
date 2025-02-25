import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';

@Component({
  selector: 'app-quienessomos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './quienessomos.component.html',
  styleUrl: './quienessomos.component.css'
})
export class QuienessomosComponent {

}
