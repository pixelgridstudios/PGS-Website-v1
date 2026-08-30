import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'YOUR_PROJECT_ID', // Replace with your Sanity project ID
  dataset: 'production',
  apiVersion: '2023-10-01', // use current date
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
