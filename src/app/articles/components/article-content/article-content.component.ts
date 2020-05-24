import { Component, Input } from '@angular/core'
import { Article } from '../../../shared/base/models'

@Component({
  selector: 'sm-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent {

  @Input()
  public article: Article

  constructor() { }

}
