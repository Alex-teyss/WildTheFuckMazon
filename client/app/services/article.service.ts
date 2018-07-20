import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Article } from '../shared/models/article.model';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  countArticles(): Observable<number> {
    return this.http.get<number>('/api/articles/count');
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>('/api/article', article);
  }

  getArticle(article: Article): Observable<Article> {
    return this.http.get<Article>(`/api/article/${article._id}`);
  }

  editArticle(article: Article): Observable<string> {
    return this.http.put(`/api/article/${article._id}`, article, { responseType: 'text' });
  }

  deleteArticle(article: Article): Observable<string> {
    return this.http.delete(`/api/article/${article._id}`, { responseType: 'text' });
  }

}
