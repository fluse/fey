var React = require('react');

var Rating = React.createClass({

    propTypes: {
        title: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            title: ''
        }
    },

    render() {
        return (
            <strong>
                <i>
                    {this.props.title}
                </i>
            </strong>
        );
    }
});

module.exports = Rating;
