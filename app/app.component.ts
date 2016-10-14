import { Component } from '@angular/core';



@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
 
})

export class AppComponent { 
  
    // [ ] property binding, component to DOM
    // ( ) event binding, DOM to component
  
    title = 'Customer App';
    name = 'Ward';
    wardsColor = 'blue';
   

    changeSuitColor () {
      this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
    }
}
