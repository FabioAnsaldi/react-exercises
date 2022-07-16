import React from 'react'

import Nav from '../nav'

function Footer(attr) {
	const menu = attr.menu.filter((obj) => obj.typo === 'extra')
	return (
		<div className="footer-component">
			<footer className="mastfoot mt-auto">
				<div className="inner">
					<span>Corso Front End, by</span> <strong>Tutti i corsisti!</strong>
					<Nav state={attr.state} menu={menu} />
				</div>
			</footer>
		</div>
	)
}
  
export default Footer
