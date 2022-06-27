import findFiles from 'fast-glob'
import path from "path"
//import configuration from '../../../scripts/configuration'

export default ({ posts }) => {
	return <>
		<h3>Posts:</h3>
		{posts.map((p, idx) => <a href="blog/{p}" key={idx}>{p}</a>)}
	</>
}

export async function getStaticProps(context) {

	let contentFolder = path.resolve(process.cwd(), "content", "blog"),
		list = await findFiles("**/*.*", { stats: false, cwd: contentFolder })

	return { props: { posts: list } }
}