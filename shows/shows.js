import React from "react";
import "./showsstyle.css"

class Shows extends React.Component {

    render() {
        return (
            <div className="container">
                <img className="image" src={this.props.poster} alt="b99"></img>
                <div className="detailsContainer">
                    <p className="heading">{this.props.name}</p>
                    <p className="details">{this.props.details}</p> 
                    <p className="details">rating: {this.props.rating}</p> 
                </div>
            </div>
        );
    }

}

export default Shows