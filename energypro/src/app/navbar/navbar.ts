import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true, 
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isOpen = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
    // opcional: bloquear scroll do body
    // document.body.classList.toggle('no-scroll', this.isOpen);
  }

  closeMenu(): void {
    if (this.isOpen) {
      this.isOpen = false;
      // document.body.classList.remove('no-scroll');
    }
  }
}
