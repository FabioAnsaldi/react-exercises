import React from 'react'
import classnames from 'classnames'

function Nav(attr) {
	return (
		<div className="nav-component">
			<nav className="nav nav-masthead">
				{attr.menu.map((obj) => (
					<React.Fragment key={obj.label}>
						<a href={`#/${obj.path}`}
							onClick={() => attr.state.changePageCallback(obj.path)}
							className={classnames('nav-link', { active: attr.state.page === obj.path })}>{obj.label}</a>
					</React.Fragment>
				))}
			</nav>
		</div>
	)
}
  
export default Nav
