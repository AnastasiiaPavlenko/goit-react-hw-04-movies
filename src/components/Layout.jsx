import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.css';
import Appbar from './Appbar';

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Appbar />
    <hr />
    {children}
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};
