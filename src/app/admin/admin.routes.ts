import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { ServiceRequestComponent } from './services/service-request/service-request.component';
import { AssetsCategoryComponent } from './admins/assets-category/assets-category.component';
import { PermissionComponent } from './admins/permission/permission.component';
import { RolesComponent } from './admins/roles/roles.component';
import { SiteMasterComponent } from './admins/site-master/site-master.component';
import { UserComponent } from './admins/user/user.component';
import { ReportsComponent } from './reports/reports.component';

export const ADMIN_ROUTE: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTE),
  },
  {
      path: "service-request",
      component: ServiceRequestComponent,
    },
  {
      path: "assets-category",
      component: AssetsCategoryComponent,
    },
  {
      path: "permission",
      component: PermissionComponent,
    },
  {
      path: "roles",
      component: RolesComponent,
    },
  {
      path: "site-master",
      component: SiteMasterComponent,
    },
  {
      path: "user",
      component: UserComponent,
    },
  {
      path: "reports",
      component: ReportsComponent,
    },
  { path: '**', component: Page404Component },
];
