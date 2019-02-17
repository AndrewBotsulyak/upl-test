import {ApplicationRef, Component, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injector, OnInit} from '@angular/core';
// import {UIStoreService} from '../../../core-store/ui/ui-store.service';
import {ModalComponent} from '../../components/modal/modal.component';
import {ModalService} from '../../services/modal.service';
import {LoginContainerComponent} from '../../../auth/containers/login/login-container.component';
import {RegisterContainerComponent} from '../../../auth/containers/rigister/register-container.component';


@Component({
  selector: 'content-container-layout',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {

  componentRef: ComponentRef<any>;
  factoryResolver: ComponentFactoryResolver;

  isLoginOpen: boolean;
  isRegisterOpen: boolean;

  constructor(
    // private uiStoreService: UIStoreService,
    private injector: Injector,
    private appRef: ApplicationRef,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    // this.uiStoreService.getLoginModalState().subscribe(l => this.isLoginOpen = l);
    // this.uiStoreService.getRegisterModalState().subscribe(r => this.isRegisterOpen = r);
  }

  handleLoginClick() {
    this.modalService.open(LoginContainerComponent);
  }

  handleRegisterClick() {
    this.modalService.open(RegisterContainerComponent);
  }

  appendComponentToBody(conponentType) {
    // 1. Create a component reference from the component
    this.componentRef = this.factoryResolver
      .resolveComponentFactory(ModalComponent)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    // this.helperComponent = this.componentRef.instance;
    // this.helperComponent.setType(this.helper);
    //
    // this.helperComponent.closeHelper.subscribe(() => {
    //   this.appRef.detachView(this.componentRef.hostView);
    //   this.componentRef.destroy();
    //   this.helperComponent = null;
    // });

  }

}
