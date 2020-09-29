import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'child', loadChildren: () => import('./child-module/child-module.module').then(m => m.ChildModuleModule) },
  { path: 'dynamic', loadChildren: () => import('./dynamic/dynamic.module').then(m => m.DynamicModule) },
  { path: 'second-level', loadChildren: () => import('./second-level/second-level.module').then(m => m.SecondLevelModule) },
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
