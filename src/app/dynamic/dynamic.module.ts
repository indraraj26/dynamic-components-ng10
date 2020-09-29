import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { ComponentExporter } from '../component-exporter';
import { TestComponent } from './test/test.component';
import { DynamicComponent } from './dynamic.component';
import { SecondLevelModule } from '../second-level/second-level.module';
import { MySecondLevelComponent } from '../second-level/my-second-level/my-second-level.component';


@NgModule({
  declarations: [TestComponent, DynamicComponent],
  imports: [
    CommonModule,
    DynamicRoutingModule,
    SecondLevelModule
  ],
  entryComponents: [TestComponent, DynamicComponent]
})
export class DynamicModule extends ComponentExporter {

  protected exposedComponents = [
    TestComponent,
    DynamicComponent,
    MySecondLevelComponent
  ];

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }

}

