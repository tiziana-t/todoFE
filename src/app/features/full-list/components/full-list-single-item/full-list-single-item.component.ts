import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo-model';

@Component({
  selector: 'app-full-list-single-item',
  templateUrl: './full-list-single-item.component.html',
  styleUrls: ['./full-list-single-item.component.css']
})

//classe che supporta le gestione del singolo elemento della lista completa di elementi della to-do list

export class FullListSingleItemComponent implements OnInit {

  @Input() memo? : Todo;
  @Output() eliminaSelectDetail: EventEmitter<Todo> = new EventEmitter()
  @Output() modificaSelectDetail: EventEmitter<Todo> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  eliminaSelectionHandler(): void {
    this.eliminaSelectDetail.emit(this.memo);

  }

  
  modificaSelectionHandler(): void {
    this.modificaSelectDetail.emit(this.memo);
  }
 

  
}
