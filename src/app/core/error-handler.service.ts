import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService,) { }

  public handle(errorResponse: any) {
    let msg: string;

    console.log(errorResponse)
    if (errorResponse.status >= 400 || errorResponse <= 499) {
      msg = errorResponse.error[0].mensagemUsuario;
    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.log('Ocorreu um erro', errorResponse);
    }

    this.messageService.add({ severity: 'error', summary: 'Erro!', detail: msg });

  }

}
