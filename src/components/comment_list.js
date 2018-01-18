import React from 'react'
import { connect } from 'react-redux'

const CommentList = (props) => {
    //props are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.
    const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
    return (
        <ul className='comment-list'>{list}</ul>
    );

}
function mapStateToProps(state) {
    return { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList);