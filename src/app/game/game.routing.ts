import { Routes } from '@angular/router';

import { EditorRoutes } from './editor/editor.routing';
import { EntryRoutes } from './entry/entry.routing';

export const GameRoutes: Routes = [
  ...EditorRoutes,
  ...EntryRoutes,
];