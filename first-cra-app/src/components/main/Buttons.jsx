import React, { Component } from 'react';
import styles from "./main.module.css"
class Buttons extends Component {
    render() {
        return (
            <div>
                <div className={styles.firstButton}></div>
                <text className={styles.firstButtontxt}>Увеличить</text>

                <div className={styles.secondButton}></div>
                <text className={styles.secondButtontxt}>Уменьшить</text>

                <div className={styles.thirdButton}></div>
                <text className={styles.thirdButtontxt}>Сбросить</text>
            </div>
        );
    }
}

export default Buttons;