import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cerca-memo',
  templateUrl: './cerca-memo.component.html',
  styleUrls: ['./cerca-memo.component.css']
})

/* 
Componente che supporta una vista con una casella per la ricerca degli elementi della to-do list attraverso keyword.
Si approda a questa vista dalla vista di menù.
Da questa vista si punta poi al componete memo-trovati a cui si demanda la funzionalità di ricerca tramite keyword.

*/

export class CercaMemoComponent implements OnInit {

  keyword: string = ''

  constructor(
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  inserimentoKeyword(keywordInsertion: NgForm){

    const key: string = keywordInsertion.value.campoTesto
    const url = `/memoTrovati/${key}`
    this.router.navigateByUrl(url);


  }

}
