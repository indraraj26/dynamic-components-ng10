import { Injectable, NgModuleFactory, Compiler, Injector } from '@angular/core';
import { ComponentExporter } from './component-exporter';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentLoaderService {

  constructor(private compiler: Compiler,
    private injector: Injector) { }



  // tslint:disable-next-line: typedef
  // : () => Promise<typeof ComponentExporter>
  async getComponent(selector: string, moduleLoaderFn) {
    const ngModuleOrNgModuleFactory = await this.getModuleFactoryFromModulePath(moduleLoaderFn);
    console.log(ngModuleOrNgModuleFactory);

    const ngModuleRef = ngModuleOrNgModuleFactory.create(this.injector);

    if (ngModuleRef.instance instanceof ComponentExporter) {
      return ngModuleRef.instance.getComponentFactory(selector);
    } else {
      throw new Error('Module should extend ComponentExporter to use "string" component selector ');
    }
  }


  private async getModuleFactoryFromModulePath(moduleLoaderFn): Promise<NgModuleFactory<any>> {
    const ngModuleOrNgModuleFactory = await moduleLoaderFn();
    let moduleFactory;
    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      const compiler = this.injector.get(Compiler);
      moduleFactory = await compiler.compileModuleAsync(ngModuleOrNgModuleFactory);
    }
    return moduleFactory;
  }
}
