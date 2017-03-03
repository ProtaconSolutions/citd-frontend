import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditorRoutes } from './editor/editor.routes';
import { EntryRoutes } from './entry/entry.routes';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'game',
        children: [
          ...EditorRoutes,
          ...EntryRoutes,
        ]
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class GameRoutingModule { }