import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project (Case Study)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'meta',
      title: 'Meta / Client Name',
      type: 'string',
      description: 'E.g., "M1 CHIP · DIGITAL CAMPAIGN"',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'E.g., "Motion Design", "3D Lookdev"',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Project Overview',
      type: 'text',
      description: 'Short paragraph shown on the project detail page.',
    }),
    defineField({
      name: 'behanceUrl',
      title: 'Behance URL',
      type: 'url',
    }),
    defineField({
      name: 'vimeoUrl',
      title: 'Vimeo URL',
      type: 'url',
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        { type: 'image' },
        { 
          type: 'object',
          name: 'videoBlock',
          fields: [
            { name: 'vimeoId', title: 'Vimeo ID', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' }
          ]
        },
      ],
      description: 'Build the case study layout here using images and videos.',
    }),
  ],
});
