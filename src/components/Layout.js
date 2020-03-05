import React from 'react';
import PropTypes from 'prop-types';
import Appbar from './Appbar';
import styles from './Styles.module.css';

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Appbar />
    <hr />
    {children}
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.object()),
};
