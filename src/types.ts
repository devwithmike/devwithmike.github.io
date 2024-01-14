export interface Frontmatter {
  title: string;
	datetime: Date;
	description: string;
	tags: string[];
	draft: boolean;
  image?: {
		src: string,
		alt: string
	};
}
