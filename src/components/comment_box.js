import React, { Component } from 'react'

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { comment: '' };
    }
    handleChange(event) {
        this.setState({ comment: event.target.value });
    }
    submitForm(event) {
        event.preventDefault(); //prevent form from trying to submit itself
        this.setState({ comment: '' });
    }
    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)} className="comment-box">
                <textarea value={this.state.comment} onChange={this.handleChange.bind(this)} />
                <button action='submit'>Submit Comment</button>
            </form>
        );
    }
}