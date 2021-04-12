import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
import { PesquisarPessoaComponent } from './pages/pesquisar-pessoa/pesquisar-pessoa.component';


@NgModule({
  declarations: [
    PesquisarPessoaComponent,
    CadastroPessoaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    InputMaskModule,
    SharedModule
  ],
  exports:[
    CadastroPessoaComponent,
    PesquisarPessoaComponent,
  ]
})
export class PessoaModule { }
