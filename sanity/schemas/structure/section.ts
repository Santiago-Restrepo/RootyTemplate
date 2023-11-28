import { defineType } from 'sanity'
export default defineType({
    name: 'section',
    title: 'Section',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'blocks',
            title: 'Blocks',
            type: 'array',
            of: [{ type: 'portableText' }],
        },
    ],
})
