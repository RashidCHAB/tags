import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./catalog.module.css"
const Catalog = (props) => {
    return (
        <div className={styles.catalog}>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className={styles.image} src={props.url} />
                <Card.Body>
                    <Card.Title>{props.price}</Card.Title>
                    <Card.Text className={styles.name}>
                    {props.name} 
                    </Card.Text>
                    <div className="d-grid gap-2"><Button variant="primary" size="lg">Купить</Button></div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Catalog;