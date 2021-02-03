import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar-pessoa',
  templateUrl: './pesquisar-pessoa.component.html',
  styleUrls: ['./pesquisar-pessoa.component.css']
})
export class PesquisarPessoaComponent  {

  public pessoas = [
    {
      nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG',
      status: true
    },
    {
      nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP',
      status: false
    },
    {
      nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC',
      status: true
    }
  ]


}
