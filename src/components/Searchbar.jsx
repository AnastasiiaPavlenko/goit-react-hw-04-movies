import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        value: '',
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    autoFocus
                    autoComplete="off"
                    placeholder="Search movies"
                    onChange={this.handleChange}
                />
                <button type="submit">Search</button>
            </form>
        )
    }
};

export default Searchbar;