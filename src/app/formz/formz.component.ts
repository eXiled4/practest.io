import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formz',
  templateUrl: './formz.component.html',
  styleUrls: ['./formz.component.css'],
  // template: `<h1>Formz Practice!! QWERRTY</h1>
  // <div>{{p_title}}</div>`
})
export class FormzComponent {
  @Input() p_title:string;
}
