import React from 'react';
import PropTypes from 'prop-types';

const CastList = ({ cast, src }) => (
    <li>
        <h4>{cast.name}</h4>
        <img src={src} alt="cast member" style={{ width: '92px', height: '138px' }} />
        {/* src={`https://image.tmdb.org/t/p/w92${cast.profile_path}`} */}
        <p>Character: {cast.character}</p>
    </li>
);

export default CastList;

CastList.propTypes = {
    cast: PropTypes.object.isRequired,
};
