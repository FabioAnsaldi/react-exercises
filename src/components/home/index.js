import React from 'react'

function Home(attr) {
	const menu = { links: attr && attr.menu.filter((obj) => obj.typo === 'content') }
	return (
		<div className="main-component">
			<main role="main" className="inner cover">
				<h1 className="cover-heading">Make your change</h1>
				<p className="lead">Single Page application is a one-page template for building simple and beautiful SPA.</p>
				<p className="lead">
				{menu.links.map((obj) => (
					<a key={obj.path} href={`#/${obj.path}`}
						onClick={() => attr.state.changePageCallback(obj.path)}
						className="btn btn-lg btn-secondary">{obj.label}</a>
				))}
				</p>
			</main>
		</div>
	)
}
  
export default Home
