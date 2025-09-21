import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'energypro';
}
