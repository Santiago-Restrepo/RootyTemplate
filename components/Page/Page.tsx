'use client'

import { $Page } from '@/sanity/queries/page.queries'
import { PortableText } from '@portabletext/react'
import Header from '../Header/Header'

export default function PageComponent({
    page,
    pages,
}: {
    page: $Page
    pages: $Page[]
}) {
    return (
        <main className="container mx-auto prose prose-lg p-4">
            <Header pages={pages} />
            <h1 className="text-4xl border-b-2 border-gray-200 pb-4 mb-4">
                {page.title}
            </h1>

            {page.sections?.map((section) => {
                return (
                    <section key={section._key}>
                        {section.blocks?.map((block) => (
                            <PortableText key={block._key} value={block.body} />
                        ))}
                    </section>
                )
            })}
        </main>
    )
}
