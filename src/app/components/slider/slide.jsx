var React = require('react');

var Slide = React.createClass({

    render() {
        return (
            <figure className={this.props.className}>
                <h3>{this.props.slide.title}</h3>
                <img src={this.props.slide.image} alt="" />
            </figure>
        )
    }
});

module.exports = Slide;
