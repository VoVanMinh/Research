import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Contact }        from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
    moduleId: module.id,
    selector: 'contact-detail',
    templateUrl: 'contact-detail.component.html',
    styleUrls: ['contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
    contact: Contact;
    
    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.contactService.getContact(id)
                .then(contact => this.contact = contact);
        });
    }

    save(): void {
        this.contact.name = this.contact.name.trim();
        this.contact.phone = this.contact.phone.trim();
        if (!this.contact.name || !this.contact.phone) { return; }
        else {
            this.contactService.update(this.contact)
                .then(() => this.goBack());
        }
    }

    goBack(): void {
        this.location.back();
    }
}
