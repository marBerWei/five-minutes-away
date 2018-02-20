import React from 'react'
import GoogleMaps from './PlacesForm'
import { Grid, Image } from 'semantic-ui-react'

const Search = () => {
	return(
		<div className= "search" >
		 <Grid columns={2} >
			<Grid.Column>
				<span><h1>FIVE MINUTES AWAY</h1>
				<h3>Find the perfect location for the next WeWork: </h3>
				</span>
				<GoogleMaps/>
			</Grid.Column>
			<Grid.Column>
				<Image src={require('./coffee.jpg')}/>
			</Grid.Column>
		 </Grid>
		 </div>
	)
}

export default Search