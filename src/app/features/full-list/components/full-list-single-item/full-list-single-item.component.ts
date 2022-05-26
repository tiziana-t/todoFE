import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo-model';

@Component({
  selector: 'app-full-list-single-item',
  templateUrl: './full-list-single-item.component.html',
  styleUrls: ['./full-list-single-item.component.css']
})
export class FullListSingleItemComponent implements OnInit {

  @Input() listaMemo? : Todo[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
