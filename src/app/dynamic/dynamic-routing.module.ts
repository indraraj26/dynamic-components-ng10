import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicComponent } from './dynamic.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{ path: '', component: DynamicComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
