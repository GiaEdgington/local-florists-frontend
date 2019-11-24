//React Florist Search Form Component

import React from 'react';
import Florist from './Florist';
import flowers from '../images/flowers.png';

class Form extends React.Component {

    state = {
        location: '',
        florists: [],
        coordinates: false
    }

    //Get current geolocation, if user permits.

    componentDidMount = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.searchCoordinates);
          }
    }

    //Request florist data with geolocation, if available.

    searchCoordinates = (position) => {
        fetch(`lanternflorists.azurewebsites.net/florists?&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`)
        .then(response => response.json())
        .then(response => {
            this.setState({ florists: response, coordinates: true })
        })
    }

    //Store user input in state.

    handleChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    //Respond to submit with request for florist data from backend with location provided.

    handleSubmit = (event) => {
        event.preventDefault();
        var location = this.state.location;

        fetch(`lanternflorists.azurewebsites.net/florists?location=${location}`)
        .then(response => response.json())
        .then(response => {
            this.setState({ florists: response, coordinates: false });
        });
    }

    //Florist search form renderer.

    render(){
        const localFlorists = this.state.florists.map((florist, index) => {
            return <Florist key={index} name={florist.name} phone={florist.display_phone} address={florist.location.display_address[0]+ florist.location.display_address[1]} />
        })
        return(
            <div className="form-header">
                <img src = {flowers} alt=''/>
                <div className="searchForm">
                    <form onSubmit={this.handleSubmit}>
                            <label>Find Local Florists</label><br/>
                            <input type="text" autoComplete="off" id="location" placeholder="address, neighborhood, city, state or zip" onChange={this.handleChange}></input><br/>
                            <button>Search</button>
                    </form>
            </div>
                { this.state.coordinates ? <h3>Florists in your area:</h3> : <span></span>}
                <div className="floristList">
                    <div>
                    {localFlorists}
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;