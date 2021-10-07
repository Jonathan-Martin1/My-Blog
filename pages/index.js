import fs from 'fs';
import matter from 'gray-matter';
import {
  signin,
  signOut,
  useSession,
} from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';

import Post from '../components/Post';
import { sortByDate } from '../utils';

export default function Home({ posts }) {
	const [session] = useSession();
	return (
		<div>
			<Head>
				<title>Jonathans Blog</title>
			</Head>
			<div>
				<h1>Private Zone</h1>
				<div>
					<nav>
						{!session ? (
							<button className='btn' onClick={() => signin('github')}>
								Sign In
							</button>
						) : (
							<>
								<Link href='/private'>
									<a className='btn'>Private here</a>
								</Link>
								<span>{session.user.name}</span>
								{session.user.image && (
									<img src={session.user.image} width={50} height={200} />
								)}
								<button className='btn' onClick={signOut}>
									Sign Out
								</button>
							</>
						)}
					</nav>
				</div>
			</div>
			<br />
			<br />
			<h1>Jonathans Blog</h1>
			<div>
				<Link href='/github/repos'>
					<a className='btn'>My Github Repos</a>
				</Link>
			</div>
			<div className='posts'>
				{posts.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	// get files from posts dir
	const files = fs.readdirSync(path.join('posts'));
	// get slug and frontmatter from posts
	const posts = files.map((filename) => {
		//Create slug
		const slug = filename.replace('.md', '');

		// get frontmatter

		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
			'utf-8',
		);

		const { data: frontmatter } = matter(markdownWithMeta);
		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			posts: posts.sort(sortByDate),
		},
	};
}
