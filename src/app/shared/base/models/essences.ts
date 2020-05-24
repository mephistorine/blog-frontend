import { ID, ISO8601 } from './base'

export enum ArticleFormat {
  standard = 'STANDARD'
}

export interface Article {
  id: ID
  publishDate: ISO8601
  modifyDate: ISO8601
  slug: string
  title: string
  content: string
  author: ID
  excerpt?: string
  format: ArticleFormat
  tags: ID[]
  categories: ID[]
  poster?: ID
  commentable: boolean
  viewsCount: number
  commentsCount: number
}

export interface Tag {
  id: ID
  color: string
  name: string
}
