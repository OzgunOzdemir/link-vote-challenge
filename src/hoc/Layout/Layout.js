import React, { Component } from 'react';
import { Header } from '../../components/Layout/index.js'

class Layout extends Component {
    render () {
        return (
            <React.Fragment>
                <div>
                    <Header />
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;