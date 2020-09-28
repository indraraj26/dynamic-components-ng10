import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildModuleRoutingModule } from './child-module-routing.module';
import { ChildModuleComponent } from './child-module.component';


@NgModule({
  declarations: [ChildModuleComponent],
  imports: [
    CommonModule,
    ChildModuleRoutingModule
  ]
})
export class ChildModuleModule { }
