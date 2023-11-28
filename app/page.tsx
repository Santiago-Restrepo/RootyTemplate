import { draftMode } from 'next/headers'
import PageComponent from '@/components/Page/Page'
import { pageQuery, $Page, pagesQuery } from '@/sanity/queries/page.queries'
import { sanityFetch, token } from '@/sanity/lib/sanityFetch'
import PreviewProvider from '@/components/PreviewProvider/PreviewProvider'
import PreviewPage from '@/components/PreviewPage/PreviewPage'
import { NotFoundPage } from '@/components/NotFoundPage/NotFoundPage'

export default async function Home() {
    const page = await sanityFetch<$Page | null>({
        query: pageQuery,
        params: {
            slug: 'home',
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
