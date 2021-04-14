import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  public pesquisar(filtro: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    let params = new HttpParams();

    params = params.set('page', filtro.pagina);
    params = params.set('size', filtro.itensPorPagina);


    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}`, { headers, params });
  }

  public listarTodas(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(`${this.pessoasUrl}`, { headers });
  }

  public excluir(codigo: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete(`${this.pessoasUrl}/${codigo}`, { headers });
  }

  public alterarStatus(codigo: any, ativo: boolean): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==', 'Content-Type': 'application/json' });
    return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers });
  }
}
