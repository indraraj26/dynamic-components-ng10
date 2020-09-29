import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondLevelComponent } from './second-level.component';

const routes: Routes = [{ path: '', component: SecondLevelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondLevelRoutingModule { }
