import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExampleRoutes } from './example/';
import { EditorRoutes } from "./editor/";

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'example',
  },
  ...ExampleRoutes,
  ...EditorRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
  providers: []
})

export class AppRoutingModule { }
