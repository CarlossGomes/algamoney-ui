import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { CategoriaService } from './../../../categoria/services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];

  pessoas = [];

  constructor(private categoriaService: CategoriaService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.carregarCategorias();
  }

  public carregarCategorias(): object {
    return this.categoriaService.listarTodas().subscribe(
      response => {
        this.categorias = response.map(c => ({ label: c.nome, value: c.codigo }));
      }, erro => {
        this.errorHandler.handle(erro);
      }
    )
  }

}
