import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class LeagueService {

	constructor(
		public http: HttpClient
	) { }

	filter(params?){
		console.log('running league service');
		return this.http.get("http://api.pathofexile.com/leagues", {params: params});
	}

}
