import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { YesNoButtonGroupOptionsEnum } from './shared/components/yes-no-button-group/yes-no-group-options.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acessibilidade';

  public formGroup!: FormGroup;
  public yesNoAnswer: YesNoButtonGroupOptionsEnum = YesNoButtonGroupOptionsEnum.NO;

  constructor(
    private readonly _formBuilder: FormBuilder
  ) {
    this.formGroup = _formBuilder.group({
      yesNoAnswer: [{
        value: 'no',
        disabled: true
      }]
    })
  }

  public onSubmit(): void {
    console.log(this.formGroup.value)
  }
}
