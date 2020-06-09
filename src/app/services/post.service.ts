import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  constructor(protected http : HttpClient) {
    super('https://api.github.com/users/ahmedBou/followers',http);
   }
  //methode recuperation donnes
 
}
