import React, { Component } from 'react';
import Buttons from './Buttons';
import styles from "./main.module.css"
class MainContent extends Component {
    render() {
        return (
            <div>
                <text className={styles.number}>140</text>
                <Buttons />
            </div>
        );
    }
}

export default MainContent;