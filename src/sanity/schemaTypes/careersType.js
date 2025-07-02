import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'careers',
  title: 'Careers Page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 }
    }),
    // e.g. a hero, intro text, etc.
    defineField({
      name: 'body',
      title: 'Page Content',
      type: 'blockContent'
    }),
    // (Optional) if you ever want to feature or reorder jobs manually:
    defineField({
      name: 'featuredJobs',
      title: 'Featured Jobs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'job' }] }]
    })
  ]
})
