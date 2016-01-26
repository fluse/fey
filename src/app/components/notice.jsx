var React = require('react');

var Notice = React.createClass({

    propTypes: {
        message: React.PropTypes.string,
        className: React.PropTypes.string
    },

    getClassName() {
        return 'notice-' + this.props.className;
    },

    render() {
        if (!this.props.message) {
            return null;
        }

        return (
            <span className={this.getClassName()} dangerouslySetInnerHTML={{__html: this.props.message}} />
        );
    }
});

module.exports = Notice;
