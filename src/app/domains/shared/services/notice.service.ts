import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Notice } from '../model/notice.model';
import { DataModel } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private http = inject(HttpClient)

  token = 'IGQWRNck16QlR6MTFSc2VBTWt6QUdGMk1XUTdybTdXUzhvLWJTZAmVXSDNGSlc4RENEY2JzVXEydEpKS3NDTDlrYnVUYnNWM1lpY3EtZA09lLXBna3pLSXpSZA0dnNFNhTkx3RjBUV25SYm01YjFZAY01xQTlra3JUa28ZD';
  url ='https://graph.instagram.com/me/media?fields=media_url,permalink,caption&access_token=${token}'
  constructor() { }

  prueba = 'https://graph.instagram.com/me/media?fields=media_url,permalink,caption&access_token=IGQWRQejc2UUpTUTltbDJ3aTdHcDVtY1d6VlpiRXRfeU1vMTdHQTZAScHREV2ZAxd2hGZAWxwbXYybjQ2bUxRRWZARVWdSeGZAjUGJndW5aR19sb0V1QXF6aDF3empJUXVaampTVXd5RG5HSTBmTVJ0a2pXdnA0ZAmdpOFUZD'

  getproduct(){
    return this.http.get<DataModel>(this.prueba);
  };


}

