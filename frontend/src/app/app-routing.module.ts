import { UtilizarComponent } from './views/utilizar/utilizar.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ChecklistComponent } from './views/checklist/checklist.component';
import { CriteriosComponent } from './views/criterios/criterios.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    children: [
      {path:'', redirectTo: '/home', pathMatch:'full'},
      {path: 'home', component: HomeComponent},
      {path: 'utilizar', component: UtilizarComponent},
      {path: 'categorias', component: CategoriasComponent},
      {path: 'criterios', component: CriteriosComponent},
      {path: 'checklist', component: ChecklistComponent},
      {path: '**', component: PageNotFoundComponent},
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
