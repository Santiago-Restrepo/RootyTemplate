import { defineType } from 'sanity'

export default defineType({
    name: 'configuration',
    title: 'Configuration',
    type: 'document',
    options: {
        length: 1,
    },
    fields: [
        {
            name: 'name',
            title: 'Website Name',
            type: 'string',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'social',
            title: 'Social',
            type: 'object',
            fields: [
                {
                    name: 'facebook',
                    title: 'Facebook',
                    type: 'string',
                },
                {
                    name: 'github',
                    title: 'Github',
                    type: 'string',
                },
                {
                    name: 'instagram',
                    title: 'Instagram',
                    type: 'string',
                },
                {
                    name: 'twitter',
                    title: 'Twitter',
                    type: 'string',
                },
                {
                    name: 'youtube',
                    title: 'Youtube',
                    type: 'string',
                },
            ],
        },
    ],
})
