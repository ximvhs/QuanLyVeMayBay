import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatveComponent } from './pages/datve/datve.component';
import { DatveInfoComponent } from './pages/datve-info/datve-info.component';


const routes: Routes = [
  {
    path: '',
    component: DatveComponent,
    pathMatch: 'full'
  },

  {
    path: 'datve-info',
    component: DatveInfoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
