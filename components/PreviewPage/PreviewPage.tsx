'use client'

import { useParams } from 'next/navigation'
import { useLiveQuery } from '@sanity/preview-kit'
import { $Page, pageQuery } from '@/sanity/queries/page.queries'
import PageComponent from '../Page/Page'

export default function PreviewPage({
    page,
    pages,
}: {
    page: $Page
    pages: $Page[]
}) {
    const params = useParams()
    const [data] = useLiveQuery(page, pageQuery, params)

    return data && <PageComponent page={data} pages={pages} />
}
