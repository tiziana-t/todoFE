import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cerca-memo',
  templateUrl: './cerca-memo.component.html',
  styleUrls: ['./cerca-memo.component.css']
})
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
