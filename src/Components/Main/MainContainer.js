import React, { Component } from 'react';
import axios from 'axios'
import TopicList from './TopicList'
import Writer from './Writer'
import { Table, Button } from 'react-bootstrap';

class MainContainer extends Component {

    state = {
        topicData: [],
        writingData: [],
    }

    componentDidMount() {
        this.getTopicData();
    }

    getTopicData = () => {
        fetch("http://localhost:3000/main", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            }),
        }).then(response => {
                return response.json();
        }).then(data => {
            console.log(data);
            console.log(data.data)
            if(data.result == 1){
                if(data.data.length >= 3){
                    this.setState({
                        topicData: [
                            ...this.state.topicData,
                            { topicCode: data.data[0].topicCode, topicName: data.data[0].topicName, userId : data.data[0].userId},
                            { topicCode: data.data[1].topicCode, topicName: data.data[1].topicName, userId : data.data[1].userId },
                            { topicCode: data.data[2].topicCode, topicName: data.data[2].topicName, userId : data.data[2].userId }
                        ]
                    })
                }else if (data.data.length == 2){
                    this.setState({
                        topicData: [
                            ...this.state.topicData,
                            { topicCode: data.data[0].topicCode, topicName: data.data[0].topicName, userId : data.data[0].userId},
                            { topicCode: data.data[1].topicCode, topicName: data.data[1].topicName, userId : data.data[1].userId }
                        ]
                    })
                }else if (data.data.length == 1){
                    this.setState({
                        topicData: [
                            ...this.state.topicData,
                            { topicCode: data.data[0].topicCode, topicName: data.data[0].topicName, userId : data.data[0].userId},
                        ]
                    })
                }
            }
            else{
                console.log("false");
            }
        })

        fetch("http://localhost:3000/topWriter")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if(data.result == false) {}
                else if(data.length >= 3){
                    this.setState({
                        writingData: [
                            ...this.state.writingData,
                            { Num: 1, userId : data[0].userId},
                            { Num: 2, userId : data[1].userId},
                            { Num: 3, userId : data[2].userId}
                        ]
                    })
                }else if (data.length == 2){
                    this.setState({
                        writingData: [
                            ...this.state.writingData,
                            { Num: 1, userId : data[0].userId},
                            { Num: 2, userId : data[1].userId},
                        ]
                    })
                }else if (data.length == 1){
                    this.setState({
                        writingData: [
                            ...this.state.writingData,
                            { Num: 1, userId : data[0].userId},
                        ]
                    })
                }
                console.log(data);
            })
    }

    render() {
        return (
            <div>

                <br /><br />
                <h3 style={{ marginLeft: "180px" }}>추천 주제</h3>
                <Table responsive style={{ width: '800px', margin: '10px 170px' }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>주제</th>
                            <th>주제작성자</th>
                        </tr>
                    </thead>
                    {this.state.topicData.length != 0 ? 
                    <tbody>{this.state.topicData.map(topic =>
                        (
                            <TopicList
                                key={topic.topicCode}
                                {...topic}
                
                            />
                        )
                    )}</tbody> :
                    <tbody></tbody>}
                </Table>
                <br />   <br />
                <h3 style={{ marginLeft: "180px" }}>추천 작가</h3>
                <Table responsive style={{ width: '800px', margin: '10px 170px' }}>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>작가이름</th>
                        </tr>
                    </thead>
                    {this.state.writingData.length != 0 ? 
                    <tbody>{this.state.writingData.map(writing =>
                        (
                            <Writer
                                key={writing.userId}
                                {...writing}
                            />
                        )
                    )}</tbody> :
                    <tbody></tbody>}
                </Table>
            </div>
        );
    }
}

export default MainContainer;