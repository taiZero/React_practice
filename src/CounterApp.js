import React from 'react';
import './CounterApp.css';

const Counter = (props) => {
    return (
        <div style={{ backgroundColor: props.color }}>
            0
        </div>
    );
}

const CounterApp = () => {
    return (
        <div>
            <ul>
                <li><Counter color="tomato" /></li>
                <li><Counter color="skyblue" /></li>
                <li><Counter color="limegreen" /></li>
            </ul>
        </div>
    );
}

export default CounterApp;