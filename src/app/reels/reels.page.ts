import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reels',
  templateUrl: './reels.page.html',
  styleUrls: ['./reels.page.scss'],
})
export class ReelsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome (){
    this.router.navigate(['/home']);
  }
  goToShop (){
    this.router.navigate(['/compra']);
  }
  goToPerfil(){
    this.router.navigate(['/perfil']);
  }
  goToSearch(){
    this.router.navigate(['/pag-busqueda']);
  }

}
