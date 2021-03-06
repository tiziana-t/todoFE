import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  newTodo? : Todo
  incorrectForm: boolean = false
  defaultOdierna: Date= new Date
  day: number = 0;

  constructor(
    private todoService : TodoService,
    private router : Router
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

    if(!todoPartial.state){
      todoPartial.state = "TODO"
    }

    if(!todoPartial.createdAt){
      todoPartial.createdAt = this.defaultOdierna
      console.log(todoPartial.createdAt);
      
    }

    if(!todoPartial.dueTo){
      let dataCopy = new Date(todoPartial.createdAt.valueOf())
      console.log(todoPartial.createdAt);
      console.log(dataCopy);
      
      
      dataCopy.setDate(dataCopy.getDate()+10)
      console.log(dataCopy);
      console.log(todoPartial.createdAt);
      
      
      todoPartial.dueTo = dataCopy
    }

    console.log(todoPartial)


    if(newTodoForm.value.campoTesto){ // il form risulta invalido se non viene compilato il campo testo
      console.log("form ok")
      const url =  `/getAll`
      this.todoService.createMemo(todoPartial).subscribe(
        result => {
          console.log(result)
          this.router.navigateByUrl(url)

        },
        error => {
          console.log(error)
        }
      )
    }
    else{
      console.log("form sbagliato")
      this.incorrectForm = true
    }



  }

}
