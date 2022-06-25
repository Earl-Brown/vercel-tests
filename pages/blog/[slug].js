import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

function PostTemplate({ content, data: metadata }) {
	return (
		<div>
			<h1>{metadata.title}</h1>
			<ReactMarkdown children={content} />
		</div >
	)
}

PostTemplate.getInitialProps = async (context) => {
	const { slug } = context.query
	const content = await import(`../../content/blog/${slug}.md`)

	const data = matter(content.default)

	return { ...data }

	return { slug }
}

export default PostTemplate