import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.gettingMovieToEdit();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(
        this.setState({
          shouldRedirect: true,
        }),
      );
  }

  async gettingMovieToEdit() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
