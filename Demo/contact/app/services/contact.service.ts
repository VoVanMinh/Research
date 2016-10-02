import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from '../model/contact';

@Injectable()
export class ContactService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private contactsUrl = 'app/contacts';  // URL to web api

    constructor(private http: Http) { }

    getContacts(): Promise<Contact[]> {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(response => response.json().data as Contact[])
            .catch(this.handleError);
    }

    getContact(id: number): Promise<Contact> {
        return this.getContacts()
            .then(contacts => contacts.find(contact => contact.id === id));
    }

    delete(id: number): Promise<void> {
        const url = `${this.contactsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(name: string, phone: string): Promise<Contact> {
        return this.http
            .post(this.contactsUrl, JSON.stringify({ name: name, phone: phone }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(contact: Contact): Promise<Contact> {
        const url = `${this.contactsUrl}/${contact.id}`;
        return this.http
            .put(url, JSON.stringify(contact), { headers: this.headers })
            .toPromise()
            .then(() => contact)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
