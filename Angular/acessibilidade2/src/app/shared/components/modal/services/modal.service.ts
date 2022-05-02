import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { BodyInjectorService } from 'src/app/shared/services/body-injector.service';

import { ModalConfig } from '../interfaces/modal-config';
import { ModalComponent } from '../modal.component';
import { ModalRef } from '../models/modal-ref';

@Injectable()
export class ModalService {

  private _modalComponentFactory!: ComponentFactory<ModalComponent>;

  constructor(
    private readonly _injector: Injector,
    private readonly _bodyInjectorService: BodyInjectorService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    this._modalComponentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open<T>(config: ModalConfig<T>): ModalRef {
    console.log('open called')
    
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;

    this._bodyInjectorService.stackBeforeAppRoot(componentRef);
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;

    return modalRef;

  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this._modalComponentFactory.create(this._injector);
  }
}