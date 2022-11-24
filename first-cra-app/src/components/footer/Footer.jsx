import React, { Component } from 'react';
import logo from "./logo.svg"
import styles from "./footer.module.css"
class Footer extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="counterlogo" className={styles.logo} />
                <text className={styles.partners}>Партнерам</text>
                <text className={styles.devs}>Разработчики</text>
                <text className={styles.vacansy}>Вакансии</text>
                <text className={styles.oooint}>ООО “интукод”, 2020г.</text>
            </div>
        );
    }
}

export default Footer;