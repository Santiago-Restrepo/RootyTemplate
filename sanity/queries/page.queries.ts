import { groq, SanityDocument, SanityDocumentStub } from 'next-sanity'
import { Slug } from 'sanity'

// Get all pages
export const pagesQuery = groq`*[_type == "page" && defined(slug.current)]{
  _id, title, slug
}`

// Get a single page by its slug
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{ 
  _id, title, slug, sections
}`

interface $KeyedObject extends SanityDocumentStub {
    _key: string
}
export interface $Page {
    _id: string
    title: string
    slug: Slug
    sections: $PageSection[]
}

export interface $PageSection extends $KeyedObject {
    title: string
    blocks: $Block[]
}
export interface $Block extends $KeyedObject {
    body: any
}
