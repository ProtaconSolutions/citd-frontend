import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExampleRoutes } from './example/';
import { GameRoutes } from "./game/";

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'example',
  },
  ...ExampleRoutes,
  ...GameRoutes,
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
