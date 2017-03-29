import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule}   from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { ResultComponent } from './result/result.component';
import { TestbillyComponent } from './testbilly/testbilly.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SimulatorComponent,
    ResultComponent,
    TestbillyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'

        },
        {
          path: 'home',
          component: HomepageComponent
        },
        {
          path: 'resultat',
          component: ResultComponent
        },
        {
          path: 'simulateur',
          component: TestbillyComponent
        },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
