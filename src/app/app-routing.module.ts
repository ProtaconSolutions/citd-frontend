import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExampleRoutes } from './example/';
import { GameRoutes } from "./game/";
import { ResultRoutes } from "./result/result.routing";

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'example',
  },
  ...ExampleRoutes,
  ...GameRoutes,
  ...ResultRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})

export class AppRoutingModule { }
