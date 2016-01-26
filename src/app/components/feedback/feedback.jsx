var React = require('react');
var Headline = require('./headline.jsx');
var Review = require('./review.jsx');
var Rating = require('./../rating.jsx');

var Feedback = React.createClass({

    propTypes: {
        feedback: React.PropTypes.object,
        reviewMaxLength: React.PropTypes.number
    },

    getDefaultProps() {
        return {
            feedback: {},
            reviewMaxLength: 0
        }
    },

    render() {

        return (
            <div className="feedback">
                <h3>
                    <Rating rating={this.props.feedback.stars} />
                    <Headline title={this.props.feedback.consumer.displayName} />
                </h3>
                <Review
                    text={this.props.feedback.text}
                    maxLength={this.props.reviewMaxLength}
                />
            </div>
        );
    }
});

module.exports = Feedback;
