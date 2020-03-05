import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import getQueryParams from '../utils/getQueryParams';
import Searchbar from '../components/Searchbar';
import moviesAPI from '../services/api';

class MoviesPage extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        const { query } = getQueryParams(this.props.location.search);
        if (query) {
            this.fetchShows(query);
        }
    };

    componentDidUpdate(prevProps, prevState) {
        const { query: prevQuery } = getQueryParams(prevProps.location.search);
        const { query: nextQuery } = getQueryParams(this.props.location.search);
        if (prevQuery !== nextQuery) {
            this.fetchShows(nextQuery);
        }
    };

    fetchShows = query => {
        moviesAPI
            .fetchMovieWithQuery(query)
            .then(movies => this.setState({ movies }));
    };

    handleChangeQuery = query => {
        this.props.history.push({
            // pathname: this.props.location.pathname,
            ...this.props.location.pathname,
            search: `query=${query}`,
        })
    };

    render() {
        const { movies } = this.state;
        const { match } = this.props;
        return (
            <>
                <div>
                    <Searchbar onSubmit={this.handleChangeQuery} />
                    {movies.length > 0 && (
                        <ul>
                            {movies.map(movie => (
                                <li key={movie.id}>
                                    <NavLink to={{
                                        pathname: `${match.url}/${movie.id}`,
                                        state: { from: this.props.location },
                                    }}>
                                        {movie.original_title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </>
        );
    }
}

export default MoviesPage;