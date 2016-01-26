var React = require('react');

var Loader = React.createClass({

    getInitialState() {
        return {
            message: '',
        };
    },

    getClassName() {
        return 'notice-' + this.props.className;
    },

    render() {
        return (
            <span className={this.getClassName()}>
                {this.props.message}
            </span>
        );
    }
});

module.exports = Loader;
