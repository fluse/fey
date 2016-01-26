var React = require('react');

var City = React.createClass({

    propTypes: {
        city: React.PropTypes.object,
        isActive: React.PropTypes.bool,
        setDestination: React.PropTypes.func
    },

    setDestination() {
        this.props.setDestination(this.props.city);
    },

    getClassName() {
        return this.props.isActive ? 'active' : null;
    },

    render() {
        return (
            <li onClick={this.setDestination} className={this.getClassName()}>
                <span>{this.props.city.name}</span>
            </li>
        );
    }
});

module.exports = City;
