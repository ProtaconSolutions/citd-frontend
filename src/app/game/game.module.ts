import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorComponent } from './editor/editor.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EditorComponent,
    EntryComponent,
  ]
})
export class GameModule { }
