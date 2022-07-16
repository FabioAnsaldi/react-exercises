import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Header from '../header'
import Footer from '../footer'
import Home from '../home'
import About from '../about'
import Learn from '../learn'
import Login from '../login'

class App extends React.Component {

	constructor() {
		super()
		const initialState = {
			page: (window && window.location.hash.replaceAll('#/', '')) || '',
			menu: [],
			authorized: false
		}
		this.state = initialState
	}

	componentDidMount() {
		this.getMenu()
	}

	getMenu() {
		fetch('https://run.mocky.io/v3/85bcb491-42eb-4505-9779-898c0655a8d1')
			.then(res => res.json())
			.then((result) => {
				const newState = Object.assign({}, this.state, { menu: result })
				this.setState(newState)
			},
			(error) => {
				const newState = Object.assign({}, this.state, error)
				this.setState(newState)
			})
	}
  
	changePage(value) {
		const newState = Object.assign({}, this.state, { page: value })
		this.setState(newState)
	}

	submit(username, password) {
		const data = { email: username, pass: password }
		
		fetch('https://run.mocky.io/v3/422aaa4e-22c0-4e3f-901d-4ccf5eb22ff2', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: data
		})
			.then(response => {
				return (response.ok && response.json()) || { success: true }
			})
			.then(data => {
				if (data.success === true) {
					const newState = Object.assign({}, this.state, { page: '', authorized: true })
					this.setState(newState)
					window.location.hash = '#/'
				}
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	render() {
		const config = Object.assign(
			{},
			this.state,
			{ changePageCallback: (value) => this.changePage(value), submitCallback: (user, pass) => this.submit(user, pass) })
		return (
			<div className="app-component cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
				<HashRouter basename="/">
					<Header state={config} menu={this.state.menu} />
					<Switch>
						<Route path="/about" exact component={() => <About state={config} />} />
						<Route path="/learn" exact component={() => <Learn state={config} />} />
						{!this.state.authorized &&
							<Route path="/login" exact component={() => <Login state={config} />} />}
						<Route path="/" exact component={() => <Home state={config} menu={this.state.menu} />} />
					</Switch>
					<Footer state={config} menu={this.state.menu} />
				</HashRouter>
			</div>
		)
	}

}

export default App