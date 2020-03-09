import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.css';
import Loader from './Loader';

const Appbar = React.lazy(() => import('./Appbar'));

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Suspense fallback={<Loader />}>
      <Appbar />
    </Suspense>
    <hr />
    {children}
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};
