import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Movie Card Library CRUD</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route exact path="/movies/new" component={ NewMovie } />
            <Route exact path="/movies/:id" component={ MovieDetails } />
            <Route exact path="/movies/:id/edit" component={ EditMovie } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
