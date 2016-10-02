import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboardC/dashboard.component';
import { ContactsComponent }      from './contactsC/contacts.component';
import { ContactDetailComponent }  from './detailC/contact-detail.component';
import { ContactService }          from './services/contact.service';
import { ContactSearchComponent }  from './searchC/contact-search.component';
import { routing }              from './routing/app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ContactDetailComponent,
        ContactsComponent,
        ContactSearchComponent
    ],
    providers: [
        ContactService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
