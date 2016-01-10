import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map'; // add map function to observable

@Injectable()
export class PizzaService {
    private pizzen = [];
    constructor(private _http: Http) {
    }

    ladeAngebot() {
        return this._http.get('assets/pizzen.json')
            .map(res => res.json());
    }
}
