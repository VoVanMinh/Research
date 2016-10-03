import { Pipe, PipeTransform } from '@angular/core';
import { Http }                from '@angular/http';

@Pipe({
    name: 'fetch',
    pure: false
})
export class FetchJsonPipe implements PipeTransform {
    private fetchedJson: any = null;
    private prevUrl = '';

    constructor(private _http: Http) { }

    transform(url: string): any {
        if (url !== this.prevUrl) {
         this.prevUrl = url;
        this.fetchedJson = null;
        this._http.get(url)
            .map(result => result.json())
            .subscribe(result => this.fetchedJson = result);
        }

        return this.fetchedJson;
    }
}