import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/component/footer/footer.component';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-ge',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,CalendarComponent],
  templateUrl: './ge.component.html',
  styleUrl: './ge.component.css'
})
export class GeComponent {

}
