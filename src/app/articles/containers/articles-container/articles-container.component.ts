import { Component } from '@angular/core'
import { ApiService } from '../../../shared/api/api.service'
import { filter, map, pluck, shareReplay, switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'
import { Article } from '../../../shared/base/models'
import { ISO8601 } from '../../../shared/base/models/base'
import { iif, of } from 'rxjs'

interface ArticleForView {
  title: string
  slug: string
  publishDate: ISO8601
  viewsCount: number
  commentsCount: number
  commentable: boolean
}

@Component({
  selector: 'sm-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: [ './articles-container.component.css' ]
})
export class ArticlesContainerComponent {

  public articles$ = this.api.getArticles().pipe(
    map((articles) => buildArticles(articles))
  )

  public articleSingle$ = this.route.paramMap.pipe(
    switchMap((params) =>
      iif(() => params.has('slug'), this.api.getArticleBySlug(params.get('slug') as string), of(null))),
    shareReplay({ bufferSize: 1, refCount: true })
  )

  constructor(private api: ApiService,
              private route: ActivatedRoute) {
  }
}

function buildArticles(articles: Article[]): ArticleForView[] {
  return articles.map((article) => {

    return {
      title: article.title,
      slug: article.slug,
      publishDate: article.publishDate,
      viewsCount: article.viewsCount,
      commentsCount: article.commentsCount,
      commentable: article.commentable
    }
  })
}
