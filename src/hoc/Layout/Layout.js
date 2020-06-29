import React, { Component } from 'react';
import './Layout.css';

class Layout extends Component {
    render () {
        return (
            <React.Fragment>
                <div>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;