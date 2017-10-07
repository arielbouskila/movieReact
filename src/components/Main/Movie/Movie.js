import React, { Component } from 'react';
import DataCache from '../../../Service/DataCache';

function MovieItem(props) {
      if (!props.movie) {
            return null;
      }
      return (
            <div className="container-body">
                  <div className="container-30">
                        <img src={props.movie.artworkUrl100} id="poster-image" />
                        <div className='movie-name'>{props.movie.trackCensoredName}</div>
                  </div>
                  <div className="container-70">
                        <p id="release-date-rating">Release date - {props.movie.releaseDate.split('T')[0]}</p>
                        <p id="genre">Genre - {props.movie.primaryGenreName}</p>

                        <h2>Plot</h2>
                        <p id="plot">
                              {props.movie.longDescription}
                        </p>
                  </div>
            </div>);
}

class Movie extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  movie: null
            };
      }


      componentDidMount() {

            let dataCache = new DataCache();
            var movie = dataCache.getResults(this.props.match.params.id);
            var searchObj = { action: 'lookup?id', value: this.props.match.params.id };
            var self = this;
            //check first if we have the movie in the cache , if not search in the api again.
            if (!movie) {
                  dataCache.search(searchObj).then(function (results) {
                        self.setState({ movie: results[0] });
                  });
            } else {
                  self.setState({ movie: movie });
            }
      }


      render() {

            return (
                  <MovieItem movie={this.state.movie} />
            );
      }
}

export default Movie;
