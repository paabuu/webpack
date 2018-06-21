import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from 'components/ContextWrapper';

const Detail = (props) => (
    <div>
        <h1>Detail</h1>
        <p>{props.count}</p>
        <Link to="/">Go home</Link>
    </div>
);
export default Wrapper(Detail);