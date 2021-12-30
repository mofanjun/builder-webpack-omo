import React from "react";
import ReactDOM  from "react-dom";
import logo from './images/logo.png'
import './search.less'
import '../../common'
import { a } from './tree-shaking'

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
            <img src = {logo} onClick={this.loadComponent.bind(this)}/>
            搜索文字
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)