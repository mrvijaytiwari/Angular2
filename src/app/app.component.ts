import {Component, OnInit} from '@angular/core';
import {CustomHttpService} from "./rest.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{

  stateData:any;
  constructor(private _httpService: CustomHttpService) {}
  loadingStatusThis:number;
  loadingIndicator: boolean = true;
  limit: number =5;
  selected = [];
  LIMITS = [
    { key: '5', value: 5 },
    { key: '10', value: 10 },
    { key: '20', value: 20 }
  ];
  rowLimits: Array<any> = this.LIMITS;
  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges()


 this.limit = this.LIMITS[0].value;
 
    this.getStateList();
  }
 getStateList(){
    this._httpService.getStateList()
      .subscribe(
        data => {
          this.stateData = data.jsonData;
          this.loadingStatusThis = data.status;
          console.log(this.loadingStatusThis )
          this.loadingIndicator=false;
        },
        error => {
          console.log(error);
          this.loadingStatusThis = 100;  
        },
         () => {
              console.log("Finished")
              this.loadingStatusThis = 100;
              console.log(this.loadingStatusThis )

         }
      ); 
    }
  columns = [
    { headerCheckboxable:true,checkboxable:true},
    { prop: 'name', name: 'State Name' },
    { prop: 'abbr', name: 'Short name' },
    { prop: 'capital', name: 'Capital City' }
  ];


  changeRowLimits(value) {
    this.limit = value;
    this.loadingIndicator=true;
    this.stateData=[];
    this.getStateList();
    console.log("limit is",this.limit,"data size",this.stateData)
  }

onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
}
}
