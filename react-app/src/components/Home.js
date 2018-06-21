import React from 'react';
import { Link } from 'react-router-dom';
import style from './home.css';

import { Context } from 'App';
import TestPureComponent from './TestPureComponent';

const Home = () => (
    <Context.Consumer>
        {
            ({ count, increase, decrease }) => (
                <div>
                    <h1 className={style.home}>Home</h1>
                    <p>count: {count}</p>
                    <div>
                        <button onClick={ increase }>++</button>
                        <button onClick={ decrease }>--</button>
                    </div>
                    <Link to="/detail">to detail</Link>
                    <TestPureComponent />
                </div>
            )
        }
    </Context.Consumer>
);
export default Home;