import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToSearch(){
    this.router.navigate(['/pag-busqueda']);
   }

  goToShop(){
    this.router.navigate(['/compra']);
  }
  goToReels(){
    this.router.navigate(['/reels']);
  }
  goToPerfil(){
    this.router.navigate(['/perfil']);
  }
}
