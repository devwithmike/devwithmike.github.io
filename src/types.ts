export interface Frontmatter {
  title: string;
  image?: {
		src: string,
		alt: string
	};
  description: string;
  datetime: string;
  draft: boolean;
  tags: string[];
}
