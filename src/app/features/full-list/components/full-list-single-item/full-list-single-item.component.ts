import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo-model';

@Component({
  selector: 'app-full-list-single-item',
  templateUrl: './full-list-single-item.component.html',
  styleUrls: ['./full-list-single-item.component.css']
})
export class FullListSingleItemComponent implements OnInit {

  @Input() memo? : Todo;
  @Output() eliminaSelectDetail: EventEmitter<Todo> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  eliminaSelectionHandler(): void {
    this.eliminaSelectDetail.emit(this.memo);

  }
}
