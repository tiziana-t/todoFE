import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo-model';
import { TodoPartial } from 'src/app/shared/models/todo-partial-model';

@Component({
  selector: 'app-form-modifica',
  templateUrl: './form-modifica.component.html',
  styleUrls: ['./form-modifica.component.css']
})
export class FormModificaComponent implements OnInit {

  updatedTodo? : Todo;

  constructor() { }

  ngOnInit(): void {
  }
  completeTodoForm(updatedTodoForm: NgForm){
    
    const todoPartial: TodoPartial = {
      text: updatedTodoForm.value.campoTesto,
      state: updatedTodoForm.value.campoStato,
      createdAt: updatedTodoForm.value.campoCreatedAt,
      dueTo: updatedTodoForm.value.campoDueTo
    }
  }

}
