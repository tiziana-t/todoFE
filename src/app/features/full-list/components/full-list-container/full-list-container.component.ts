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

  eliminaSelectDetailHandler(memo: Todo): void {
    const url = `/getAll`
    console.log(memo.id)
    this.todoService.deleteMemo(memo.id).subscribe(
      result => {
        console.log("record eliminato")
      },
      error => {
        console.log(error)
      }
  )}

  modificaSelectDetailHandler(memo: Todo): void {
    const url = `/modifica`
    this.router.navigateByUrl(url);
    console.log(memo.id)
  }
    /*
    this.todoService.updateMemo(memo.id).subscribe(
      result => {
        console.log("record eliminato")
      },
      error => {
        console.log(error)
      }
    */
  
  }
