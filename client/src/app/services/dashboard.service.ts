import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Avg_MudCrab, Avg_Paddy, Data_MudCrab, Data_Paddy } from '../models/data.data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  //mudcrab

  getMudCrabData():Observable<Data_MudCrab[]>{

    const result_mudcrab = this.http.get<Data_MudCrab[]>("https://localhost:7161/api/MudCrab/getMudcrabData").pipe(
      catchError(er=>{
        console.log(er);
        return throwError(()=>new Error(er))
      })
    );

    return result_mudcrab;
  }

  getMudCrabAvg():Observable<Avg_MudCrab[]>{

    const avg_mudcrab = this.http.get<Avg_MudCrab[]>("https://localhost:7161/api/MudCrab/getMudcrabAvg").pipe(
      catchError(er=>{
        console.log(er);
        return throwError(()=>new Error(er))
      })
    );
  
    return avg_mudcrab;
   }

  //Paddy

  getPaddyData():Observable<Data_Paddy[]>{

    const result_paddy = this.http.get<Data_Paddy[]>("https://localhost:7161/api/Paddy/getPaddyData").pipe(
      catchError(er=>{
        console.log(er);
        return throwError(()=>new Error(er))
      })
    );

    return result_paddy;
  }

  getPaddyAvg():Observable<Avg_Paddy[]>{

    const avg_paddy = this.http.get<Avg_Paddy[]>("https://localhost:7161/api/Paddy/getPaddyAvg").pipe(
      catchError(er=>{
        console.log(er);
        return throwError(()=>new Error(er))
      })
    );
  
    return avg_paddy;
   }

}
