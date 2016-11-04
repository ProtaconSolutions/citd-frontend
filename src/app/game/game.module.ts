import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule } from './editor/editor.module';
import { EntryModule } from './entry/entry.module';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    EntryModule,
  ],
  exports: [
    EditorModule,
    EntryModule,
  ],
})

export class GameModule { }
