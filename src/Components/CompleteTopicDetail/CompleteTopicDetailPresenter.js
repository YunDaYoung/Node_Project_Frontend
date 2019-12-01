import React from 'react';
import { Col, Image, Container, Row, Button, Form } from 'react-bootstrap';

const CompleteTopicDetailPresenter = (props) => {
    const styles2 = {
        marginTop: '90px',
        marginLeft: '20px',
        listStyle: 'none'
    }
    return (
        <div>
            <Container>
                <Row >
                    <Col xs={6} md={40}>
                        <ul style={styles2}>
                            <li>연재할 주제 제목 : {props.topicName}</li><br />
                            <li>주제 작성자 : {props.topicWriter}</li><br /><br />
                            <li>목차1 - {props.topicSubName1}</li><br />
                            <li>{props.writingItem1}</li><br /><br />
                            <li>목차2 - {props.topicSubName2} </li><br />
                            <li>{props.writingItem2}</li><br /><br />
                            <li>목차3 - {props.topicSubName3} </li><br />
                            <li>{props.writingItem3}</li><br /><br />
                            <li>목차4 - {props.topicSubName4} </li><br />
                            <li>{props.writingItem4}</li><br /><br />
                            <br />
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CompleteTopicDetailPresenter;