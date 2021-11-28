import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { CriteriosComponent } from './views/criterios/criterios.component';
import { ChecklistComponent } from './views/checklist/checklist.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UtilizarComponent } from './views/utilizar/utilizar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    CriteriosComponent,
    ChecklistComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    UtilizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
