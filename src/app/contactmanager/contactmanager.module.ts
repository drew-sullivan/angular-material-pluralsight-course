import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
    children: [
      { path: '', component: MaincontentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MaincontentComponent, SidenavComponent]
})
export class ContactmanagerModule { }
