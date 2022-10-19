import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContientComponent } from './contients/add-contient/add-contient.component';
import { AllContinentsComponent } from './continents/all-continents/all-continents.component';
import { EditContinentComponent } from './continents/edit-continent/edit-continent.component';

const routes: Routes = [{
  path:'',
  component: AllContinentsComponent,
},
{
  path:'addContinent',
  component: AddContientComponent,
},
{
  path:'editContinent/:id',
  component:EditContinentComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
