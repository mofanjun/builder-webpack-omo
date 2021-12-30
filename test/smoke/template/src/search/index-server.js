// import React from "react";
// import ReactDOM  from "react-dom";
// import logo from './images/logo.png'
// import './search.less'

const React = require('react');
const logo = require('./images/logo.png');
const s = require('./search.less');

class Search extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        };
    }

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            });
        });
    }

    render () {
        const { Text } = this.state;
        return <div className='search'>
            {
                Text ? <Text /> : null
            }
            搜索文字<img src = {logo} onClick={this.loadComponent.bind(this)}/>
        </div>
    }
}

module.exports = <Search />;