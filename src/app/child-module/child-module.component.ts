import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponentLoaderService } from '../dynamic-component-loader.service';

@Component({
  selector: 'app-child-module',
  templateUrl: './child-module.component.html',
  styleUrls: ['./child-module.component.scss']
})
export class ChildModuleComponent implements OnInit {

  constructor(private dynamicComponentLoader: DynamicComponentLoaderService,
              private container: ViewContainerRef,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async load() {
    const component =  (await this.dynamicComponentLoader.getComponent()).DynamicComponent;
    const factory = this.resolver.resolveComponentFactory(component);

    this.container.clear();
    this.container.createComponent(factory);
  }


  // tslint:disable-next-line: typedef
  async load1() {
    const component =  (await this.dynamicComponentLoader.getComponent1()).TestComponent;
    const factory = this.resolver.resolveComponentFactory(component);

    this.container.createComponent(factory);
  }

  clear() {
    this.container.clear();
  }
}
