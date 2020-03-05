import React, { Component } from 'react';
import moviesAPI from '../services/api';

class Cast extends Component {
    state = {
        cast: null,
    };

    componentDidMount() {
        moviesAPI.fetchCastDetails(this.props.match.params.movieId).then(cast => this.setState({ cast }));
    };

    render() {
        const { cast } = this.state;
        const api_key = '0eb62c2d6ca9e441fe73e4d10fffe660';
        return (<>
            {cast && (
                <ul>
                    {cast.map(cast => (
                        <li key={cast.cast_id}>
                            <h4>{cast.name}</h4>
                            <img src={`https://image.tmdb.org/t/p/w92${cast.profile_path}?api_key=${api_key}`} alt="cast member" />
                            <p>Character: {cast.character}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
        )
    }
};

export default Cast;