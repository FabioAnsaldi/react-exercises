import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Header from '../header'
import Footer from '../footer'
import Home from '../home'
import About from '../about'
import Learn from '../learn'

class App extends React.Component {

	constructor() {
		super()
		const initialState = {
			page: (window && window.location.hash.replaceAll('#/', '')) || '',
      menu: []
		}
		this.state = initialState
	}

  componentDidMount() {
    this.getMenu();
  }

  getMenu() {
    fetch("https://run.mocky.io/v3/1e43d6eb-d37f-4db7-9eca-6cbae242e8b8")
      .then(res => res.json())
      .then((result) => {
        this.setState({ page: this.state.page, menu: result.links });
      },
      (error) => {
        this.setState({ page: this.state.page, menu: this.state.menu, error });
      })
  }
  
	changePage(value) {
		this.setState({ page: value, menu: this.state.menu })
	}

	render() {
		const config = {
			page: this.state.page,
			changePageCallback: (value) => this.changePage(value)
		}
		return (
			<div className="app-component cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
				<HashRouter basename="/">
					<Header state={config} menu={this.state.menu} />
					<Switch>
						<Route path="/about" exact component={() => <About state={config} />} />
						<Route path="/learn" exact component={() => <Learn state={config} />} />
						<Route path="/" exact component={() => <Home state={config} menu={this.state.menu} />} />
					</Switch>
					<Footer state={config} menu={this.state.menu} />
				</HashRouter>
			</div>
		)
	}

}

export default App