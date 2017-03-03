import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { EntryGuard } from '../guards/';
import { EntryComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    EntryComponent,
  ],
  exports: [
    EntryComponent,
  ],
  providers: [
    EntryGuard,
  ],
})

export class EntryModule { }
