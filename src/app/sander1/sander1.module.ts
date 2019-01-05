import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sander1RoutingModule } from './sander1-routing.module';
import { ContainerComponent } from './container.component';
import { SharedModule } from '@shared/shared.module';
import { SharedModule as SCUISharedModule } from '@decentralizedtechnologies/scui-lib';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { FacksComponent } from './facks/facks.component';
import { SmartContractDetailsComponent } from './smart-contract-details/smart-contract-details.component';
import { TokenDetailsComponent } from './token-details/token-details.component';

@NgModule({
  imports: [
    CommonModule,
    Sander1RoutingModule,
    SCUISharedModule,
    SharedModule,
  ],
  declarations: [ContainerComponent, RoadmapComponent, FacksComponent, SmartContractDetailsComponent, TokenDetailsComponent]
})
export class Sander1Module { }
