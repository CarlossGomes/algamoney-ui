import { URLSearchParams } from 'url';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Header } from 'primeng/api';

export interface LancamentoFiltro {
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  public pesquisar(filtro: any): Observable<any> {

    var params = new HttpParams();
    const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');


    if (filtro.descricao) {
      console.log("parte 1")
      params.set('descricao', filtro.descricao);
    }
    return this.http.get(`${this.lancamentosUrl}?resumo`, {headers, params});

  }

}
