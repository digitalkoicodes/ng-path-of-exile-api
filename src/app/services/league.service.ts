import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { League } from '../models/league';

@Injectable({
	providedIn: 'root'
})
export class LeagueService {

	constructor(
		public http: HttpClient
	) { }

	filter(params?): Observable<League[]>{
		return this.http.get<League[]>("http://api.pathofexile.com/leagues", {params: params});
	}

}
