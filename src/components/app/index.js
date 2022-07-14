import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Header from '../header';
import Footer from '../footer';
import Home from '../home';
import About from '../about';
import Learn from '../learn';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: (window && window.location.hash.replaceAll('#/', '')) || "home",
    }
  }
	render() {
    const config = {
      page: this.state.page,
      changePageCallback: (value) => this.setState({ page: value })
    }
		return (
      <div className="app-component cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <HashRouter basename="/">
          <Header state={config} />
					<Switch>
						<Route path="/about" component={() => <About state={config} />} />
						<Route path="/learn" component={() => <Learn state={config} />} />
						<Route path="/" component={() => <Home state={config} />} />
					</Switch>
          <Footer state={config} />
        </HashRouter>
      </div>
		)
	}
}

export default App