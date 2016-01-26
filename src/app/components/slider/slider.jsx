var React = require('react');
var Slide = require('./slide.jsx');
var SlickSlider = require('react-slick');

var Slider = React.createClass({

    propTypes: {
        slides: React.PropTypes.array
    },

    getDefaultProps() {
        return {
            slides: []
        }
    },

    componentWillMount () {
        this.setState({
            sum: (this.props.slides.length - 1) || 0
        });
    },

    getSlides() {
        var count = 0;
        return this.props.slides.map((slide, key) => {

            var className = (count === this.state.current) ? ' slide active ' + this.state.direction : ' slide';
            count++;

            return (
                <Slide key={key} className={className} slide={slide} />
            );
        });
    },

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true
        };

        if (this.props.slides.length === 0) {
            return null;
        }

        return (
            <SlickSlider {...settings}>
                {this.getSlides()}
            </SlickSlider>
        );
    }
});

module.exports = Slider;
