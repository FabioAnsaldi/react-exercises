import classnames from 'classnames'


function Header(attr) {
    return (
      <div className="header-component masthead mb-auto">
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">Single Page Application</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a href="#/home"
                onClick={() => attr.state.changePageCallback('home')}
                className={classnames('nav-link', { active: attr.state.page === 'home' })}>Home</a>
              <a href="#/about"
                onClick={() => attr.state.changePageCallback('about')}
                className={classnames('nav-link', { active: attr.state.page === 'about' })}>About</a>
            </nav>
          </div>
        </header>
      </div>
    );
  }
  
  export default Header;
  