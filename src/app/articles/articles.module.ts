import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ArticlesRoutingModule } from './articles-routing.module'
import { ArticlesContainerComponent } from './containers/articles-container/articles-container.component'
import { ApiModule } from '../shared/api/api.module'
import { SafePipeModule } from '../shared/pipes/safe-pipe';
import { ArticleContentComponent } from './components/article-content/article-content.component'


@NgModule({
  declarations: [ ArticlesContainerComponent, ArticleContentComponent ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ApiModule,
    SafePipeModule
  ]
})
export class ArticlesModule { }
