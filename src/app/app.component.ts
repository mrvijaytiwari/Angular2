import {Component, OnInit} from '@angular/core';
import {CustomHttpService} from "./rest.service";

@Component({
  selector: 'app-table',
  template: `
                <div>
                  <ngx-datatable  class="material"  
                    [rows]="stateData"
                    [columns]="columns"
                    [columnMode]="'force'"
                    [headerHeight]="50"
                    [footerHeight]="50"
                    [rowHeight]="'auto'"
                    [limit]="10">
                   
                  </ngx-datatable>
                </div>
              `
})
export class AppComponent implements OnInit{

  stateData = [];
  constructor(private _httpService: CustomHttpService) {}

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges()
    this._httpService.getStateList()
      .subscribe(
        data => this.stateData = data,
        error => alert(error),
        () => console.log("Finished")
      );
  }

  columns = [
    { prop: 'name', name: 'State Name' },
    { prop: 'abbr', name: 'Short name' },
    { prop: 'capital', name: 'Capital City' }
  ];
}
