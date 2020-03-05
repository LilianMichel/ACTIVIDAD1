import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-formulario',
  templateUrl: './view-formulario.page.html',
  styleUrls: ['./view-formulario.page.scss'],
})
export class ViewFormularioPage implements OnInit {
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
