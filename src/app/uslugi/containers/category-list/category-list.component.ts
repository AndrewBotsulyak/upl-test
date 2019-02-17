import {Component, OnDestroy, OnInit} from '@angular/core';
import {UslugiStoreService} from '../../store/uslugi-store.service';
import {ICategory, IUslugaItem} from '../../models/usluga.model';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthApiService} from '../../services/auth-api.service';


@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  categories$: Observable<ICategory[]>;
  activeCategory$: Observable<ICategory>;
  activeUsluga$: Observable<IUslugaItem>;

  destroyed$ = new Subject<boolean>();

  constructor(
    private uslugiStoreService: UslugiStoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpErrorService: AuthApiService
  ) { }

  ngOnInit() {
    this.categories$ = this.uslugiStoreService.getCategoryEntities();
    this.activeCategory$ = this.uslugiStoreService.getActiveCategory();
    this.activeUsluga$ = this.uslugiStoreService.getActiveUsluga();
  }

  handleCategoryClick(category: ICategory) {
    this.uslugiStoreService.dispatchActivateCategory(category);
    this.router.navigateByUrl(category.url);
  }

  handleUslugaClick(usluga: IUslugaItem) {
    this.router.navigate([usluga.url], {relativeTo: this.activatedRoute});
  }

  handleErrorClick() {
    this.httpErrorService.register().subscribe(() => {});
  }

  trackByFunc(index, item: ICategory) {
    return item.id ;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

}
