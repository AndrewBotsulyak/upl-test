import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, GuardsCheckEnd, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap, take, takeUntil, tap} from 'rxjs/internal/operators';
import {ActivatedRouteSnapshot} from '@angular/router/src/router_state';
import {UslugiStoreService} from './uslugi/store/uslugi-store.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'uplata-test';

  destroyed$ = new Subject<boolean>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private uslugiStoreService: UslugiStoreService,
  ) {}

  ngOnInit() {
    const pathArr = [];

  //   this.router.events.pipe(
  //     tap((event) => {
  //       console.log(event);
  //     }),
  //     filter((event) => event instanceof NavigationEnd),
  //     map(() => this.activatedRoute),
  //     tap(() => {
  //       console.log(this.activatedRoute);
  //     }),
  //     filter((route) => route.params && route.params.categoryId),
  //     map((route) => {
  //
  //       const { categoryId, uslugaId } = route.params;
  //
  //       this.uslugiStoreService.getCategoryLoaded().pipe(
  //         takeUntil(this.destroyed$),
  //         filter(data => !data),
  //         tap(() => {
  //           this.uslugiStoreService.dispatchDownloadCategories();
  //         }),
  //       ).subscribe(() => {});
  //
  //
  //
  //       this.uslugiStoreService.getCategoryEntities().pipe(
  //         takeUntil(this.destroyed$),
  //         filter(data => !!data && !!data.length),
  //         take(1),
  //         tap((data) => {
  //           let category = null;
  //
  //           for (const key in data) {
  //             if (data[key].url === categoryId) {
  //               category = data[key];
  //             }
  //           }
  //
  //           if (!category) {
  //             this.destroyed$.next(true);
  //             this.router.navigateByUrl('/404');
  //             return;
  //           }
  //
  //           this.uslugiStoreService.dispatchLoadModule();
  //
  //           this.uslugiStoreService.dispatchActivateCategory(category);
  //           this.destroyed$.next(true);
  //         }),
  //       ).subscribe();
  //     }),
  //
  //     tap(route => {
  //       console.log(route);
  //     }),
  //     // mergeMap((route) => route.data),
  // )
  //     .subscribe((event) => this.titleService.setTitle(event['title']));
  }

}
