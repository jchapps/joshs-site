import { defineCollection, z } from 'astro:content';


const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		// slug: z.string(),
		blurb: z.string(),
		date: z.string(),

    // TODO: I want tags
		// tags: z.array(z.string()).default([]),
	}),
});


export const collections = {
  'blogs': blogCollection,
};
