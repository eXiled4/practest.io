import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface JSP {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}
//We create an interface here to copy data to our app, declaring what key values we want to be copied

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  mylist: JSP[]

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<JSP[]>("https://jsonplaceholder.typicode.com/TODOS").subscribe(data => this.mylist = data)
  }

}

//HttpClientModule - import from @angular/common/http
// Then in the component ts file - import { HttpClient } from '@angular/common/http';
