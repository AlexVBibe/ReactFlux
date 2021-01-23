import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage(props) {
    return (
        <div className='jumbotron'>
            <h1>Course management portal</h1>
            <div>Hello world</div>

            <Link to="about" className="btn btn-primary">About</Link>
        </div>
    );
};
