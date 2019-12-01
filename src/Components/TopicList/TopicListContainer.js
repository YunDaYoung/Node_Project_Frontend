import React, { Component } from 'react';
import axios from 'axios'
import { Table, Button } from 'react-bootstrap';
import TopicListPresenter from './TopicListPresenter'
import { Link } from 'react-router-dom';



class TopicListContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            topicData : []
        }
    }

    componentWillMount() {
        console.log("hello")
        this.getTopicData();
    }

    //주제 리스트 불러오기
    getTopicData = () => {
        console.log("hello2")
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
            if(data.result == 1){
                this.setState({
                    topicData: data.data
                })
            }
            else{
                console.log("false");
            }
        })
    }

    render() {
        const topicList = this.state.topicData.map(topic =>
            (
                <TopicListPresenter
                    key={topic.topicCode}
                    {...topic}

                />
            )
        )
        return (
            <div>

                <br /><br />
                <h3 style={{ marginLeft: "700px" }}>주제목록</h3>
                <Table responsive style={{ width: '800px', margin: '10px 380px' }}>
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
                <Link to="/registerTopic" style={{ marginLeft: "1050PX" }}><Button>등록하기</Button></Link>
                <br />   <br />

            </div>
        );
    }
}

export default TopicListContainer;