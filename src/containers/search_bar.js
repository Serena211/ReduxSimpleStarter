import React, { Component } from 'react';
import { connet, connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        this.setState({ term: event.target.value });
        // console.log('abc' +this.state.term );
    }
    onFormSubmit(event) {
        event.preventDefault();     //tell browser don't submit the page
        //TODO: fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input value={this.state.term} onChange={event => this.onInputChange(event)} />
                <span><button type='submit' >Search</button></span>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);