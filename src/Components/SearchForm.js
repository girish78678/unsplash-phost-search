import React, { useEffect, useState } from 'react';

// export default class SearchForm extends Component {
// 	state = {
// 		searchText: ''
// 	};

// 	onSearchChange = e => {
// 		this.setState({ searchText: e.target.value });
// 	};

// 	handleSubmit = e => {
// 		e.preventDefault();
// 		this.props.onSearch(this.query.value);
// 		e.currentTarget.reset();
// 	};

// 	render() {
// 		return (
// 			<form className="search-form" onSubmit={this.handleSubmit}>
// 				<label className="is-hidden" htmlFor="search">search</label>
// 				<input
// 					type="search"
// 					onChange={this.onSearchChange}
// 					ref={input => (this.query = input)}
// 					name="search"
// 					placeholder="Search Your Images"
// 				/>
// 				<button type="submit" id="submit" className="search-button">
// 					<i className="material-icons icn-search">Search</i>
// 				</button>
// 			</form>
// 		);
// 	}
// }


const SearchForm = ({ onSearch }) => {
	const [searchText, setSearchText] = useState();

	const onSearchChange = (e) => {
		setSearchText(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		onSearch(searchText);
		e.currentTarget.reset();
	};


	return <form className="search-form" onSubmit={handleSubmit}>
		<label className="is-hidden" htmlFor="search">search</label>
		<input
			type="search"
			onChange={onSearchChange}
			// ref={input => (this.query = input)}
			name="search"
			placeholder="Search Your Images"
		/>
		<button type="submit" id="submit" className="search-button">
			<i className="material-icons icn-search">Search</i>
		</button>
	</form>
}

export default SearchForm;