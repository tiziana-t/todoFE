import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo-model';
import { TodoPartial } from 'src/app/shared/models/todo-partial-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  public getMemo() : Observable<Todo[]>{
    const url = environment.baseUrl + '/getAll/';
    return this.http.get<Todo[]>(url);
  }

  public createMemo(todoPartial : TodoPartial) : Observable<number> {
    const url = environment.baseUrl + '/creaNuovo';
    return this.http.post<number>(url, todoPartial)
}}
