import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondLevelRoutingModule } from './second-level-routing.module';
import { SecondLevelComponent } from './second-level.component';
import { MySecondLevelComponent } from './my-second-level/my-second-level.component';
import { ComponentExporter } from '../component-exporter';


@NgModule({
  declarations: [SecondLevelComponent, MySecondLevelComponent],
  imports: [
    CommonModule,
    SecondLevelRoutingModule
  ]
})
export class SecondLevelModule extends ComponentExporter {
  exposedComponents = [SecondLevelComponent];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
