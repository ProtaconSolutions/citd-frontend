import { Routes } from '@angular/router';

import { EntryComponent } from './entry.component';
import { EntryGuard } from "../guards/";

export const EntryRoutes: Routes = [
  {
    path: 'entry',
    component: EntryComponent,
    canActivate: [
      EntryGuard,
    ],
  },
];
