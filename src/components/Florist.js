//React Florist result Component

import React from 'react';

class Florist extends React.Component {

    render(){
        return(
        <div className="florist">
            <h3>{this.props.name}</h3>
            { this.props.phone ? <p>{this.props.phone}</p> : "Phone number unavailable" }
            { this.props.address? <p>{this.props.address}</p> : "Address unavailable" }
            <hr></hr>
        </div>
        )
    }
}

export default Florist;