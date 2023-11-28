import { SanityDocument } from '@sanity/client'
import { draftMode } from 'next/headers'
import PageComponent from '@/components/Page/Page'
import { pagesQuery, pageQuery, $Page } from '@/sanity/queries/page.queries'
import { sanityFetch, token } from '@/sanity/lib/sanityFetch'
import { client } from '@/sanity/lib/client'
import PreviewProvider from '@/components/PreviewProvider/PreviewProvider'
import PreviewPage from '@/components/PreviewPage/PreviewPage'
import { NotFoundPage } from '@/components/NotFoundPage/NotFoundPage'

export async function generateStaticParams() {
    const pages = await client.fetch<$Page[]>(pagesQuery)
    return pages?.map((page) => ({
        slug: page.slug.current,
    }))
}
export default async function Page({
    params,
}: {
    params: {
        slug: string
    }
}) {
    const page = await sanityFetch<$Page | null>({
        query: pageQuery,
        params: {
            slug: params.slug,
        },
    })
    const pages = await sanityFetch<$Page[]>({
        query: pagesQuery,
    })
    const isDraftMode = draftMode().isEnabled

    if (isDraftMode && token) {
        return (
            <PreviewProvider token={token}>
                {page ? (
                    <PreviewPage page={page} pages={pages} />
                ) : (
                    <NotFoundPage />
                )}
            </PreviewProvider>
        )
    }

    return page ? <PageComponent page={page} pages={pages} /> : <NotFoundPage />
}
