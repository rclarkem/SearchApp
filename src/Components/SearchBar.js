import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class SearchBar extends Component {
	state = {
		text: '',
	}

	render() {
		return (
			<div className='ui segment'>
				<Form>
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
