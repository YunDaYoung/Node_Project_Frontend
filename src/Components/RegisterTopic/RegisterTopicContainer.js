import React, { Component } from 'react';
import RegisterTopicRegister from './RegisterTopicPresenter'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';

class RegisterTopicContainer extends Component {
    state = {
        topicName: '',
        topicContents: '',
        topicSubName1: '',
        topicSubName2: '',
        topicSubName3: '',
        topicSubName4: '',
        topicItem: [],
        i: 1
    }

    registerTopicHandler = (e) => {
        e.preventDefault();
        this.setState({
            topicItem: [
                ...this.state.topicItem,
                { topicItemName: this.state.topicSubName1 },
                { topicItemName: this.state.topicSubName2 },
                { topicItemName: this.state.topicSubName3 },
                { topicItemName: this.state.topicSubName4 }
            ]
        })
        var date = new Date();
        // date.setDate(date.getDate());
        var hh = date.getHours();
        var currentMM = date.getMinutes() + 1;
        var currentMM2 = date.getMinutes() + 2;
        var currentMM3 = date.getMinutes() + 3;
        var currentMM4 = date.getMinutes() + 4;
        var nextMM = date.getMinutes() + 1;
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var date = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + currentMM;
        var date_next = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + nextMM;

        if (hh < 10) {
            hh = '0' + hh

        }
        if (currentMM < 10) {
            currentMM = '0' + currentMM
        }
        if (currentMM2 < 10) {
            currentMM2 = '0' + currentMM2
        }
        if (currentMM3 < 10) {
            currentMM3 = '0' + currentMM3
        }
        if (currentMM4 < 10) {
            currentMM4 = '0' + currentMM4
        }
        var d = new Date();
        const topicCode = d.getTime();
        console.log('주제,목차등록하기')
        axios.post('http://localhost:3000/registerTopic', {
            topicCode: topicCode, userId: this.props.user.userId, topicName: this.state.topicName,
            topicCompletionState: 0, topicContents: this.state.topicContents
        })
            .then((res) => {
                if (res.data.result === 1) {
                    // this.state.topicItem.map(item => {
                    //     console.log(this.state.topicItem)
                    //     // date2.setDate(date.getDate() + 7);
                    //     axios.post('http://localhost:3000/registerTopicItem', { topicItemName: item.topicItemName, topicItemState: this.state.i--, topicCode: topicCode, topicItemDate: yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + nextMM + 2 })
                    //         .then((res) => {
                    //             if (res.data.result === 1) {
                    //                 console.log('sucess');
                    //                 this.props.history.push('/');
                    //             } else {
                    //                 console.log('fail')
                    //                 this.props.history.push('/');
                    //             }
                    //         })

                    // })

                    axios.post('http://localhost:3000/registerTopicItem', { topicItemName: this.state.topicSubName1, topicItemState: 1, topicCode: topicCode, topicItemDate: yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + currentMM })
                        .then((res) => {
                            if (res.data.result === 1) {
                                console.log('sucess');
                                this.props.history.push('/');
                            } else {
                                console.log('fail')
                                this.props.history.push('/');
                            }
                        })

                    axios.post('http://localhost:3000/registerTopicItem', { topicItemName: this.state.topicSubName2, topicItemState: 0, topicCode: topicCode, topicItemDate: yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + currentMM2 })
                        .then((res) => {
                            if (res.data.result === 1) {
                                console.log('sucess');
                                this.props.history.push('/');
                            } else {
                                console.log('fail')
                                this.props.history.push('/');
                            }
                        })
                    axios.post('http://localhost:3000/registerTopicItem', { topicItemName: this.state.topicSubName3, topicItemState: 0, topicCode: topicCode, topicItemDate: yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + currentMM3 })
                        .then((res) => {
                            if (res.data.result === 1) {
                                console.log('sucess');
                                this.props.history.push('/');
                            } else {
                                console.log('fail')
                                this.props.history.push('/');
                            }
                        })

                    axios.post('http://localhost:3000/registerTopicItem', { topicItemName: this.state.topicSubName4, topicItemState: 0, topicCode: topicCode, topicItemDate: yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + currentMM4 })
                        .then((res) => {
                            if (res.data.result === 1) {
                                console.log('sucess');
                                this.props.history.push('/');
                            } else {
                                console.log('fail')
                                this.props.history.push('/');
                            }
                        })
                } else {
                    console.log('fail')
                    this.props.history.push('/');
                }
            })

    }
    a = () => {
        console.log(this.state.topicItem)
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    render() {
        return (
            <div>
                <RegisterTopicRegister
                    {...this.state}
                    registerTopicHandler={this.registerTopicHandler}
                    changeHandler={this.changeHandler}
                    a={this.a}
                />
            </div>
        );
    }
}

export default RegisterTopicContainer;