import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildModuleComponent } from './child-module.component';

const routes: Routes = [{ path: '', component: ChildModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildModuleRoutingModule { }
