import { PessoaService } from './../../services/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { PessoaFiltro } from '../../services/pessoa.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-pesquisar-pessoa',
  templateUrl: './pesquisar-pessoa.component.html',
  styleUrls: ['./pesquisar-pessoa.component.css']
})
export class PesquisarPessoaComponent implements OnInit {


  totalRegistros = 0;
  filtro = new PessoaFiltro();
  public pessoas = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
  }


  public pesquisar(pagina = 0): void {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisar(this.filtro).subscribe(
      response => {
        this.pessoas = response.content;

        this.totalRegistros = response.totalElements;
      }
    );
  }

  public listarTodas() {
    this.pessoaService.listarTodas().subscribe(
      response => {
        this.pessoas = response.content;
        this.totalRegistros = response.totalElements;
      }
    );
  }

  public aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
