import { ContactmanagerModule } from './contactmanager/contactmanager.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#contactManager' }, // path to module and module name
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' }, // path to module and module name
  { path: '**', redirectTo: 'contactmanager'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ContactmanagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
