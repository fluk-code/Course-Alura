import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { YesNoButtonGroupOptionsEnum } from './yes-no-group-options.enum';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
      // Utilizamos o fowardRef quando precisamos prover uma classe que ainda nao existe
      // como nesse caso vamos prover o proprio componente que esta sendo decorado 
      // O Angular com fowerdRef declara o injection token (nesse caso NG_VALUE_ACCESSOR) mas nao o define.
      // O Angular irá aguardar que a referencia (YesNoButtonGroupComponent) seja criada
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() public value!: YesNoButtonGroupOptionsEnum.YES | YesNoButtonGroupOptionsEnum.NO;
  @Input() public label!: string;
  @Input() public disabled = false; 

  @Output() public valueChange = new EventEmitter<YesNoButtonGroupOptionsEnum.YES | YesNoButtonGroupOptionsEnum.NO>();

  public id!: string;
  public options = YesNoButtonGroupOptionsEnum;

  public onChange =  (value: YesNoButtonGroupOptionsEnum) => {};
  public onTouched =  () => {};

  constructor(
    readonly _uniqueIdService: UniqueIdService 
  ) {
    this.id = _uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
  }

  ngOnInit(): void {
  }

  writeValue(value: YesNoButtonGroupOptionsEnum): void {
    /* É chamado quando acontece uma mudança do modelo da view */
    /* Quando o metorodo é chamado de emitir um sinal que houve uma mudança */
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  registerOnChange(fn: (value: YesNoButtonGroupOptionsEnum) => void): void {
    /* É chamado quando acontece uma mudança  */
    /* Recebe uma funçao como paramentro, essa funcao deve ser passada para writeValue */
    this.onChange = fn;
  }
  
  registerOnTouched(fn: () => void): void {
    /* É chamado quando o componente é tocado, ganha foco  */
    /* Recebe uma funçao como paramentro, essa funcao deve ser passada para writeValue */
     this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


  public activate(value: YesNoButtonGroupOptionsEnum.YES | YesNoButtonGroupOptionsEnum.NO): void {
    this.writeValue(value);
  }
}
