import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  showPerfil = false


  updateImageVisibility() {
    if (window.innerWidth <= 768) {
      this.showPerfil = true;
    } else {
      this.showPerfil = false;
    }
  }
}

