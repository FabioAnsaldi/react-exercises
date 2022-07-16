import React from 'react'

import Nav from '../nav'

function Header(attr) {
	const menu = attr.menu.filter((obj) => obj.typo === 'main')
	return (
		<div className="header-component masthead mb-auto">
			<header className="masthead mb-auto">
				<div className="inner">
					<h3 className="masthead-brand">Single Page Application</h3>
					<Nav state={attr.state} menu={menu} />
				</div>
			</header>
		</div>
	)
}
  
export default Header
