import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabAttributePage } from './tab-attribute/tab-attribute.page';
import { TabFilterPage } from './tab-filter/tab-filter.page';
import { ModalFilterOptionPage } from './modal-filter-option/modal-filter-option.page';

@NgModule({
  declarations: [
    AppComponent,
    TabAttributePage,
    TabFilterPage,
    ModalFilterOptionPage
  ],
  entryComponents: [
    TabAttributePage,
    TabFilterPage,
    ModalFilterOptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
