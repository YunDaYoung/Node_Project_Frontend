import React, { Component } from 'react';
import axios from 'axios'
import { Table, Button } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router-dom';
import CompleteTopicDetailPresenter from './CompleteTopicDetailPresenter';

class CompleteTopicDetailContainer extends Component {
    state = {
        topicCode: "",
        topicName: "",
        topicWriter: "",
        topicContents: "",
        topicItemCode1: "",
        topicSubName1: "",
        topicSubName2: "",
        topicItemCode2: "",
        topicSubName4: "",
        topicSubName3: "",
        topicItemCode3: "",
        topicItemCode4: "",
        topicItemState1: "",
        topicItemState3: "",
        topicItemState2: "",
        topicItemState4: "",
        writingItem1: "",
        writingItem2: "",
        writingItem3: "",
        writingItem4: "",
    }

    componentDidMount() {
        this.getTopicDetail();
    }
    getTopicDetail = () => {
        axios.get('http://localhost:3000/getCompletionTopicDetail/' + `${this.props.match.params.topicCode}`)
            .then((res) => {
                console.log(res.data.data)
                this.setState({
                    topicCode: this.props.match.params.topicCode,
                    topicName: res.data.data[0].topicName,
                    topicWriter: res.data.data[0].userId,
                    topicContents: res.data.data[0].topicContents,
                    topicItemCode1: res.data.data[0].topicItemCode,
                    topicSubName1: res.data.data[0].topicItemName,
                    topicSubName2: res.data.data[1].topicItemName,
                    topicItemCode2: res.data.data[1].topicItemCode,
                    topicSubName4: res.data.data[3].topicItemName,
                    topicSubName3: res.data.data[2].topicItemName,
                    topicItemCode3: res.data.data[2].topicItemCode,
                    topicItemCode4: res.data.data[3].topicItemCode,
                    topicItemState1: res.data.data[0].topicItemState,
                    topicItemState3: res.data.data[2].topicItemState,
                    topicItemState2: res.data.data[1].topicItemState,
                    topicItemState4: res.data.data[3].topicItemState,
                    writingItem1: res.data.data[0].writingItem,
                    writingItem2: res.data.data[1].writingItem,
                    writingItem3: res.data.data[2].writingItem,
                    writingItem4: res.data.data[3].writingItem,
                })
            })

    }

    render() {
        return (
            <div>
                <CompleteTopicDetailPresenter
                {...this.state}>
                </CompleteTopicDetailPresenter>
            </div>
        );
    }
}

export default CompleteTopicDetailContainer;