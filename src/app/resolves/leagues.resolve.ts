
import { Resolve } from '@angular/router';
import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { forkJoin, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { LeagueService } from '../services/league.service';


@Injectable()
export class LeaguesResolve implements Resolve<any> {

	constructor(
		private LeagueService: LeagueService
	){}

	resolve(route: ActivatedRouteSnapshot, state){
		return this.LeagueService.filter(route.queryParams);
	}	
}