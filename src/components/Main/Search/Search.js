import React, { Component } from 'react';
class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }
    updateSearch(event) {      
        this.props.search(event.target.value);
    }
    render() {
        return (
            <div className="search form-group">
                <input type='text' placeholder='Search your movie here' className='form-control' 
                onChange={this.updateSearch.bind(this)} />
            </div>

        );
    }
}
export default Search;