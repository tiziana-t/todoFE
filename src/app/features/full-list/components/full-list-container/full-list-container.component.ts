import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo-model';

@Component({
  selector: 'app-full-list-container',
  templateUrl: './full-list-container.component.html',
  styleUrls: ['./full-list-container.component.css']
})

  /*
  Componente che supporta la vista per la visualizzazione della lista completa di elementi della To-Do list 
  e per la loro modifica e eliminazione.
  Vista raggiunta dalla vista di menù.
  Utilizza il servizio di get-all implementato in core/todo.service.ts per mostrare tutti gli elementi.
  Utilizza il servizio di delete implementato in core/todo.service.ts per eliminare l'elemento selezionato.
  Demanda la gestione della modifica a un altro componente (form-modifica) puntando alla sua rotta.

  */

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
    //const url = `/getAll`
    console.log(memo.id)
    this.todoService.deleteMemo(memo.id).subscribe(
      result => {
        console.log("record eliminato")
        //this.router.navigateByUrl(url)
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
      },
      error => {
        console.log(error)
      }
  )}

  modificaSelectDetailHandler(memo: Todo): void {
    const url = `/modifica/${memo.id}`
    this.router.navigateByUrl(url);
    console.log(memo.id)
  }

  onClick = (route : string) => this.router.navigateByUrl(route)

  }
