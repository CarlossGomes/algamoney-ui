import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MegaMenuModule } from 'primeng/megamenu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { AppComponent } from './app.component';
import { LancamentoCadastroComponent } from './lancamento/pages/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamento/pages/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { CadastroPessoaComponent } from './pessoa/pages/cadastro-pessoa/cadastro-pessoa.component';
import { PesquisarPessoaComponent } from './pessoa/pages/pesquisar-pessoa/pesquisar-pessoa.component';
import { MessageComponent } from './shared/message/message.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LancamentosGridComponent } from './lancamento/pages/lancamentos-grid/lancamentos-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PesquisarPessoaComponent,
    LancamentoCadastroComponent,
    CadastroPessoaComponent,
    MessageComponent,
    LancamentosGridComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    MegaMenuModule,
    TooltipModule,
    SidebarModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
