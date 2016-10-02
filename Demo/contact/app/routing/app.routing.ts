import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }  from '../dashboardC/dashboard.component';
import { ContactsComponent }     from '../contactsC/contacts.component';
import { ContactDetailComponent } from '../detailC/contact-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: ContactDetailComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
