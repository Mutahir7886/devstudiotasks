import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient,HttpParams} from "@angular/common/http";
import {Posts} from "../shared/classes/post_data";

@Injectable()
export  class freeApiService  {



  constructor(private httpClient:HttpClient) {
  }

  getCovidData():Observable<any>{
    return this.httpClient.get('https://api.covid19api.com/summary')
  }


  getComments():Observable<any>{

    //let param1= new HttpParams().set("userId","1",)

    //return this.httpClient.get('https://jsonplaceholder.typicode.com/posts',{params:param1})
      return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')

  }

  getCommentsbyParameter():Observable<any>{

    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts?userId='+'1',{})
  }

  post(opost:Posts):Observable<any>{
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',opost)
  }

  deletedata():Observable<any>{

    return this.httpClient.delete('https://jsonplaceholder.typicode.com/posts/1')
  }


}

