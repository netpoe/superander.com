import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { FacksComponent } from './facks/facks.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sander1RoutingModule { }
