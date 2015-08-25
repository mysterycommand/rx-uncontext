import React, { Component } from 'react/addons';

export default class Chart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                backgroundColor: 'orange'
            }}></div>
        );
    }
}

Chart.displayName = 'Chart';
Chart.defaultProps = {
    style: {
        display: 'relative'
        height: '100%',
        width: '100%'
    }
};
