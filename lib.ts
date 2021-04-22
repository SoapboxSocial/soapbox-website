import fs from "fs";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import { join } from "path";
import { mdxComponents } from "./components/mdx";

const docsDirectory = join(process.cwd(), "posts");

export async function getPostBySlug(slug: string) {
  const fullPath = join(docsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const source = await renderToString(content, { components: mdxComponents });

  return {
    slug,
    meta: data,
    source,
  };
}

export function getAllPosts() {
  const filenames = fs.readdirSync(docsDirectory);

  return filenames.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export async function getAllPostsWithData() {
  const posts = getAllPosts();

  const postsWithData = await Promise.all(
    posts.map(async (post) => await getPostBySlug(post.slug))
  );

  return postsWithData;
}
