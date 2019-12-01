import React, { Component } from 'react';
import RegisterWriting from './RegisterWritingPresenter'

class RegisterWritingContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            writingContents: '',
        }
    }

    registerWritingHandler = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/writing/registerWriting", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: this.props.user.userId,
                topicItemCode: this.props.match.params.topicItemCode,
                writingContents: this.state.writingContents
            }),
        }).then((response) => {
            return response.json();
        }).then(res => {
            if (res.result) {
                alert("Success");
                this.props.history.push('/writingList/' + `${this.props.match.params.topicItemCode}`);
            }
            else {
                alert("fail");
            }
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    render() {
        return (
            <div>
                <RegisterWriting
                    {...this.state}
                    registerWritingHandler={this.registerWritingHandler}
                    changeHandler={this.changeHandler}
                />
            </div>
        );
    }
}

export default RegisterWritingContainer;