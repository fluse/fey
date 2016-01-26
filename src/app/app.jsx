/* globals response */

'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var Searchform = require('./components/searchform/searchform.jsx');
var Slider = require('./components/slider/slider.jsx');
var FeedbackList = require('./components/feedback/list.jsx');

ReactDOM.render(
    <Searchform
        destinationList={response.destinationList}
        country={response.country}
        search={response.search}
    />,
    document.getElementById('search')
);

ReactDOM.render(
    <Slider slides={response.slider} />,
    document.getElementById('slider')
);

ReactDOM.render(
    <FeedbackList
        feedbacks={response.reviews}
        maxItems={6}
        reviewMaxLength={165}
    />,
    document.getElementById('topFeedback')
);

var responsive = [{
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
}, {
    breakpoint: 800,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
}];

ReactDOM.render(
    <FeedbackList
        feedbacks={response.reviews}
        slidesToShow={2}
        slidesToScroll={2}
        skip={6}
        maxItems={24}
        reviewMaxLength={350}
        responsive={responsive}
    />,
    document.getElementById('feedbacks')
);
