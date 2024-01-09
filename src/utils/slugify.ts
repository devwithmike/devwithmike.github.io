import { slug as slugger } from "github-slugger";
import { type CollectionEntry } from 'astro:content';

export const slugifyStr = (str: string) => slugger(str);

const slugify = (frontmatter: CollectionEntry<"articles">) =>
  frontmatter.slug ? slugger(frontmatter.slug) : slugger(frontmatter.title);

export const slufigyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
