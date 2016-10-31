import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module'
import { ExampleComponent } from './example.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ExampleComponent,
  ],
  exports: [
    ExampleComponent,
  ],
  providers: [
    {
      provide: Window,
      useValue: window
    },
  ]
})

export class ExampleModule { }
