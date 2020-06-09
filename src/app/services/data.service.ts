import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { Inject } from '@angular/core';
@Injectable()
export class DataService {

  constructor(@Inject(String) protected url:string,protected http :HttpClient) { }
  //methode recuperation donnes
  getAll(){
  return this.http.get(this.url);
  }
  //methode pour la modification
  create(resource){
    return this.http.post(this.url,resource);
  }
  //methode update
  edit(resource){
  return   this.http.put(this.url+'/'+resource.id,resource);
  }
  //methode delete 
  delete(resource){
    return this.http.delete(this.url+'/'+resource.id);
  }
}
