import React, { Component } from 'react';
import logo from './logo.svg'
import styles from "./header.module.css"
class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="lol" className={styles.logo} />
            </div>
        );
    }
}

export default Logo;