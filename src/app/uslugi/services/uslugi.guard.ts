import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Route, Router, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {UslugiStoreService} from '../store/uslugi-store.service';
import {filter, first, map, take, tap, withLatestFrom} from 'rxjs/internal/operators';


@Injectable()
export class UslugiGuard implements CanActivate {


  constructor(
    private uslugiStoreService: UslugiStoreService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    const { categoryId, uslugaId } = route.params;

    return Observable.create((observer) => {

      this.uslugiStoreService.getActiveCategory().pipe(
        filter(data => !!data),
        filter(data => !!data.uslugi),
        take(1),
        tap(category => {
          const usluga = category.uslugi.find(u => u.url === uslugaId);

          if (!usluga) {
            this.router.navigate(['/404']);
            observer.next(false);
            return;
          }

          this.uslugiStoreService.dispatchOpenUslugaById(+usluga.id);

          observer.next(true);
        })
      ).subscribe();

    });
  }
}
