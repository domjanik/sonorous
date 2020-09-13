import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NgxsModule } from "@ngxs/store";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { environment } from 'src/environments/environment';

import { VoicedItemsState } from './state/voicedItems/voicedItems.state';
import { BottomMenuComponent } from './layout/bottom-menu/bottom-menu.component';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';
import * as EN from './i18n/en';
import * as PL from './i18n/pl';

import { SonorousApiModule } from "sonorous-api";
import { SonorousUiModule } from "sonorous-ui";
import { I18nModule } from "sonorous-core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, LayoutComponent, BottomMenuComponent, TopMenuComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SonorousUiModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
    I18nModule.forRoot({
      keys: {
        en: EN.default,
        pl: PL.default
      }
    }),
    SonorousApiModule,
    NgxsModule.forRoot([
      VoicedItemsState
    ]),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
      maxAge: 10,
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.userName', 'auth.sessionToken']
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
