import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'portableText',
    title: 'Portable Text',
    type: 'object',
    fields: [
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],
})
