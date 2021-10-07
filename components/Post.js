import Image from 'next/image';
import Link from 'next/link';

export default function Post({ post }) {
	return (
		<div className='card'>
			<Image
				src={post.frontmatter.cover_image}
				alt=''
				width={200}
				height={200}
			/>

			<div className='post-date'>Posted on {post.frontmatter.date}</div>
			<h3>{post.frontmatter.title}</h3>
			<p>{post.frontmatter.excerpt}</p>
			<Link href={`/blog/${post.slug}`}>
				<a className='btn'>Read More</a>
			</Link>
		</div>
	);
}
