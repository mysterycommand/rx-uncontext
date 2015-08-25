import React, { Component } from 'react/addons';

const colors = [
    '#1f77b4',
    '#ff7f0e',
    '#2ca02c',
    '#d62728',
    '#9467bd',
    '#8c564b',
    '#e377c2',
    '#7f7f7f',
    '#bcbd22',
    '#17becf'
];

export default class Bar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            index,
            count,
            value,
            style
        } = this.props;

        // console.log(`${pos * 100}%`, `${(1 - value) * 100}%`);
        let pos = (index / count) * 100;
        let top = (1 - value) * 100;
        let width = (1 / count) * 100;

        style.backgroundColor = colors[index];
        style.left = `${pos}%`;
        style.top = `${top}%`;
        style.width = `${width}%`;

        return (
            <div style={style}>
            </div>
        );
    }
}

Bar.displayName = 'Bar';
Bar.defaultProps = {
    style: {
        // backgroundColor: 'orange',
        bottom: 0,
        position: 'absolute',
        transition: 'top 0.3s ease-in-out'
    }
};
