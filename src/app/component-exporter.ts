import { ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';

export abstract class ComponentExporter {
  private selectorToFactoryMap: { [key: string]: ComponentFactory<any> } = null;

  protected abstract exposedComponents: Type<any>[];

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
  }


  public getComponentFactory(selector: string): ComponentFactory<any> {
    if (!this.selectorToFactoryMap) {
      this.populateSelectorMap();
    }
    return this.selectorToFactoryMap[selector];

  }

  private populateSelectorMap() {
    this.selectorToFactoryMap = {};

    if (Array.isArray(this.exposedComponents) && this.exposedComponents.length > 0) {
      this.exposedComponents.forEach(compType => {
        const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(compType);
        this.selectorToFactoryMap[componentFactory.selector] = componentFactory;
      });
    }

  }



}
