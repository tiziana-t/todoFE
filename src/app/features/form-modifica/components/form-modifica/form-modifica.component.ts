import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo-model';
import { TodoPartial } from 'src/app/shared/models/todo-partial-model';

@Component({
  selector: 'app-form-modifica',
  templateUrl: './form-modifica.component.html',
  styleUrls: ['./form-modifica.component.css']
})

  /*
  Componente che supporta la vista per la modifica di un elemento della To-Do list 
  dopo averlo selezionato dalla vista full-list(che mostra tutti gli elementi della lista).
  Utilizza il servizio di update implementato in core/todo.service.ts per modificare l'elemento.
  Dopo aver effettuato la modifica questo componente fa sì che si torni alla vista
  relativa al componente full-list per vedere di nuovo tutti gli elementi tra qui quello aggiornato.

  */

export class FormModificaComponent implements OnInit {

  updatedTodo? : Todo;
  id : number = 0;

  constructor(
    private todoService : TodoService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  //l'id mi è passato attraverso l'url nel momento in cui nella vista precedente a questa seleziono uno degli elementi della to-do list
  ngOnInit(): void {
    this.route.params.subscribe(
      p => {
        this.id = p['id_to_change'];
      }
    );
  }

  completeTodoForm(updatedTodoForm: NgForm){
    
    const todoPartial: TodoPartial = {
      text: updatedTodoForm.value.campoTesto,
      state: updatedTodoForm.value.campoStato,
      createdAt: updatedTodoForm.value.campoCreatedAt,
      dueTo: updatedTodoForm.value.campoDueTo
    }
    
    this.todoService.updateMemo(this.id, todoPartial).subscribe(
      result => {
        console.log(result)
        const url = `/getAll` //torno alla vista che mostra tutti gli elementi della to-do list tra cui quello aggiornato
        this.router.navigateByUrl(url);

      },
      error => {
        console.log(error)
      }
    )
  }
  
}




