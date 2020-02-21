import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './Components/SearchBar'
import { Container } from 'semantic-ui-react'

export default class App extends Component {
	onSearchSubmit = async term => {
		const res = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_APP}`,
			},
		})
		console.log(res.data)
	}

	render() {
		return (
			<Container style={{ marginTop: '10px' }}>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
			</Container>
		)
	}
}
