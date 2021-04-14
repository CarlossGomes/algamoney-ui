import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaService } from './pessoa/services/pessoa.service';
import { LancamentoService } from './lancamento/services/lancamento.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    LancamentoModule,
    PessoaModule
  ],
  providers: [LancamentoService, PessoaService, MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
