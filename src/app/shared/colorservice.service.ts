import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorserviceService {

  constructor(public http: HttpClient) { }

  // Getting all the colors from the JOSN
  getColors(){
    return this.http.get("./assets/colors.json").pipe(map((res: any) => {
      if(res){
        return res;
      }
      else{
        return false;
      }
    }));
  }

}
