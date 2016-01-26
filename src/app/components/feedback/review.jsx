var React = require('react');

var Review = React.createClass({

    propTypes: {
        text: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            text: '',
            maxLength: 0
        }
    },

    getText() {
        if (this.props.text.length >= this.props.maxLength && this.props.maxLength !== 0) {
            return this.props.text.substring(0, this.props.maxLength) + ' ...';
        } else {
            return this.props.text;
        }
    },

    render() {
        return (
            <p>
                {this.getText()}
            </p>
        );
    }
});

module.exports = Review;
