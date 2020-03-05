import React, { Component } from 'react';
import moviesAPI from '../services/api';
import CastList from '../components/CastList';

class Cast extends Component {
    state = {
        cast: null,
    };

    componentDidMount() {
        moviesAPI.fetchCastDetails(this.props.match.params.movieId).then(cast => this.setState({ cast }));
    };

    render() {
        const { cast } = this.state;
        return (<>
            {cast && (
                <ul>
                    {cast.map(cast => (
                        <CastList key={cast.id} cast={cast} />
                    ))}
                </ul>
            )}
        </>
        )
    }
};

export default Cast;