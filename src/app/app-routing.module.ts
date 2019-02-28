

import { SupplyItemsComponent } from './components/project/supply-items/supply-items.component';
import { ProjectTeamComponent } from './components/project/project-team/project-team.component';
import { ProjectScopeComponent } from './components/project/project-scope/project-scope.component';
import { ProjectDataComponent } from './components/project/project-data/project-data.component';
import { ConfigureProjectComponent } from './components/project/configure-project/configure-project.component';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RolesComponent } from './components/roles/roles.component';
import { ManageuserComponent } from './components/users/manageuser/manageuser.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { RolePrivillegesComponent } from './components/role-privilleges/role-privilleges.component';
import { TerritoryComponent } from './components/masters/territory/territory.component';
import { StateComponent } from './components/masters/state/state.component';
import { TitleComponent } from './components/masters/title/title.component';
import { ClienttypeComponent } from './components/masters/clienttype/clienttype.component';
import { ClientsizeComponent } from './components/masters/clientsize/clientsize.component';
import { ManageClientComponent } from './components/clients/manage-client/manage-client.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
import { ManageLicenseComponent } from './components/license/manage-license/manage-license.component';
import { AddLicenseComponent } from './components/license/add-license/add-license.component';
import { EditLicenseComponent } from './components/license/edit-license/edit-license.component';
import { ManageProjectComponent } from './components/project/manage-project/manage-project.component';
import { AddProjectComponent } from './components/project/add-project/add-project.component';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';
import { ManageProjectDocumentationComponent } from './components/project/project-documentation/manage-project-documentation/manage-project-documentation.component';
import { AddProjectDocumentationComponent } from './components/project/project-documentation/add-project-documentation/add-project-documentation.component';
import { EditProjectDocumentationComponent } from './components/project/project-documentation/edit-project-documentation/edit-project-documentation.component';
import { AdditionalInfoComponent } from './components/project/additional-info/additional-info.component';
import { AddProjectNoteComponent } from './components/project/add-project-note/add-project-note.component';
import { LoginComponent } from './components/login/login.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: '',component: FullLayout,data: {title: 'Home'},
  children: [
    // {path: 'dashboard',loadChildren: './views/dashboard/dashboard.module#DashboardModule'},
    {path: 'components',loadChildren: './views/components/components.module#ComponentsModule'},
    {path: 'icons',loadChildren: './views/icons/icons.module#IconsModule'},
    {path: 'widgets',loadChildren: './views/widgets/widgets.module#WidgetsModule'},
    {path: 'charts',loadChildren: './views/chartjs/chartjs.module#ChartJSModule'}
    ]
  },
  {path: 'pages',component: SimpleLayout,data: {title: 'Pages'},
    children: [
      {path: '',loadChildren: './views/pages/pages.module#PagesModule'}
    ]
  },

  {path: '',component: FullLayout,data: {title: 'Home'},
      children: [
        {path: 'dashboard',component: DashboardComponent,data: {title: 'Dashbord Page'}},

        {path: 'manageUsers',component: ManageuserComponent,data: {title: 'Manage Users'}},
        {path: 'addUser',component: AdduserComponent,data: {title: 'Add User'}},
        {path: 'editUser',component: EdituserComponent,data: {title: 'Edit User'}},

        {path: 'manageRoles',component: RolesComponent,data: {title: 'Roles'}},
        {path: 'rolePrivilleges',component: RolePrivillegesComponent,data: {title: 'Role Privilleges'}},

        {path: 'masters/territory',component: TerritoryComponent,data: {title: 'Manage Territory'}},
        {path: 'masters/state',component: StateComponent,data: {title: 'Manage State'}},
        {path: 'masters/title',component: TitleComponent,data: {title: 'Manage Title'}},
        {path: 'masters/clientType',component: ClienttypeComponent,data: {title: 'Manage Client Type'}},
        {path: 'masters/clientSize',component: ClientsizeComponent,data: {title: 'Manage Client Size'}},
        {path: 'manageClients',component: ManageClientComponent,data: {title: 'Manage Clients'}},
        {path: 'addClient',component: AddClientComponent,data: {title: 'Add Client'}},
        {path: 'editClient',component: EditClientComponent,data: {title: 'Edit Client'}},

        {path: 'manageLicense',component: ManageLicenseComponent,data: {title: 'Manage License'}},
        {path: 'addLicense',component: AddLicenseComponent,data: {title: 'Add License'}},
        {path: 'editLicense',component: EditLicenseComponent,data: {title: 'Edit License'}},

        {path: 'manageProject',component:ManageProjectComponent,data: {title: 'Manage Project'}},
        {path: 'addProject',component: AddProjectComponent,data: {title: 'Add Project'}},
        {path: 'editProject',component: EditProjectComponent,data: {title: 'Edit project'}},
        {path: 'configureProject',component: ConfigureProjectComponent,data: {title: 'Configure project'}},
        {path: 'projectData',component: ProjectDataComponent,data: {title: 'Project Data'}},

        {path: 'projectTeam',component: ProjectTeamComponent,data: {title: 'Project Team'}},
        {path: 'projectScope',component: ProjectScopeComponent,data: {title: 'Project Scope'}},
        {path: 'supplyItems',component: SupplyItemsComponent,data: {title: 'Supply Items'}},
        {path: 'manageProjectDocumentation',component: ManageProjectDocumentationComponent,data: {title: 'Manage Project Documentation'}},
        {path: 'addProjectDocumentation',component: AddProjectDocumentationComponent,data: {title: 'Add Project Documentation'}},
        {path: 'editProjectDocumentation',component: EditProjectDocumentationComponent,data: {title: 'Edit Project Documentation'}},
        {path: 'additionalInfo',component: AdditionalInfoComponent,data: {title: 'Project Additional Info'}},
        {path: 'addProjectNote',component: AddProjectNoteComponent,data: {title: 'Project Note'}},


    ]
  },
  {path: 'login',component: LoginComponent,data: {title: 'Login Page'}},
  {path: 'userRegister',component: UserregisterComponent,data: {title: 'Register Page'}},
  {path: 'forgotPassword',component: ForgotpasswordComponent,data: {title: 'Register Page'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
