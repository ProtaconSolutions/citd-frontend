import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExampleRoutes } from './example/';

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'example',
  },
  ...ExampleRoutes,
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
