import {Component} from "@angular/core";
/**
 * Created by KumarA6 on 30-03-2017.
 */

@Component({
  selector: 'input-root',
  template: `
                <div style="padding:50px">
                  <h4>{{listTitle}}..</h4>
                  <!--Example of two way binding, either input or variable changes,
                        It will work both ways-->
                  <input [(ngModel)]="name" >
                  <p>Value: {{ name }}</p>
                  <button (click)="setValue()">Set value 'Alpha'</button>
                  <p><p>
                  <list-root>List component</list-root>
                </div>  
              `

})
export class InputComponent {
  listTitle = 'Input Component';
  name: string = '';
  setValue() { this.name = 'Alpha'; }

}



/*
  <input [(ngModel)]="name" #ctrl="ngModel" required>
 <p>Value: {{ name }}</p>
 <p>Valid: {{ ctrl.valid }}</p>
 <button (click)="setValue()">Set value</button>

* */
