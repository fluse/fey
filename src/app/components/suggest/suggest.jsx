var React = require('react');
var outerclick = require('react-onclickoutside');

var Country = require('./country.jsx');
var Notice = require('./../notice.jsx');

var Suggest = React.createClass({

    mixins: [
        outerclick
    ],

    propTypes: {
        destinationList: React.PropTypes.object,
        country: React.PropTypes.string,
        city: React.PropTypes.object,
        tabindex: React.PropTypes.string,
        placeholderText: React.PropTypes.string,
        setDestination: React.PropTypes.func,
        selectedId: React.PropTypes.string,
        error: React.PropTypes.string
    },

    getInitialState() {
        return {
            isVisible: this.props.city.isVisible,
            searchString: this.props.country,
            country: this.props.country,
            value: '',
            keyPosition: 0,
            error: this.props.error
        };
    },

    componentDidMount() {
        if (this.state.isVisible) {
            this.refs.suggestList.addEventListener('mousewheel', this.preventBodyScrolling, false);
        }
    },

    componentWillReceiveProps(props) {
        if (this.isMounted()) {
            window.setTimeout(this.setState.bind(this, {
                isVisible: props.city.isVisible,
                value: props.city.name,
                destination: props.country,
                setSearchString: props.country,
                error: props.error
            }), 10);

            window.setTimeout(this.setSearchString.bind(this, props.country), 15);
        }
    },

    componentDidUpdate() {
        if (this.state.isVisible) {
            this.refs.suggestList.addEventListener('mousewheel', this.preventBodyScrolling, false);
        }
    },

    componentWillUnmount() {
        this.refs.suggestList.removeEventListener('mousewheel', this.preventBodyScrolling, false);
    },

    preventBodyScrolling(e) {
        var el = this.refs.suggestList;
        if (el.clientHeight + el.scrollTop + e.deltaY >= el.scrollHeight) {
            e.preventDefault();
            el.scrollTop = el.scrollHeight;
        } else if (el.scrollTop + e.deltaY <= 0) {
            e.preventDefault();
            el.scrollTop = 0;
        }
    },

    getCountries() {

        return Object.keys(this.props.destinationList).map((countryCode) => {

            var destination = this.props.destinationList[countryCode];
            destination.countryCode = countryCode;

            if (destination) {
                var markup = (
                    <Country
                        key={countryCode}
                        countryCode={countryCode}
                        search={this.state.searchString}
                        selectedId={this.props.selectedId}
                        destination={destination}
                        setDestination={this.setDestination}
                    />
                );
                return markup;
            }

            return null;
        });
    },

    show() {
        if (!this.state.isVisible) {
            this.setState({
                isVisible: true,
                error: null
            });
            var input = this.refs.suggestInput;
            input.setSelectionRange(0, input.value.length);
            input.focus();

            if (/Mobi/.test(navigator.userAgent)) {
                window.scrollTop = input.scrollTop;
            }
        }

    },

    hide() {
        this.setState({
            isVisible: false
        });
    },

    handleClickOutside: function(evt) {
        this.hide();
    },

    handleKeyPress(e) {

        if (e.which === 38 || e.which === 40) {
            this.navigate(e.which);
        }

        if (e.which === 13) {
            e.preventDefault();
        }

        if (e.which === 27 || e.which === 9) {
            this.hide();
        }
    },

    navigate(key) {

        if (key === 38) {
            this.setState({
                keyPosition: this.state.keyPosition++
            });
        }

        if (key === 40) {
            this.setState({
                keyPosition: this.state.keyPosition--
            });
        }
    },

    filter(e) {
        if (e.which !== 27 && e.which !== 9) {
            this.show();

            this.setSearchString(e.target.value);
        }
    },

    setDestination(city, country) {
        this.setSearchString(city.name);

        this.props.setDestination(city, country);
    },

    setSearchString(value) {
        this.setState({
            searchString: value,
        });
    },

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    },

    getError () {
        if (!this.state.error || !this.props.error) {
            return null;
        }

        return <Notice className="error fly bottom full center" message={this.props.error} />;
    },

    getHeadline () {

        if (this.state.searchString.length === 0) {
            return null;
        }

        return (
            <h3 className="headline">{this.props.placeholderText}</h3>
        )
    },

    getList() {
        if (!this.state.isVisible) {
            return null
        }

        return (
            <div className="suggest">
                {this.getHeadline()}
                <ul className="inner" ref="suggestList">
                    {this.getCountries()}
                </ul>
            </div>
        );
    },

    render() {
        var value = this.state.value;

        return (
            <fieldset className="destination">
                <input type="text"
                    placeholder={this.props.placeholderText}
                    onFocus={this.show}
                    onKeyUp={this.filter}
                    ref="suggestInput"
                    tabIndex={this.props.tabindex}
                    onKeyDown={this.handleKeyPress}
                    onChange={this.handleChange}
                    value={value}
                />

                {this.getError()}

                {this.getList()}

            </fieldset>
        );
    }
});

module.exports = Suggest;
