import React from 'react'
import GoogleMaps from './PlacesForm'

const Search = () => {
	return(
		<div className ="search">
			<div className="title">
				<h1>FIVE MINUTES AWAY</h1>
				<p>Find banks and coffe shops less than 5 min away from any location</p>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				
				<GoogleMaps/>
			</div>
			<div className="image">
				<img src={require('./coffee.jpg')}/>
			</div>
		</div>
	)
}

export default Search