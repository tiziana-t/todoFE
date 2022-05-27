import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo-model';
import { TodoPartial } from 'src/app/shared/models/todo-partial-model';


@Component({
  selector: 'app-crea-nuovo-form',
  templateUrl: './crea-nuovo-form.component.html',
  styleUrls: ['./crea-nuovo-form.component.css']
})

  /*
  Componente che supporta una vista con un form per la creazione di un nuovo elemento della To-Do list.
  Vista raggiunta dalla vista di Menù.
  Utilizza un servizio di creazione del record implementato in core/todo.service.ts
  */

export class CreaNuovoFormComponent implements OnInit {

  newTodo? : Todo; 

  constructor(
    private todoService : TodoService
  ) { }

  ngOnInit(): void {
  }



  completeTodoForm(newTodoForm: NgForm){
    
    const todoPartial: TodoPartial = {
      text: newTodoForm.value.campoTesto,
      state: newTodoForm.value.campoStato,
      createdAt: newTodoForm.value.campoCreatoIl,
      dueTo: newTodoForm.value.campoDueTo //da implementare il fatto che se questo campo è null gli viene associato un valore di default configurabile
    }

    this.todoService.createMemo(todoPartial).subscribe(
      result => {
        console.log(result)
      },
      error => {
        console.log(error)
      }
    )

  }

}
