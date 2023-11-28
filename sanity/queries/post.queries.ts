import { groq } from 'next-sanity'

// Get all pages
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  _id, title
}`

// Get a single page by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  _id, title
}`

export interface $Post {
    _id: string
    title: string
}
