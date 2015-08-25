import React, { Component } from 'react/addons';

export default class Bar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            style
        } = this.props;

        return (
            <div style={style}>
            </div>
        );
    }
}

Bar.displayName = 'Bar';
Bar.defaultProps = {
    style: {
        position: 'absolute'
    }
};
