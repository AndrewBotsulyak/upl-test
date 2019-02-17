import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from '../../models/usluga.model';


@Component({
  selector: 'category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryItemComponent {

  @Input() public item: ICategory;

  @Output() categoryClick = new EventEmitter<ICategory>();

  constructor() {}

  handleCategoryClick() {
    this.categoryClick.emit(this.item);
  }

}
