import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
  { path: '', component: LayoutsComponent, loadChildren: () => import('./layouts/layouts.route').then(mod => mod.LANDING_ROUTES)},

];
