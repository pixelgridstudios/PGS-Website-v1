import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'job',
  title: 'Job Opening',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          '3D Motion Design',
          'Creative Direction',
          'Sound Design',
          'Look Development',
          'Production'
        ]
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: ['Full-Time', 'Contract', 'Freelance Roster']
      }
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Core Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tools',
      title: 'Primary Stack / Tools',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle off to hide this job opening from the site.',
    })
  ]
});
