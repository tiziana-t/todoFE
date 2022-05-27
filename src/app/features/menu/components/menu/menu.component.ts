import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

  /*
  Componente che supporta la prima vista, un menù
  Cliccando le 3 opzioni offerte dal menù mi sposto sulle diverse viste:
  1) creazione di un nuovo memo
  2) display di tutti i memo disponibili 
  3) ricerca di un memo attraverso la parola chiave
  */

export class MenuComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  
   onClick = (route : string) => this.router.navigateByUrl(route)

}
