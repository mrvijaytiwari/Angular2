/**
 * Created by KumarA6 on 22-03-2017.
 */

import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class CustomHttpService {

  constructor(private _http: Http) {}

  getStateList() {
          return this._http.get('http://services.groupkt.com/state/get/ind/all')
              .map(res => {
                let allJson = res.json();
                if (res.status === 201) {
                  return { status: res.status, jsonData: allJson}
                } else
                if (res.status === 200) {
                  return { status: res.status, jsonData: allJson.RestResponse.result };
                }
              });
    }

  /*postJSON() {
      const json = JSON.stringify({varkey: 'workflow', varvalue: 'Incubator'});
      const  params =  'json=' + json;
      const headers =  new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        return this._http.post('http://services.groupkt.com/state/get/ind/all',
                                    params, {
                                               headers: headers
                                               }
                                    ).map(res => res.json());

    }*/
}
