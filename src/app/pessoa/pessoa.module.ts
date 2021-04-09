import { TooltipModule } from 'primeng/tooltip';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarPessoaComponent } from './pages/pesquisar-pessoa/pesquisar-pessoa.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';



@NgModule({
  declarations: [PesquisarPessoaComponent, CadastroPessoaComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PessoaModule { }
