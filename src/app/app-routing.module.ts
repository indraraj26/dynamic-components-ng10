import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'child', loadChildren: () => import('./child-module/child-module.module').then(m => m.ChildModuleModule) },
  { path: 'dynamic', loadChildren: () => import('./dynamic/dynamic.module').then(m => m.DynamicModule) },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'child'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
