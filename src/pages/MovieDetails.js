import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = ({
      movie: {},
      isLoading: true,
    });

    this.movieDetails = this.movieDetails.bind(this);
    this.hadleDelete = this.hadleDelete.bind(this);
  }

  componentDidMount() {
    this.asyncGetMovie();
  }

  async asyncGetMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);

    this.setState({
      id,
      movie,
      isLoading: false,
    });
  }

  async hadleDelete() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  movieDetails() {
    const { movie, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>

        <div>
          <Link to={ `/movies/${id}/edit` }> EDITAR</Link>
          <Link to="/"> VOLTAR</Link>
          <Link to="/" onClick={ this.hadleDelete }> DELETAR</Link>
        </div>

      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? <Loading /> : this.movieDetails()}</div>;
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf({}),
    id: PropTypes.number,
  }).isRequired,
};
