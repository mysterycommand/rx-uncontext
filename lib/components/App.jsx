import React, { Component } from 'react/addons';
import Rx from 'rx-dom';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            delta: 0,
            time: Date.now(),
            uncontext: []
        };

        let uncontext = Rx.DOM.fromWebSocket('ws://duel.uncontext.com:80')
            .map(message => JSON.parse(message.data))
            .subscribe(this.onData.bind(this));
    }

    onData(data) {
        let { delta, time, uncontext } = this.state;
        let t = Date.now();
        let d = t - time;

        uncontext.push(data);

        this.setState({
            delta: d,
            time: t,
            uncontext
        });
    }

    render() {
        let { delta, time, uncontext } = this.state;
        console.log(delta, time);
        console.log(JSON.stringify(uncontext[uncontext.length - 1], null, 2));
        return (
            <div>App</div>
        );
    }
};

App.displayName = 'App';
