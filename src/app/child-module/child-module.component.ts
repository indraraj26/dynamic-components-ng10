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
    const factory =  (await this.dynamicComponentLoader.getComponent('app-dynamic',
    () => import('./../dynamic/dynamic.module').then(m => m.DynamicModule)));
    // const factory = this.resolver.resolveComponentFactory(component);

    this.container.clear();
    this.container.createComponent(factory);
  }


  // tslint:disable-next-line: typedef
  async load1() {
    const factory =  (await this.dynamicComponentLoader.getComponent('app-my-second-level',
    () =>  import('./../dynamic/dynamic.module').then(m => m.DynamicModule)));

    this.container.clear();
    this.container.createComponent(factory);
  }

  async load2() {
    const factory =  (await this.dynamicComponentLoader.getComponent('app-second-level',
    () =>  import('./../second-level/second-level.module').then(m => m.SecondLevelModule)));

    this.container.clear();
    this.container.createComponent(factory);
  }

  clear() {
    this.container.clear();
  }
}
