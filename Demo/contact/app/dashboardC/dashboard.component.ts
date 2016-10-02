import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Contact }        from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    contacts: Contact[] = [];

    constructor(
        private router: Router,
        private contactService: ContactService) {
    }

    ngOnInit(): void {
        this.contactService.getContacts()
            .then(contacts => this.contacts = contacts.slice(0, 4));
    }

    gotoDetail(contact: Contact): void {
        let link = ['/detail', contact.id];
        this.router.navigate(link);
    }
}
