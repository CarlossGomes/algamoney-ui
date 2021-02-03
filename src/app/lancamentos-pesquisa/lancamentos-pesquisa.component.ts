import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  public lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/06/2017',
      dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '20/07/2017',
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda'
    }
  ]

}
