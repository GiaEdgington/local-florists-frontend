import React from 'react';

class Form extends React.Component {

    state = {
        location: '',
        florists: []
    }

    handleChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var location = this.state.location;

        fetch(`http://localhost:3000/florists?location=${location}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            //this.setState({ florists: response });
        });
    }

    render(){
        return(
            <div className="">
                <div className="">
                    <form onSubmit={this.handleSubmit}>
                            <label>Find Local Florists</label><br/>
                            <input type="text" autoComplete="off" id="location" placeholder="address, neighborhood, city, state or zip" onChange={this.handleChange}></input><br/>
                            <button>Search</button>
                    </form>
            </div>
                <div className="">
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;