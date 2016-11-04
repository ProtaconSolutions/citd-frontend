import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { EditorGuard } from '../guards/';
import { EditorComponent } from './index';

@NgModule({
  imports: [
    SharedModule
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
