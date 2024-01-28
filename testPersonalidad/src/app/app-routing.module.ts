import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaTestComponent } from './components/vista-test/vista-test.component';
import { ResultadoTestComponent } from './components/resultado-test/resultado-test.component';

const routes: Routes = [
  { path: '', component: VistaTestComponent },
  { path: 'resultado', component: ResultadoTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
