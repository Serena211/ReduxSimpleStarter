import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions'
class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { comment: '' };
    }
    handleChange(event) {
        this.setState({ comment: event.target.value });
    }
    submitForm(event) {
        event.preventDefault(); //prevent form from trying to submit itself
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }
    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)} className="comment-box">
                <textarea value={this.state.comment} onChange={this.handleChange.bind(this)} />
                <div>
                    <button action='submit'>Submit Comment</button>
                </div>
            </form>
        );
    }
}
export default connect(null,actions) (CommentBox)