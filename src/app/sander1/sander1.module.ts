import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sander1RoutingModule } from './sander1-routing.module';
import { ContainerComponent } from './container.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Sander1RoutingModule,
    SharedModule,
  ],
  declarations: [ContainerComponent]
})
export class Sander1Module { }
