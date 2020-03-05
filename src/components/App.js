import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import Layout from './Layout';
import NotFound from '../views/NotFound';
import routes from '../routes';

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Route path={routes.movies} component={MoviesPage} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
