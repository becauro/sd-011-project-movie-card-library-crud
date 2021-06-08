import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movieRequest = await movieAPI.getMovies();
    this.setLoadingFalse(movieRequest);
  }

  setLoadingFalse(param) {
    this.setState({
      loading: false,
      movies: param,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div data-testid="movie-list">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          </div>)}
      </div>
    );
  }
}

export default MovieList;
