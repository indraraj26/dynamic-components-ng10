import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';



@NgModule({
  declarations: [MyLibComponent, ParentComponent, Child1Component, Child2Component],
  imports: [
  ],
  exports: [MyLibComponent, ParentComponent, Child1Component, Child2Component]
})
export class MyLibModule { }
