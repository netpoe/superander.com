import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container.component';
import { RoadmapComponent } from './roadmap/roadmap.component';

const routes: Routes = [
  {
    path: 'home',
    component: ContainerComponent
  },
  {
    path: 'roadmap',
    component: RoadmapComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sander1RoutingModule { }
