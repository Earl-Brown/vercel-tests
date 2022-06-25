import React from 'react'

function Homepage(props) {
	return (
		<h1>Welcome to {props.pageTitle}!</h1>
	)
}

Homepage.getInitialProps = () => {
	return {
		pageTitle: 'Gleepdom!'
	}
}

export default Homepage