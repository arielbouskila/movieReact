import React, { Component } from 'react';
import ResultItem from './ResultItem';
class Results extends Component {

    render() {
        let resultItems = this.props.searchResults.map(function (item) {
            return <ResultItem  key={item.trackId} trackId={item.trackId} trackName={item.trackName} smallImage={item.artworkUrl60} />
        });

        return (
            <ul>
                {resultItems}
            </ul>

        )
    }
}
export default Results;
