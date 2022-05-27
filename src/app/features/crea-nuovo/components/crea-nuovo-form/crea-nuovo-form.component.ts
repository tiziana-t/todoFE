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
      dueTo: newTodoForm.value.campoDueTo
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
