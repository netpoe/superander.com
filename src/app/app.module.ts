import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SCUILibModule, Network, Config } from '@decentralizedtechnologies/scui-lib';

import deepmerge from 'deepmerge';
const config = deepmerge(Config, {
  network: Network.testnet
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    SCUILibModule,
  ],
  providers: [{
    provide: 'config',
    useValue: config
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
