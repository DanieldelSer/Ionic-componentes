import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirestTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirestTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirestTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
