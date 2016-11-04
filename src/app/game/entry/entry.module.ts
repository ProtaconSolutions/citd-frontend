import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/primeng';

import { SharedModule } from '../../shared/shared.module';
import { EntryGuard } from '../guards/';
import { EntryComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
    InputTextModule,
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
