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
        const imgSrc = (profile_path) => {
            return profile_path != null ? `https://image.tmdb.org/t/p/w92${profile_path}` : 'https://www.novelupdates.com/img/noimagefound.jpg';
        };

        return (<>
            {cast && (
                <ul>
                    {cast.map(cast => (
                        <CastList key={cast.id} cast={cast} src={imgSrc(cast.profile_path)} />
                    ))}
                </ul>
            )}
        </>
        )
    }
};

export default Cast;