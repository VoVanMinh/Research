"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../dashboardC/dashboard.component');
var contacts_component_1 = require('../contactsC/contacts.component');
var contact_detail_component_1 = require('../detailC/contact-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: contact_detail_component_1.ContactDetailComponent
    },
    {
        path: 'contacts',
        component: contacts_component_1.ContactsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map