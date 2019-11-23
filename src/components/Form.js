import React from 'react';
import Florist from './Florist';
import flowers from '../images/flowers.png';

class Form extends React.Component {

    state = {
        location: '',
        florists: []
    }
    //Get user's input
    handleChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }
    //Fetch backend with location provided
    handleSubmit = (event) => {
        event.preventDefault();
        var location = this.state.location;

        fetch(`http://localhost:3000/florists?location=${location}`)
        .then(response => response.json())
        .then(response => {
            this.setState({ florists: response });
        });
    }

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