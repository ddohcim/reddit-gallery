import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: ':type/:name', component: GridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
