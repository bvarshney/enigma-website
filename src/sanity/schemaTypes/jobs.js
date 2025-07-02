import { defineType, defineField, defineArrayMember } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string'
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string'
    }),
    defineField({
      name: 'salary',
      title: 'Salary',
      type: 'string'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Job Slug',
      type: 'slug',
      options: {
        source: 'jobTitle',
        maxLength: 96
      }
    }),
    defineField({
      name: 'smallDescription',
      title: 'Short Description',
      type: 'string'
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'careersCategory' }]
        })
      ]
    })
  ]
})
