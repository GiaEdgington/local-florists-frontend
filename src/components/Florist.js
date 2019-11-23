import React from 'react';

class Florist extends React.Component {

    render(){
        return(
        <div className="">
            <h3>{this.props.name}</h3>
            <p>{this.props.phone}</p>
            <p>{this.props.address}</p>
        </div>
        )
    }
}

export default Florist;