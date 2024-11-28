import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':groupId',
    loadComponent: () => import('./chat/chat.component')
      .then(c => c.ChatComponent),
  }
];
