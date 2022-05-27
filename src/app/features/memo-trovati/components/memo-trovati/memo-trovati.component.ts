import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo-model';

@Component({
  selector: 'app-memo-trovati',
  templateUrl: './memo-trovati.component.html',
  styleUrls: ['./memo-trovati.component.css']
})

/*
Si approda a questo componente dopo aver svolto una ricerca per keyword degli elementi della to-do list
sulla vista supportata dal componente cerca-memo.
Questo componente supporta la vista che mostra tutti gli elementi della to-do list che risultano dalla ricerca tramite keyword.
Questo componente utulizza un servizio di tipo get-by-keyword implmentato in core/todo.service.ts.
*/

export class MemoTrovatiComponent implements OnInit {

  keyword: string = ''
  listaMemo : Todo[] = []

  constructor(
    private todoService : TodoService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }


  showList() {
    this.route.params.subscribe(
      p => {
        this.keyword = p['keyword'];
        console.log(this.keyword)
      }
    )
    console.log(this.keyword)
    this.todoService.getByKeyword(this.keyword).subscribe(
      result => {
        if (result) {
          result.forEach(element => { this.listaMemo.push(element)});
          console.log(result)
          }
            
         else console.log('errore')
      },
      error => {
        console.log(error)
      }
    )
    return this.listaMemo
    }
  
  memos = this.showList()

}
