import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CepComponent } from './cep/cep.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path : '',
    component: AboutusComponent,
  },{
    path: 'cep',
    component : CepComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
