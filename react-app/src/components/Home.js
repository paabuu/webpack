import React from 'react';
import { Link } from 'react-router-dom';
import style from './home.css';

const Home = () => (
    <div>
        <h1 className={style.home}>Home</h1>
        <Link to="/detail">to detail</Link>
    </div>
);
export default Home;