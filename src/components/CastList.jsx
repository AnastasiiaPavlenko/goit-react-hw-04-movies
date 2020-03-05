import React from 'react';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => (
    <li>
        <h4>{cast.name}</h4>
        <img src={`https://image.tmdb.org/t/p/w92${cast.profile_path}`} alt="cast member" />
        <p>Character: {cast.character}</p>
    </li>
);

export default CastList;

CastList.propTypes = {
    cast: PropTypes.object.isRequired,
};
