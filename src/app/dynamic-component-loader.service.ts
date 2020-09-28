import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentLoaderService {

  constructor() { }

  // tslint:disable-next-line: typedef
  async getComponent() {
    return  await import(`./dynamic/dynamic.component`);
  }

  // tslint:disable-next-line: typedef
  async getComponent1() {
    return  await import(`./dynamic/test/test.component`);
  }
}
