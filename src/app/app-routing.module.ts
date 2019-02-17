import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule} from '@angular/router';
import {NoRouteFoundComponent} from './error/404/no-route-found.component';
import {ServerErrorComponent} from './error/505/server-error.component';
import {ContentContainerComponent} from './layouts/containers/content/content-container.component';
import {CanActivateGuard} from './uslugi/services/can-activate.guard';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/onas'
  },
  {
    path: '505',
    component: ServerErrorComponent
  },
  {
    path: '404',
    component: NoRouteFoundComponent
  },
  {
    path: 'onas',
    component: ContentContainerComponent,
    loadChildren: './onas/onas.module#OnasModule',
  },
  {
    path: 'faq',
    component: ContentContainerComponent,
    loadChildren: './faq/faq.module#FaqModule',
  },
  {
    path: 'bezopasnost',
    component: ContentContainerComponent,
    loadChildren: './bezopasnost/bezopasnost.module#BezopasnostModule',
  },
  {
    path: 'legal',
    component: ContentContainerComponent,
    loadChildren: './legal/legal.module#LegalModule',
  },
  {
    path: 'tarif',
    component: ContentContainerComponent,
    loadChildren: './tarif/tarif.module#TarifModule',
  },
  // лучше конечно роут вида /categories/:categoryId/... - тогда можно избежать костлей
  // внутри CanActivateGuard происходит логика поиска нужных урлов
  {
    path: ':categoryId',
    component: ContentContainerComponent,
    canActivate: [CanActivateGuard],
    loadChildren: './uslugi/uslugi.module#UslugiModule'
  },
  {
    path: '**',
    redirectTo: `/404`
  },
];

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
