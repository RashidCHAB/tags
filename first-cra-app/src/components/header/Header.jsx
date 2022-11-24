import React, { Component } from 'react';
import Logo from './Logo';
import styles from "./header.module.css"

class Header extends Component {
    render() {
        return (
            <div>
                <Logo />
                <text href='' className={styles.main}>Главная</text>
                <text href='' className={styles.about}>О нас</text>
                <text href='' className={styles.refs}>Контакты</text>


            </div>
        );
    }
}

export default Header;