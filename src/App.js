import React, { Component } from 'react'
import SearchBar from './Components/SearchBar'
import { Container } from 'semantic-ui-react'

export default class App extends Component {
	onSearchSubmit = term => {
		console.log(term)
	}

	render() {
		return (
			<Container style={{ marginTop: '10px' }}>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
			</Container>
		)
	}
}
