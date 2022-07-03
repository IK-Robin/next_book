import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// const projectid = process.env.REACT_SANITY_PROJECT_ID
// eslint-disable-next-line import/prefer-default-export
export const client = sanityClient({
    projectId: 'o0xjjq0y',
    dataset: 'bookbackend',
    apiVersion: '2022-04-01',
    useCdn: true,
    token: process.env.REACT_SANITY_PROJECT_TOCKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
