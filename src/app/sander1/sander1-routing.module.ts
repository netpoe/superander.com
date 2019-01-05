import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { FacksComponent } from './facks/facks.component';
import { SmartContractDetailsComponent } from './smart-contract-details/smart-contract-details.component';
import { TokenDetailsComponent } from './token-details/token-details.component';
import { HowToComponent } from './how-to/how-to.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: ContainerComponent
  },
  {
    path: 'roadmap',
    component: RoadmapComponent
  },
  {
    path: 'facks',
    component: FacksComponent
  },
  {
    path: 'smart-contract-details',
    component: SmartContractDetailsComponent
  },
  {
    path: 'details',
    component: TokenDetailsComponent
  },
  {
    path: 'how-to',
    component: HowToComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sander1RoutingModule { }
