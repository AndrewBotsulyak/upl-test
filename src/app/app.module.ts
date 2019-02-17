import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from '../shared/shared.module';
import {CanActivateGuard} from './uslugi/services/can-activate.guard';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NoRouteFoundModule} from './error/404/no-route-found.module';
import {ServerErrorModule} from './error/505/server-error.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpErrorInterceptor} from '../shared/services/errors-handler-http.service';
import {AuthApiService} from './uslugi/services/auth-api.service';
import {RootStoreModule} from './core-store/core-store.module';
import {ModalService} from './layouts/services/modal.service';
import {LayoutsModule} from './layouts/layouts.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,

    StoreDevtoolsModule.instrument(),
    RootStoreModule,

    AppRoutingModule,
    NoRouteFoundModule,
    ServerErrorModule,

    AuthModule,
    LayoutsModule

  ],
  providers: [
    CanActivateGuard,
    AuthApiService,
    ModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
