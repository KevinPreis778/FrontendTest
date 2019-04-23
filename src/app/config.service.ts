import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Article } from './article'

export interface Config {
  configUrl: string;
  textfile: string;
}

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root'})
export class ConfigService { 
  
  private configUrl = 'http://proovitoo.twn.ee/article.json';

  constructor(private http: HttpClient) 
  { }

  getArticle (): Observable<Article[]> {
    return this.http.get<Article[]>(this.configUrl)
  }

}
