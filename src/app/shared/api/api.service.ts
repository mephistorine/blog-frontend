import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Article, ArticleFormat } from '../models'
import { of } from 'rxjs'

const BASE_API_URL = 'localhost'

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getArticles() {
    // return this.http.get<Article[]>(`${BASE_API_URL}`)
    return of<Article[]>([
      {
        id: 1,
        publishDate: '2020-05-20T16:41:43.260Z',
        modifyDate: '2020-05-20T16:41:43.260Z',
        slug: 'rxjs-best-practices',
        title: 'RxJS лучшие практики',
        author: 1,
        categories: [],
        tags: [],
        commentable: false,
        content: '',
        format: ArticleFormat.standard
      }
    ])
  }
}
