import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import moviesAPI from '../services/api';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';
import Loader from '../components/Loader';
import routes from '../routes';
import styles from '../components/Styles.module.css'

class MovieDetailsPage extends Component {
    state = {
        movie: null,
        isLoading: false,
        error: null,
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        moviesAPI
            .fetchMovieDetails(this.props.match.params.movieId)
            .then(movie => this.setState({ movie }))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    };

    handleGoBack = () => {
        this.props.history.push(routes.movies);

        const { state } = this.props.location;

        if (state && state.from) {
            return this.props.history.push(this.props.location.state.from);
        };

        this.props.history.push(routes.shows)
    };

    render() {
        const { movie, isLoading, error } = this.state;
        const { match } = this.props;
        const api_key = '0eb62c2d6ca9e441fe73e4d10fffe660';

        return (
            <div>
                {movie && (
                    <>
                        <div>
                            <button className={styles.BackButton} type="button" onClick={this.handleGoBack}>
                                Go back
                            </button>
                        </div>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}?api_key=${api_key}`} alt="movie poster" />
                            <h2>{movie.original_title}</h2>
                        </div>
                        <p>User vote: {movie.vote_average}</p>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h3>Genres</h3>
                        <div>{movie.genres.map(genre =>
                            <p key={genre.id}>{genre.name}</p>)}
                        </div>
                        <hr />
                        <h4>Additional Information</h4>
                        <ul>
                            <li>
                                <NavLink to={`${match.url}/cast`}>
                                    Cast
                            </NavLink>
                            </li>
                            <li>
                                <NavLink to={`${match.url}/reviews`}>
                                    Reviews
                            </NavLink>
                            </li>
                        </ul>
                        <hr />
                        {error && <p>Woops, something went wrong: {error.message} </p>}
                        {isLoading && <Loader />}
                        <Route path={routes.cast} component={Cast} />
                        <Route path={routes.reviews} component={Reviews} />
                    </>
                )}
            </div>
        );
    }
}

export default MovieDetailsPage;