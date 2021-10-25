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
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirestTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirestTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirestTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirestTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirestTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirestTo: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirestTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirestTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite-scroll',
      redirestTo: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirestTo: '/input'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
