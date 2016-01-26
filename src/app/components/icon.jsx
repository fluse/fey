var React = require('react');

var Rating = React.createClass({

    getInitialState() {
        return {
            name: '',
        };
    },

    getClassName() {
        return 'icn-' + this.props.name;
    },

    render() {
        return (
            <i className={this.getClassName()}></i>
        );
    }
});

module.exports = Rating;
