import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesContainerComponent } from './containers/articles-container/articles-container.component';


@NgModule({
  declarations: [ ArticlesContainerComponent ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
