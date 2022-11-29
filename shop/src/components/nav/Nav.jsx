import React from 'react';
import styles from './nav.module.css'
const Nav = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.head}>Intocode AutoShop</div>
            <div className={styles.string1}>Mercedes</div>
            <div className={styles.string2}>Porshe</div>
            <div className={styles.string3}>Other</div>

        </div>
    );
};

export default Nav;