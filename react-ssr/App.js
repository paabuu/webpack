import React, { Component } from 'react';

const App = (props) => {
    const facts = props.facts.map((fact, i) => {
        return <li key={i}>{fact.text}</li>
    });

    return (
        <ul>
            {facts}
        </ul>
    )
}