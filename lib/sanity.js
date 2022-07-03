import SanityClientConstructor from '@sanity/client';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export const client = SanityClientConstructor({
    projectId: 'o0xjjq0y',
    dataset: 'bookbackend',
    apiVersion: '2022-04-01',
    useCdn: true,
    token: process.env.REACT_SANITY_PROJECT_TOCKEN,
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
