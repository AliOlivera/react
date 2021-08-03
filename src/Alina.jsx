import React from 'react';
import styles from './archivo.module.css';

const Alina = (props) => {
    const mycolor=props.color? 'white':'green'  
    return (
        <div>
            <h1 style={{color:mycolor}}>{props.color} hola de {props.nombre} </h1>
            <div className={styles.verde}>{props.texto}</div>
        </div>
    );
};



export default Alina;