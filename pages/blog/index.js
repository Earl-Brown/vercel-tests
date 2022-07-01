import findFiles from 'fast-glob'
import fs from 'fs'
import path from "path"
import matter from "gray-matter"

export default ({ posts }) => {

	return <>
		<h3>Posts:</h3>
		{posts.map((p, idx) => <a href={`blog/${p.filename}`} key={idx}>{p.title}</a>)}
	</>
}

export async function getStaticProps(context) {

	let contentFolder = path.resolve(process.cwd(), "content", "blog"),
		list = (await findFiles("**/*.*", { stats: false, cwd: contentFolder }))
			.map(file => {
				const fileContents = fs.readFileSync(path.resolve(contentFolder, file), 'utf8')
				const { data } = matter(fileContents)
				return { title: data.title, filename: file }
			})

	return { props: { posts: list } }
}