import React, { Component } from 'react/addons';

import Bar from './Bar';

export default class Chart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            data: {
                a, b, c,
                d, e, f
            },
            delta,
            style
        } = this.props;

        let bars = [];
        if (typeof a !== 'undefined') {
            bars = bars.concat([
                a[0], a[1],
                b[0], b[1],
                c, d, e, f,
                delta
            ]);
        }
        // console.log(bars);

        return (
            <div style={style}>
                {
                    bars.map((value, index) => {
                        return (
                            <Bar
                                key={index}
                                index={index}
                                count={bars.length}
                                value={value}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

Chart.displayName = 'Chart';
Chart.defaultProps = {
    style: {
        // backgroundColor: 'orange',
        border: '1px solid #666',
        overflow: 'hidden',
        position: 'relative',
        height: '100%',
        width: '100%'
    }
};
