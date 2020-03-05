import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomePageList = ({ movie }) => (
    <li>
        <Link to={`movies/${movie.id}`}>
            {movie.original_title}
        </Link>
    </li>
);

export default HomePageList;

HomePageList.propTypes = {
    movie: PropTypes.object.isRequired,
};
