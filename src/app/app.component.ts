import { Component } from '@angular/core';
declare const randy:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TITLE nAMe';
  champions = ["Lucian", "Nami", "Garen", "Sett", "Zeri"]
  parentData = "PrintThisText";

  //Property 'page' has no initializer and is not definitely assigned in the constructor.
  // stackoverflow fix:
      // Just go to tsconfig.json and set
      // "compilerOptions": {
    //      "strictPropertyInitialization": false,
            //...
          //}


randomFx = <[]>randy()

page = 1
itemsToDisplay = 8

pageChanger(event){
  this.page = event
}


  // randyNum = <[]>randy()



  // randyNum = <[]>randy().sort(function(a, b){return b - a})

  //When function assigned to variable - can chain further methods like .sort(), .filter()



  //NOT!!!! page: 1 BUTTTT page= 1!!!



  //the event inside the argument of pageChanged returns:
      // error TS7006: Parameter 'event' implicitly has an 'any' type.
  // In your tsconfig.json file set the parameter "noImplicitAny": false under compilerOptions to get rid of this error.


}


// To install pagination function - first use:
//    npm install ngx-pagination
// Pagination function code goes into component
//  import pagination module into the module
      // import { NgxPaginationModule } from 'ngx-pagination';
//  display code into html file

//ng g pipe *pipe name here* - creates a pipe at the root of your app