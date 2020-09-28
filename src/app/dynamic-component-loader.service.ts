import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentLoaderService {

  constructor() { }


  // components = {
  //   'dynamic-component1': './dynamic/dynamic.component',
  //   'test-component': './dynamic/test/test.component'
  // };

  // tslint:disable-next-line: typedef
  async getComponent(selector: string) {

    switch(selector) {
      case 'dynamic-component1':
        return  (await import(`./dynamic/dynamic.component`)).DynamicComponent;
      case 'test-component':
        return  (await import(`./dynamic/test/test.component`)).TestComponent;
    }
  }
}
