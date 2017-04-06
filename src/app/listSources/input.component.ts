import {Component} from "@angular/core";
/**
 * Created by KumarA6 on 30-03-2017.
 */

@Component({
  selector: 'input-root',
  template: `
                <div style="padding:50px">
                  <h4>{{listTitle}}</h4>
                  <!--Example of two way binding, either input or variable changes,
                        It will work both ways-->
                  <input [(ngModel)]="liveInput" >
                  <p>Live changing value From Input:      <b> {{ liveInput }} </b>
                  <p>

                  OnChange trigger: <input [(ngModel)]="valueSet" (change)="setValue()" >                  
                    <p><label class="badge-success"> {{onChangeVar}}</label>
                  <p><p>
                  <list-root>List component</list-root>
                </div>  
              `
})
export class InputComponent {
  listTitle = 'Input Component';
  liveInput: string = '';
  valueSet: string = '';
  onChangeVar: string = '';
  setValue() {
    this.onChangeVar =  this.valueSet ;
  }

}



/*
  <input [(ngModel)]="name" #ctrl="ngModel" required>
 <p>Value: {{ name }}</p>
 <p>Valid: {{ ctrl.valid }}</p>
 <button (click)="setValue()">Set value</button>

* */
