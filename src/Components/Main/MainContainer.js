import React, { Component } from 'react';
import axios from 'axios'
import TopicList from './TopicList'
import Writer from './Writer'
import { Table, Button } from 'react-bootstrap';

class MainContainer extends Component {

    state = {
        topicData: [

        ],
        writerData: [],

    }

    componentDidMount() {

        this.getTopicData();
    }

    getTopicData = () => {
        axios.post('http://localhost:3000/main')
            .then((res) => {
                console.log(res.data);
                if (res.data.result === 1) {
                    console.log('success');

                    this.setState({
                        topicData: res.data.data
                    })
                } else {
                    console.log('fail')
                    this.props.history.push('/');
                }
            })
    }

    render() {
        const topicList = this.state.topicData.map(topic =>
            (
                <TopicList
                    key={topic.topicCode}
                    {...topic}

                />
            )
        )
        const WriterList = this.state.writerData.map(writer =>
            (
                <Writer
                    key={writer.id}
                    {...writer}

                />
            )
        )
        return (
            <div>

                <br /><br />
                <h3 style={{ marginLeft: "180px" }}>TOP 주제</h3>
                <Table responsive style={{ width: '800px', margin: '10px 170px' }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>주제</th>
                            <th>주제작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(topicList)}
                    </tbody>
                </Table>
                <br />   <br />
                <h3 style={{ marginLeft: "180px" }}>TOP 작가</h3>
                <Table responsive style={{ width: '800px', margin: '10px 170px' }}>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>작가이름</th>
                            <th>등록한 글 수 </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {(WriterList)} */}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MainContainer;