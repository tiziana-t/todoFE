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
export class FormModificaComponent implements OnInit {

  updatedTodo? : Todo;
  id : number = 0;

  constructor(
    private todoService : TodoService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

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
        const url = `/getAll`
        this.router.navigateByUrl(url);

      },
      error => {
        console.log(error)
      }
    )
  }
  
}




