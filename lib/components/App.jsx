import React, { Component } from 'react/addons';
import Rx from 'rx-dom';

import Chart from './Chart';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            time: Date.now(),
            delta: 0
        };

        let uncontext = Rx.DOM.fromWebSocket('ws://duel.uncontext.com:80')
            .map(message => JSON.parse(message.data))
            .subscribe(this.onData.bind(this));
    }

    onData(data) {
        // console.log(data);

        let {
            time,
            delta
        } = this.state;

        let t = Date.now();
        let d = t - time;

        this.setState({
            data,
            time: t,
            delta: d
        });
    }

    render() {
        let {
            data,
            time,
            delta
        } = this.state;

        let {
            style
        } = this.props;

        return (
            <div style={style}>
                <div style={{
                    height: 360,
                    width: 640
                }}>
                    <Chart
                        data={data}
                        delta={delta / 1000}
                    />
                </div>
            </div>
        );
    }
};

App.displayName = 'App';
App.defaultProps = {
    style: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    }
};
