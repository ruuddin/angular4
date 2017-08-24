import { ErrorPageComponent } from './error-page/error-page.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', 
  //servers will only be available if AuthGuard.canActivate method returns true.
    // canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard],
    component: ServersComponent,  
    children:[
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', 
        canDeactivate: [CanDeactivateGuard], 
        component: EditServerComponent }
    ]
  },
  { path: 'users', component: UsersComponent, children:[
      { path: ':id/:name', component: UserComponent }
    ] 
  },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not Found!'} },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}