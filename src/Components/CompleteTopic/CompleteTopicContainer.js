import React, { Component } from 'react';
import CompleteTopicPresenter from './CompleteTopicPresenter'
import { Table, Button } from 'react-bootstrap'
import { Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class CompleteTopicContainer extends Component {
    state = {
        completeTopicList: [],
    }

    componentWillMount() {
        this.getCompleteTopicList()

    }

    getCompleteTopicList = () => {
        axios.get('http://localhost:3000/getCompletionTopicList')
            .then((res) => {
                console.log(res.data.data)
                console.log('success');
                console.log(res.data);
                if(res.data.result == false){}
                else{ 
                    this.setState({
                    completeTopicList: res.data
                })}
            })
    }

    render() {
        return (
            <div>
                <h3 style={{ marginLeft: "720px" }}>완결된 책</h3>
                <Table responsive style={{ width: '650px', margin: '10px 470px' }}>
                    <thead>
                        <tr >
                            <th style={{ width: '130px', textAlign: "center" }}>제목(주제)</th>
                            <th style={{ width: '130px', textAlign: "center" }}>주제 작성자</th>
                        </tr>
                    </thead>
                    {this.state.completeTopicList.lentgh !== 0 ?
                    <tbody>
                    {this.state.completeTopicList.map(topic =>
                        (
                            <CompleteTopicPresenter
                                key={topic.topicCode}
                                {...topic}
                            />
                        )
                    )}
                    </tbody>:
                    <tbody></tbody>
                    }
                </Table>
            </div>
        );
    }
}

export default CompleteTopicContainer;