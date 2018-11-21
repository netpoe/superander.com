import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/SANDER1', pathMatch: 'full' },
  {
    path: 'SANDER1',
    loadChildren: './sander1/sander1.module#Sander1Module',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
