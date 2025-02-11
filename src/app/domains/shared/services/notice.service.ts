import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Notice } from '../model/notice.model';
import { DataModel } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private http = inject(HttpClient)

  token = 'EAAQcHHxyzWcBOzxBoUCFjYav8mc3SGPU7BZANkI3JoxqH7OntzBGWUL5iwAiVBVfGJILDWZBh0ZCeOSboFe62ubbZCwcJCVDmRk6GEFdTSXAZCd6YZCPe6MY3RFif5pvn0G4a7J3IbXHDZAMJZBGqSFjqkgvK1ALVGIpGPpZBAfJ6XIJQguA850uY2uKG';
  url ='https://graph.instagram.com/me/media?fields=media_url,permalink,caption&access_token=${token}'
  constructor() { }

prueba = 'https://graph.instagram.com/v21.0/me/media?fields=media_url,permalink,caption&access_token=IGAAcazgHdJUpBZAE8zdW5aY2dPRFRnX0hlRGdnTEctWHRhWGtQYVpIbjd3aTJHYl9Cai16SU1mZA1U2c25yMlRudVFfZADBUTlh6elVuTlk5aU5CRU0wM1dXNWh3QWtFZAFdxVFd6TFY3THhQbEkwXzhZAUTFpeWYwQjdJVGM4ekl0TQZDZD'

  getproduct(){
    return this.http.get<DataModel>(this.prueba);
  };


}

