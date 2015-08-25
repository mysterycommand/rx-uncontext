import React, { Component } from 'react/addons';

export default class Chart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            uncontext: {
                a, b, c,
                d, e, f
            },
            delta,
            style
        } = this.props;

        return (
            <div style={style}>
            </div>
        );
    }
}

Chart.displayName = 'Chart';
Chart.defaultProps = {
    style: {
        // backgroundColor: 'orange',
        position: 'relative',
        height: '100%',
        width: '100%'
    }
};
