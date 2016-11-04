import { NgModule } from '@angular/core';
import { InputTextareaModule } from 'primeng/primeng';

import { SharedModule } from '../../shared/shared.module';
import { EditorGuard } from '../guards/';
import { EditorComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
    InputTextareaModule,
  ],
  declarations: [
    EditorComponent,
  ],
  exports: [
    EditorComponent,
  ],
  providers: [
    EditorGuard,
  ],
})

export class EditorModule { }
