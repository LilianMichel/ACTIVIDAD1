import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isSingleClick = true;
  employeeds: any = [
    {rfc: '1234MNT',
    key: '16400',
    name: {firstName: 'Michel', lastName: 'Campos'},
    salary: 1200,
    type: 'Base',
    active: true,
    email: 'limicaag@gmail.com',
    date: '04-03-2020'},
    {rfc: "5678HMT", key:'16401', name:{firstName:"Diego", lastName:"Campos"}, salary:1400,type:"Confianza", active:false, email:"dimacaag@gmail.com", date:"04-04-2020"},
    {rfc:"9101MNT", key:'16402', name:{firstName:"Liliana", lastName:"Aguirre"}, salary:1500, type:"Base", active:true, email:"liagbr@gmail.com", date:"06-05-2020"},
    {rfc: "1121HMT", key:'16403', name:{firstName:"Martin", lastName:"Barajas"}, salary:1600,type:"Confianza", active:false, email:"jumacaba@gmail.com", date:"07-06-2020"},
    {rfc:"3141MNT", key:'16404', name:{firstName:"Cecilia", lastName:"Aguirre"}, salary:1700, type:"Base", active:true, email:"cedeagbr@gmail.com", date:"08-07-2020"},
    {rfc: "5161MNT", key:'16405', name:{firstName:"Sandra", lastName:"Briseño"}, salary:1800,type:"Confianza", active:false, email:"saevbrve@gmail.com", date:"09-08-2020"},
  ];
  constructor(private router: Router) {}

  view(employeed: any): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(employeed)
      }
    };
    this.isSingleClick = true;
    setTimeout(() => {
        if (this.isSingleClick) {
          this.router.navigate(['/view-employeed'], extras);
        }
     }, 250);
  }

  formulario(employeed: any): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(employeed)
      }
    };
    this.isSingleClick = false;
    this.router.navigate(['/view-formulario'], extras);

  }

 


}
