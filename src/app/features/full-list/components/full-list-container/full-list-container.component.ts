import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo-model';

@Component({
  selector: 'app-full-list-container',
  templateUrl: './full-list-container.component.html',
  styleUrls: ['./full-list-container.component.css']
})

export class FullListContainerComponent implements OnInit {

  listaMemo : Todo[] = []

  constructor(
    private router : Router,
    private todoService : TodoService
  ) { }

  ngOnInit(): void {
  }

  showList() : Todo[] {
    this.todoService.getMemo().subscribe(
      result => {
        console.log(result)
        if (result) {
          result.forEach(element => { this.listaMemo.push(element)});
          }
            
         else console.log('errore')
      },
      error => {
        console.log(error)
      }
    )
    return this.listaMemo
    }

  selectDetailHandler(memo: Todo): void {
    const url = `getAll/${memo.id}`;
    //TODO chiamare il servizio di modifica
  }
    

  memos = this.showList()

}
