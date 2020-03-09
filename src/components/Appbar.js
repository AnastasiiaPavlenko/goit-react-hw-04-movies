import React, { Suspense } from 'react';
import Loader from './Loader';

const Navigation = React.lazy(() => import('./Navigation'));

const Appbar = () => (
  <header>
    <Suspense fallback={<Loader />}>
      <Navigation />
    </Suspense>
  </header>
);

export default Appbar;
