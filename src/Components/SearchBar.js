import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class SearchBar extends Component {
	state = {
		text: '',
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmitForm = e => {
		e.preventDefault()
		this.props.onSearchSubmit(this.state.text)
	}

	render() {
		console.log(this.state.text)
		return (
			<div className='ui segment'>
				<Form onSubmit={this.onSubmitForm}>
					<div>
						<Form.Field>
							<label>Image Search</label>
							<input
								type='text'
								value={this.state.text}
								name='text'
								onChange={this.onChange}
							/>
						</Form.Field>
					</div>
				</Form>
			</div>
		)
	}
}

// <form className='ui form'>
// 				<div className='field'>
// 					<labe>Image Search</labe>
// 					<input type='text'></input>
// 				</div>
