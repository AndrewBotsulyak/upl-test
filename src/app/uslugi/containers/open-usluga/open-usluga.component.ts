import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUslugaItem} from '../../models/usluga.model';
import {Observable} from 'rxjs';
import {UslugiStoreService} from '../../store/uslugi-store.service';


@Component({
  selector: 'open-usluga',
  templateUrl: './open-usluga.component.html',
  styleUrls: ['./open-usluga.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpenUslugaComponent implements OnInit {

  @Input() public item: IUslugaItem;

  @Output() uslugaClick = new EventEmitter<IUslugaItem>();


  activeUsluga$: Observable<IUslugaItem>;

  constructor(
    private uslugiStoreService: UslugiStoreService,
  ) {}

  ngOnInit() {
    this.activeUsluga$ = this.uslugiStoreService.getActiveUsluga();
  }

  handleUslugaClick() {
    this.uslugaClick.emit(this.item);
  }

}
