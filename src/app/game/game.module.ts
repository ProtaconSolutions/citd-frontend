import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule } from './editor/editor.module';
import { EntryModule } from './entry/entry.module';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    EditorModule,
    EntryModule,
  ],
  declarations: [],
  entryComponents: [],
  exports: [
    EditorModule,
    EntryModule,
  ],
})

export class GameModule { }
