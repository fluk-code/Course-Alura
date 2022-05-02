import { animate, style, transition, trigger } from '@angular/animations';

export const fade = trigger( // GATILHO QUE IR CRIAR A ANIMACAO
  'fade', // NOME DA ANIMACAO
  [ 
    transition(
      ':enter', [ // DEFINE SE A ANIMASAO SERA PARA ENTRAR OU SAIDA DO DOM (PSEUDO CLASES :enter e :leave)
        style({ opacity: 0  }), // ESTADO DO ESTILO ANTES DE ENTRAR NO DOM
        animate(200, style({ opacity: 1 })) // ANIMCAO QUE OCORERA NO ESTILO ( FOMULAR animate(TEMPO, ESTILO))
      ]
    ),
    transition(
      ':leave', [ // DEFINE SE A ANIMASAO SERA PARA ENTRAR OU SAIDA DO DOM (PSEUDO CLASES :enter e :leave)
        animate(500, style({ opacity: 0 })) // ANIMCAO QUE OCORERA NO ESTILO ( FOMULAR animate(TEMPO, ESTILO))
      ]
    )
  ]
);
 
// PARA UTILIZAR EM UM COMPOENTE UTILIZAR A PROPIEDADE 'animations' DENTRO DO DECORATORS COMPONENT
// @Component({
//   selector: 'app-modal',
//   templateUrl: 'modal.component.html',
//   styleUrls: ['modal.component.scss'],
//   animations: [fade]
// })

// NO SELETOR DO COMPONENT DENTRO DO HTML UTILIZAR [@fade] PARA INDICAR QUE O COMPONENTE TERA ANIMACAO
// PODEMOS ATIVAR POR ATRIBUTOS  [@fade]="active"