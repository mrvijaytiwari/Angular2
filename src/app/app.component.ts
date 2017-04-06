import {Component, OnInit} from '@angular/core';
import {CustomHttpService} from "./rest.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-table',
  template: `
                <H2 style="text-align: center">India State list from RESTful</H2>
                <div class="forLoading">
                  <loading-http [loadingStatus] = "loadingStatusThis">http load... </loading-http>
                </div>
                <div>
                  <ngx-datatable  class="material"  
                    [rows]="stateData"
                    [columns]="columns"
                    [columnMode]="'force'"
                    [headerHeight]="50"
                    [footerHeight]="50"
                    [rowHeight]="'auto'"
                    [limit]="5">
                  </ngx-datatable>
                </div>
              `
})
export class AppComponent implements OnInit{

  stateData:any;
  constructor(private _httpService: CustomHttpService) {}
  loadingStatusThis:number;

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges()
    this._httpService.getStateList()
      .subscribe(
        data => {
          this.stateData = data.jsonData;
          this.loadingStatusThis = data.status;
          console.log(this.loadingStatusThis )
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
    { prop: 'name', name: 'State Name' },
    { prop: 'abbr', name: 'Short name' },
    { prop: 'capital', name: 'Capital City' }
  ];
}
