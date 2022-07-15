import React from 'react'

function Home(attr) {
    return (
      <div className="main-component">
        <main role="main" className="inner cover">
          <h1 className="cover-heading">Make your change</h1>
          <p className="lead">Single PAge application is a one-page template for building simple and beautiful SPA.</p>
          <p className="lead">
            <a href="#/learn"
              onClick={() => attr.state.changePageCallback('learn')}
              className="btn btn-lg btn-secondary">Learn more</a>
          </p>
        </main>
      </div>
    );
  }
  
  export default Home;
  