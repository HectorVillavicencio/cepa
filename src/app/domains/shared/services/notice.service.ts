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

prueba = 'https://graph.instagram.com/me/media?fields=media_url,permalink,caption&access_token=EAAQcHHxyzWcBOyzCaExORSsKjou3SdIZCzhAuWLA7yeWXHyMjWgYgFsjN9xJNimYbAhZAwADEw7bM1d9rk9mrhG2t2iYoZCpxlBKJpgjxZB4iMLPfGZCP0bZBKasPILUwZB4qtA5Lhd7pwdZBcPpZBHx2NgvMRM2OM7qZCDb2suW0ShorgFvcgsgq4jOZCE'

  getproduct(){
    return this.http.get<DataModel>(this.prueba);
  };


}

