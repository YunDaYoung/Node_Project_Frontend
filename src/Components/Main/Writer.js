import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Writer = (props) => {
    return (
        <tr>
            <td>{props.Num}</td>
            <td>{props.userId}</td>
        </tr>
    );
};

export default Writer;