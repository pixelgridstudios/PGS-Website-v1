import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'showreel',
  title: 'Showreel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Studio Showreel',
    }),
    defineField({
      name: 'vimeoId',
      title: 'Main Vimeo ID',
      type: 'string',
      description: 'The ID of the main showreel video on Vimeo.',
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      description: 'Select the projects that appear in this showreel.',
    }),
    defineField({
      name: 'productionDetails',
      title: 'Production Details Text',
      type: 'text',
    })
  ]
});
