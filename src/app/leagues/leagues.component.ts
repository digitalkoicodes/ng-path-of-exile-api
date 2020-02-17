import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { League } from '../models/league';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  public leagues: League[] = [];

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {leagues: League[]}) => {
      this.leagues = data.leagues;
    });
  }

}
