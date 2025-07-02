import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const careersCategory = defineType({
  name: 'careersCategory',
  title: 'Careers Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
    