import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },

  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dash',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  }
];
