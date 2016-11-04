import { Routes } from '@angular/router';

import { EntryComponent } from './entry.component';
import { EntryGuard } from "../guards/";

export const EntryRoutes: Routes = [
  {
    path: 'game/entry',
    component: EntryComponent,
    canActivate: [
      EntryGuard,
    ],
  },
];
