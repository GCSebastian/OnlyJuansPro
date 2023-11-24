import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goToSearch(){
    this.router.navigate(['/pag-busqueda']);
   }

  goToHome(){
    this.router.navigate(['/home']);
  }
  goToReels(){
    this.router.navigate(['/reels']);
  }
  goToPerfil(){
    this.router.navigate(['/perfil']);
  }
}
