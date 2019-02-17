import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector
} from '@angular/core';
import {ModalComponent} from '../components/modal/modal.component';
import {Subject} from 'rxjs';


@Injectable()
export class ModalService {

  instance: ModalComponent;

  onCloseModal: Subject<any>;

  componentRef: ComponentRef<any>;
  factoryResolver: ComponentFactoryResolver;

  constructor(
    // private uiStoreService: UIStoreService,
    private injector: Injector,
    @Inject(ComponentFactoryResolver) factoryResolver,
    private appRef: ApplicationRef,
  ) {
    this.factoryResolver = factoryResolver;
  }

  open(componentType) {
    // 1. Create a component reference from the component
    this.componentRef = this.factoryResolver
      .resolveComponentFactory(ModalComponent)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    this.instance = this.componentRef.instance;

    // 3. Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    this.instance.viewInit.subscribe(() => {
      this.instance.setComponent(componentType);
    });

    this.onCloseModal = this.instance.closeModal;

    this.instance.closeModal.subscribe(() => {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.instance = null;
    });
  }
}
