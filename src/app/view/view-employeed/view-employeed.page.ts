import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-employeed',
  templateUrl: './view-employeed.page.html',
  styleUrls: ['./view-employeed.page.scss'],
})
export class ViewEmployeedPage implements OnInit {
  employeed: any;

  constructor( private actroute: ActivatedRoute, private router: Router) {
    this.actroute.queryParams.subscribe(
    params => {
      this.employeed = JSON.parse(params.special);
    }
    );
  }

  ngOnInit() {
  }

}
