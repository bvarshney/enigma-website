import { StructureBuilder } from 'sanity/desk'

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Blog Section
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Content')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),

      // Careers section
      S.listItem()
        .title('Careers')
        .child(
          S.list()
            .title('Careers')
            .items([
              S.documentTypeListItem('job').title('All Jobs'),
              S.documentTypeListItem('careersCategory').title('Job Categories'),
            ])
        ),

      S.divider(),

      // Everything else (filter out what we’ve explicitly added above)
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'post',
            'category',
            'author',
            'job',
            'careersCategory'
          ].includes(item.getId())
      )
    ])

