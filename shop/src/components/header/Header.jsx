import React, { Component } from 'react';
import styles from "./header.module.css"
class Header extends Component {
    render() {
        return (
            <div>
<img  className={styles.garage} src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-garage-icon-in-trendy-style-isolated-background-png-image_4822459.jpg" alt="garage" />
               
            </div>
        );
    }
}

export default Header;