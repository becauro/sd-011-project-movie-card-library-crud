import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" id='movieCard'>
        <img id="movieCover" src={ movie.imagePath } alt={ `Capa do filme ${movie.title}` } />
        <h3 id='movieTitle'>{movie.title}</h3>
        <h4>{movie.storyline}</h4>
        <Link to={ `movies/${movie.id}` } id='details'>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
