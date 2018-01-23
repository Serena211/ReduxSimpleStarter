import React,{Component} from 'react'
import {connect} from 'react-redux'

class BookDetail extends Component{

    render(){
        if(!this.props.book) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div>{this.props.book.title}</div>
        );
    }
}

function mapStateToProps(state) {
    //whatever return will show up as props inside of BookList
    // state changes --> props of container changes instantly & automatically
    return {
        book: state.activeBook
    };

}

 export default connect(mapStateToProps)(BookDetail);