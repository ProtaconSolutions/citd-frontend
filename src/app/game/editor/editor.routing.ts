import { Routes } from '@angular/router';

import { EditorComponent } from './editor.component';
import { EditorGuard } from '../guards/';

export const EditorRoutes: Routes = [
  {
    path: 'game/editor',
    component: EditorComponent,
    canActivate: [
      EditorGuard,
    ],
  },
];
