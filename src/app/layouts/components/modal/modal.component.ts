import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {AdDirective} from '../../../../shared/directives/add-host.directive';

@Component({
  selector: 'modal-wrap',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @Output() viewInit = new EventEmitter();
  @Output() closeModal = new EventEmitter();

  @ViewChild(AdDirective) adHost: AdDirective;
  @ViewChild('modal') modalRef: ElementRef;

  component;

  @HostListener('click', ['$event'])
  private onClick(evt: Event): void {
    if (this.elementRef && this.elementRef.nativeElement === evt.target) {
      this.close();
    }
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.viewInit.emit();
  }

  setComponent(component) {
    this.component = component;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    setTimeout(() => {
      this.modalRef.nativeElement.classList.add('fadeIn');
    }, 0);
  }

  handleClose() {
    this.close();
  }

  private close() {
    this.modalRef.nativeElement.classList.remove('fadeIn');
    setTimeout(() => this.closeModal.emit(), 200);
  }

}
