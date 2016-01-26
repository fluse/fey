var React = require('react');
var Feedback = require('./feedback.jsx');
var Slider = require('react-slick');

var FeedbackList = React.createClass({

    propTypes: {
        maxItems: React.PropTypes.number,
        skip: React.PropTypes.number,
        feedbacks: React.PropTypes.array,
        slidesToShow: React.PropTypes.number,
        slidesToScroll: React.PropTypes.number,
        reviewMaxLength: React.PropTypes.number
    },

    getDefaultProps() {
        return {
            maxItems: 4,
            feedbacks: [],
            skip: 0,
            className: null,
            slidesToShow: 1,
            slidesToScroll: 1,
            reviewMaxLength: 0,
            responsive: []
        }
    },

    getInitialState() {
        return {
            feedbacks: []
        };
    },

    getFeedbacks() {

        var list = this.props.feedbacks.slice(this.props.skip, this.props.maxItems);

        return list.map((feedback, key) => {
            return (
                <div key={key} className={this.props.className}>
                    <Feedback
                        feedback={feedback}
                        reviewMaxLength={this.props.reviewMaxLength}
                    />
                </div>
            );
        });
    },

    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: this.props.slidesToShow,
            slidesToScroll: this.props.slidesToScroll,
            responsive: this.props.responsive
        };

        if (this.props.feedbacks.length === 0) {
            return null;
        }

        return (
            <Slider {...settings}>
                {this.getFeedbacks()}
            </Slider>
        );
    }
});

module.exports = FeedbackList;
