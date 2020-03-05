import React from 'react';
import { Spinner } from 'react-spinners-css';
import styles from '../components/Styles.module.css';

const Loader = () => (
    <div>
        <Spinner className={styles.Spinner} color="#3F50B5" />
    </div>
);

export default Loader;