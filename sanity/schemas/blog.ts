export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH-mm',
        calendarTodayLabel: 'Today',
      },
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          of: [
            {
              type: 'image',
              options: {hotspot: true}, // Opcjonalnie, włącz hotspoty dla większej kontroli nad kadrowaniem obrazów
              fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true, // Opcja ta wyróżnia pole w UI, kiedy obraz jest wybrany
                  },
                },
                {
                  // Możesz dodać więcej pól związanych z obrazem, np. alt tekst
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  description: 'Tekst alternatywny dla obrazu, ważny dla SEO i dostępności',
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
            },
            // Możesz dodać więcej typów obiektów, które mogą być wstawiane do bloków tekstu
          ],
        },
      ],
    },
  ],
}
