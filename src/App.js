import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import ImgList from './Components/ImgList';
import SearchForm from './Components/SearchForm';

const App = () => {
	const [imgs,setImages] = useState([]);
	const [loadingState,setLoadingState] = useState(false);

	const performSearch = (query = 'god') => {
		setLoadingState(true);
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=15&query=${query}&client_id=P9H7xeXPeu5iZInKev8lSEQ34dKT4CwyEzKrwcoFf-A`
			)
			.then(data => {
				setImages(data.data.results);
				setLoadingState(false);
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	useEffect(() => {
		performSearch();
	}, []);
	

	return <div>
	<div className="main-header">
		<div className="inner">
			<h1 className="main-title">Reach Photo Search </h1>
			<SearchForm onSearch={performSearch} />
		</div>
	</div>
	<div className="main-content">
		{loadingState
			? <p>Loading</p>
			: <ImgList data={imgs} />}
	</div>
</div>
}

export default App