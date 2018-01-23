import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import {selectBook} from '../actions/index'
class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title} onClick={() => this.props.selectBook(book)} className='list-group-item' >{book.title}</li>
            );
        });
    }
    render() {
        return (
            <ul className='list-group col-ms-4' >
                {this.renderList()}
            </ul>
        );
    };
}

//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({selectBook:selectBook}, dispatch);
}
function mapStateToProps(state) {
    //whatever return will show up as props inside of BookList
    // state changes --> props of container changes instantly & automatically
    return {
        books: state.books
    };

}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);