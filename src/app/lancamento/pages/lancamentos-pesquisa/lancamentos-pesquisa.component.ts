import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  public lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 6, 30),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2017, 6, 10),
      dataPagamento: new Date(2017, 6, 9), valor: 80000, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2017, 7, 200),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda'
    }
  ]

}
