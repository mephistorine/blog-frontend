import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { ApiService } from './api.service'

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [ ApiService ]
})
export class ApiModule { }
