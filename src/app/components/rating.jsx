var React = require('react');
var Icon = require('./icon.jsx');

var Rating = React.createClass({

    getInitialState() {
        return {
            rating: null,
            min: 0,
            max: 5
        };
    },

    getIcons() {
        var iterator = new Array(5).join().split(',').map(function(item, index){ return ++index;})
        return iterator.map((slide, key) => {

            var name = key < this.props.rating ? 'star' : 'star blank';

            return (
                <Icon key={key} name={name} />
            );
        });
    },

    render() {
        return (
            <span className="rating">
                {this.getIcons()}
            </span>
        );
    }
});

module.exports = Rating;
