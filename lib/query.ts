import { client } from "./sanity";

export async function getSinglePost(slug: string) {
    const query = `*[_type == 'blog' && slug.current == '${slug}'] {
          "currentSlug": slug.current,
                title,
                content,
                titleImage,
                smallDescription
          }[0]`;

    const data = await client.fetch(query);

    return data;
}

export async function getPosts() {
    const query = `*[_type == "blog"] | order(_createdAt desc) {
        id,
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage,
        publishedAt
      }`;

    const data = await client.fetch(query);

    return data;
}
