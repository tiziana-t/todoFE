import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-common-selector',
  templateUrl: './common-selector.component.html',
  styleUrls: ['./common-selector.component.css']
})
export class CommonSelectorComponent implements OnInit {

  @Input() text: string = '';
  @Output() selection: EventEmitter<any> = new EventEmitter<any>();  constructor() { }

  selectorHandler(): void {
    this.selection.emit();
  }
  
  ngOnInit(): void {
  }

}
