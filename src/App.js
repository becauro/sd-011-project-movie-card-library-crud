import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList }/>
        <Route path="/movies/new" component={ NewMovie }/>
        <Route exact path="/movies/:id" component={ MovieDetails }/>
        <Route path="/movies/:id/edit" component={ EditMovie }/>
        <Route path='*' component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
