import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  public httpOptionsAuthorization = {
    headers: new HttpHeaders(
      {
        'Authorization': 'Basic ' + 'YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      }
    )
  }


  public pesquisar(): Observable<any> {
    return this.http.get(`${this.lancamentosUrl}?resumo`, this.httpOptionsAuthorization)
  }

}
