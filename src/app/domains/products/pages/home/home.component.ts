import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';
import { Notice } from '../../../shared/model/notice.model';
import { NoticeService } from '../../../shared/services/notice.service';
import { NoticeComponent } from '../../components/notice/notice.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent, NoticeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  notices = signal<Notice[]>([]);
  private NoticeService = inject(NoticeService);

  ngOnInit(){
    this.NoticeService.getproduct()
    .subscribe({
      next: (notices) => {
        this.notices.set(notices.data.slice(0, 10));
      },
      error: () => {
        console.error('Manquiaste rey')
      }
    })
  }

}
