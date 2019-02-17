import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IUslugaItem} from '../../models/usluga.model';


@Component({
  selector: 'usluga-item',
  templateUrl: './usluga-item.component.html',
  styleUrls: ['./usluga-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UslugaItemComponent {

  @Input() public item: IUslugaItem;

  @Output() uslugaClick = new EventEmitter<IUslugaItem>();

  constructor() {}

  handleUslugaClick() {
    this.uslugaClick.emit(this.item);
  }

}
