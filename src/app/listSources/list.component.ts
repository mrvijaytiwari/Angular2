import {Component} from "@angular/core";
/**
 * Created by KumarA6 on 30-03-2017.
 */


@Component({
  selector: 'list-root',
  template: `
    <h4>......................</h4>
    <h4>{{listTitle}}</h4>
    <section class="main">
      <input  [(ngModel)]="tempItemToAdd" />
      <button (click)="addItem()">Add Item</button>
      <p>
      <div style="width: 300px">
        <ul class="list-group list-inline">
          <li class="list-group-item" *ngFor="let item of items">
            <div class="view">
              <span style="display: none">{{item.id}}</span>
              <span class="list-group-item-text">{{item.txt}} </span>
            </div>
          </li>
        </ul>
      </div> 
    </section>

  `

})
export class ListComponent {
  listTitle = 'My List';
  tempItemToAdd:string;
  idGenerator:number = 1;
  items: TodoItem[] = [
    new TodoItem(this.idGenerator+1,  "Raajdoot")
    ];

  addItem() {
     var tempTodo = new TodoItem(this.idGenerator+1,  this.tempItemToAdd) ;
     this.items.push(tempTodo)
     this.tempItemToAdd="";
  }

}


export class TodoItem {

  constructor(public id: number, public  txt: String) {};

}
