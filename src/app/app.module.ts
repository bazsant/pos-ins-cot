import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StepsComponent } from './steps/steps.component';
import { HeaderComponent } from './steps/header/header.component';
import { MarcaModeloComponent } from './steps/marca-modelo/marca-modelo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule, MatInputModule, MatCardModule, 
  MatTabsModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepsComponent,
    HeaderComponent,
    MarcaModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
