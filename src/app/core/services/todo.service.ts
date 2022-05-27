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


  //*************GET*************

  public getMemo() : Observable<Todo[]>{
    const url = environment.baseUrl + '/getAll/';
    return this.http.get<Todo[]>(url);
  }

  public getByKeyword(keyword: string) : Observable<Todo[]> {
    const url = environment.baseUrl + '/memoTrovati/' + keyword;
    console.log(url)
    return this.http.get<Todo[]>(url);
  }


  //*************POST*************

  public createMemo(todoPartial : TodoPartial) : Observable<number> {
    const url = environment.baseUrl + '/creaNuovo';
    return this.http.post<number>(url, todoPartial)
  }


  //*************DELETE*************
  
  public deleteMemo(id: number) {
    const url = environment.baseUrl + '/getAll/' + id;
    console.log(url)
    return this.http.delete<number>(url)
  }


  //*************PUT*************
  
  public updateMemo(id: number, todoPartial :TodoPartial) : Observable<Todo> {
    const url = environment.baseUrl + '/modifica/' + id;
    return this.http.put<Todo>(url, todoPartial)
  }
  
}
