import React from 'react'
import SearchBar from './Components/SearchBar'
import { Container } from 'semantic-ui-react'

export default function App() {
	return (
		<Container style={{ marginTop: '10px' }}>
			<SearchBar />
		</Container>
	)
}
