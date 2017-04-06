/**
 * Created by KumarA6 on 06-04-2017.
 */
import {Component, Input, OnInit, Output} from '@angular/core';
import {CustomHttpService} from "./rest.service";

@Component({
  selector: 'loading-http',
  template: `
    <div class="loading-div"  [ngSwitch]="loadingStatus == 200 || loadingStatus == 100"> 
      <div class="loader-container"  *ngSwitchDefault >
        <div class="loader">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
      <div  *ngSwitchCase="true"class="loaded"></div>
    </div>
  `
})

export class LoadingComponent{
  @Input() loadingStatus: number;
}
