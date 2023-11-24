import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pag-busqueda',
  templateUrl: './pag-busqueda.page.html',
  styleUrls: ['./pag-busqueda.page.scss'],
})
export class PagBusquedaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome (){
    this.router.navigate(['/home']);
  }
  goToShop (){
    this.router.navigate(['/compra']);
  }
  goToReels(){
    this.router.navigate(['/reels']);
  }
  goToPerfil(){
    this.router.navigate(['/perfil']);
  }
}
