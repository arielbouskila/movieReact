import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ResultItem extends Component {
    render() {
        return (
            <li className="span3">
                <div className="movie-item">
                    <Link to={'/movie/' + this.props.trackId}> <label title={this.props.trackName}> {this.props.trackName} </label></Link>
                    <div className="thumbnail">
                        <Link to={'/movie/' + this.props.trackId}> <img src={this.props.smallImage} alt={this.props.trackName} className="img-thumbnail" /></Link>
                    </div>
                </div>
            </li>
        )
    }
}

export default ResultItem;
