import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Contact }           from '../model/contact';

@Injectable()
export class ContactSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<Contact[]> {
        return this.http
            .get(`app/contacts/?name=${term}`)
            .map((r: Response) => r.json().data as Contact[]);
    }
}
