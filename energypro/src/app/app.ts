import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Services } from './services/services';
import { Contacts } from './contacts/contacts';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Services, Contacts, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'energypro';
}
