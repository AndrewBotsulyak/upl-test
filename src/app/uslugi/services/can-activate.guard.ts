import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {UslugiStoreService} from '../store/uslugi-store.service';
import {filter, take, takeUntil, tap} from 'rxjs/internal/operators';


@Injectable()
export class CanActivateGuard implements CanActivate {

  destroyed$ = new Subject<boolean>();

  constructor(
    private uslugiStoreService: UslugiStoreService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    const { categoryId, uslugaId } = route.params;

    return Observable.create((observer) => {

      this.uslugiStoreService.getCategoryLoaded().pipe(
        takeUntil(this.destroyed$),
        filter(data => !data),
        tap(() => {
          this.uslugiStoreService.dispatchDownloadCategories();
        }),
      ).subscribe(() => {});



      this.uslugiStoreService.getCategoryEntities().pipe(
        takeUntil(this.destroyed$),
        filter(data => !!data && !!data.length),
        take(1),
        tap((data) => {
          let category = null;

          for (const key in data) {
            if (data[key].url === categoryId) {
              category = data[key];
            }
          }

          if (!category) {
            this.destroyed$.next(true);
            this.router.navigateByUrl('/404');
            observer.next(false);
            return;
          }

          this.uslugiStoreService.dispatchActivateCategory(category);
          observer.next(true);
          this.destroyed$.next(true);
        }),
      ).subscribe();
    });
  }
}
