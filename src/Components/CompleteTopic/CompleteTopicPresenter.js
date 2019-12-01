import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
const CompleteTopicPresenter = (props) => {
    return (
        <tr>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/completeTopicDetail/${props.topicCode}`}>{props.topicName}</Link></td>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/completeTopicDetail/${props.topicCode}`}>{props.userId}</Link></td>
        </tr>
    );
};

export default CompleteTopicPresenter;