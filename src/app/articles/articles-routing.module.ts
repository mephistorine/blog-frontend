import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ArticlesContainerComponent } from './containers/articles-container/articles-container.component'

const routes: Routes = [
  {
    path: '',
    component: ArticlesContainerComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ArticlesRoutingModule { }
