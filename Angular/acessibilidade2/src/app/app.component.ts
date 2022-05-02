import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef!: TemplateRef<unknown>
  
  public firstName: any = 'Felipe';
  public modalRef!: ModalRef;

  public form!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      firstName: ['Felipe', Validators.required],
      surName: [null, Validators.required],
      age: [null, Validators.required],
      info: [false]
    })
  }

  public showModal(): void {
    this.modalRef = this._modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    })
  }

  public submit(): void {
    if (this.form.valid) {
      this.modalRef.close();    
      console.log(this.form.getRawValue());
    }
  }
}
