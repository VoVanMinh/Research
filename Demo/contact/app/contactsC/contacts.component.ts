import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Contact }                from '../model/contact';
import { ContactService }         from '../services/contact.service';

@Component({
    moduleId: module.id,
    selector: 'contacts',
    templateUrl: 'contacts.component.html',
    styleUrls: ['contacts.component.css']
})
export class ContactsComponent implements OnInit {
    contacts: Contact[];
    selectedContact: Contact;
    check = true;

    constructor(
        private contactService: ContactService,
        private router: Router) { }

    getContacts(): void {
        this.contactService
            .getContacts()
            .then(contacts => this.contacts = contacts);
    }

    add(name: string, phone: string): void {
        name = name.trim();
        phone = phone.trim();
        if (!name || !phone) { this.check = false }
        else {
            this.contactService.create(name, phone)
                .then(contact => {
                    this.contacts.push(contact);
                    this.selectedContact = null;
                    this.check = true;
                });
        }
    }

    delete(contact: Contact): void {
        this.contactService
            .delete(contact.id)
            .then(() => {
                this.contacts = this.contacts.filter(h => h !== contact);
                if (this.selectedContact === contact) { this.selectedContact = null; }
            });
    }

    ngOnInit(): void {
        this.getContacts();
    }

    onSelect(contact: Contact): void {
        this.selectedContact = contact;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedContact.id]);
    }
}