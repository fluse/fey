/* externals */
var React = require('react');
var Sticky = require('react-sticky');
var extend = require('extend');
var Api = require('ajaxApi');

/* components */
var Headline = require('./headline.jsx');
var Suggest = require('./../suggest/suggest.jsx');
var DatePicker = require('./../datepicker.jsx');
var Notice = require('./../notice.jsx');

var errorHandler = require('./errorHandler.js');

var api = window.api = new Api(request.api);

var Searchform = React.createClass({

    getInitialState() {
        var states = {
            error: null,
            country: '',
            suggestDep: {
                name: '',
                isVisible: false
            },
            suggestDest: {
                name: '',
                isVisible: false
            },
            search: {
                depCity: null,
                destCity: null,
                depCountry: null,
                depDate: null,
                destDate: null
            },
            dateIsVisible: false
        };

        return extend(states, this.props.search);
    },

    _showDestIfEmpty() {
        return !this.state.search.destCity;
    },

    _showSuggestIfEmptyAfterDatepick() {
        this.setState({
            suggestDep: extend(this.state.suggestDep, {
                isVisible: this._showDepIfEmpty()
            })
        });
    },

    _showDestIfEmptyAndDepFilled() {
        return !this.state.search.destCity && this.state.search.depCity;
    },

    _showDepIfEmpty() {
        return !this.state.search.depCity;
    },

    _showCalIfEmptyAndDepDestFilled() {
        let showCalendar = false;
        if (this.state.search.depCity && this.state.search.destCity) {
            showCalendar = (!this.state.search.depDate || !this.state.search.destDate);
        }

        this.setState({
            dateIsVisible: showCalendar
        });

        return showCalendar;
    },

    _setSameCityIfEmpty(newCity) {
        return this.state.search.destCity ? this.state.search.destCity : newCity;
    },

    setDep(city, country) {

        this.setState({
            suggestDep: {
                name: city.name,
                isVisible: false
            },
            suggestDest: {
                name: this.state.search.destCity ? this.state.suggestDest.name : city.name,
                isVisible: this._showDestIfEmpty()
            },
            search: this._setSearch({
                depCity: city.id,
                destCity: this._setSameCityIfEmpty(city.id),
                depCountry: country.countryCode
            }),
            country: country.name
        });

        this._showCalIfEmptyAndDepDestFilled();
    },

    setDest(city, country) {

        var countryCode = this.state.countryCode;

        if (countryCode !== null && countryCode !== country.countryCode) {
            this.setState({
                error: null,
                suggestDest: {
                    name: city.name,
                    isVisible: false
                },
                suggestDep: {
                    name: this.state.suggestDep.name,
                    isVisible: this._showDepIfEmpty()
                },
                search: this._setSearch({
                    destCity: city.id
                })
            });

            this._showCalIfEmptyAndDepDestFilled();
            return;
        }

        this.setState({
            error: null,
            suggestDest: {
                name: city.name,
                isVisible: false
            },
            country: country.name,
            search: this._setSearch({
                destCity: city.id,
                depCountry: country.countryCode
            })
        });

        this._showCalIfEmptyAndDepDestFilled();
    },

    setDate(dates) {
        this.setState({
            error: null,
            search: this._setSearch({
                depDate: dates.depDate,
                destDate: dates.destDate
            }),
            dateIsVisible: dates.isVisible
        });

        if (!dates.isVisible && dates.destDate !== null) {
            this._showSuggestIfEmptyAfterDatepick();
        }
    },

    _setSearch(newStates) {
        return extend({}, this.state.search, newStates);
    },

    getErrorFromResponse(field) {
        if (this.state.error === null) {
            return null;
        }

        return errorHandler.getErrorByField(this.state.error, field);
    },

    getError(field) {
        if (this.state.error === null) {
            return null;
        }

        return (
            <div className="row-max error-wrapper">
                <Notice className="error full center" message={this.getErrorFromResponse('search')} />
            </div>
        )
    },

    submit(e) {
        e.preventDefault();

        this.setState({
            suggestDest: extend(this.state.suggestDest, {
                isVisible: false
            })
        });

        api('post', '/search/', {}, this.state.search, (err, result) => {

            if (result.arguments.error) {
                this.setState({
                    error: result.arguments.error
                });
            }

            if (result.target === 'wait_for_perl' && result.arguments.hasOwnProperty('requestId')) {
                window.location = 'http://booking.camperdays.de/booking/searching.php?requestId=' + result.arguments.requestId;
            }
            if (result.target === 'result' && result.arguments.hasOwnProperty('requestId')) {
                window.location = 'http://booking.camperdays.de/booking/result.php?requestId=' + result.arguments.requestId;
            }
        });
    },

    render() {
        return (
            <Sticky className="sticky-panel" topOffset={200} stickyStyle={{}}>

                <Headline country={this.props.country} />

                {this.getError()}

                <form id="searchform" action="https://booking.camperdays.de/booking/search.php" onSubmit={this.submit} method="get">
                    <fieldset className="logo">
                        <img src="/public/svg/logo-light.svg" />
                    </fieldset>

                    <Suggest
                        country={this.state.country}
                        city={this.state.suggestDep}
                        ref="dep"
                        tabindex="1"
                        destinationList={this.props.destinationList}
                        placeholderText="Wo beginnt die Reise?"
                        setDestination={this.setDep}
                        selectedId={this.state.search.depCity}
                        error={this.getErrorFromResponse('depCity')}
                    />

                    <Suggest
                        country={this.state.country}
                        city={this.state.suggestDest}
                        ref="dest"
                        tabindex="2"
                        destinationList={this.props.destinationList}
                        placeholderText="Wo endet die Reise?"
                        setDestination={this.setDest}
                        selectedId={this.state.search.destCity}
                        error={this.getErrorFromResponse('destCity')}
                    />

                    <DatePicker
                        tabindex="3"
                        setDate={this.setDate}
                        isVisible={this.state.dateIsVisible}
                        error={this.getErrorFromResponse('date')}
                    />

                    <fieldset>

                        <button type="submit" className="btn-primary" tabIndex="4">
                            <span>Abenteuer suchen</span>
                            <i className="icn-arrow-right"></i>
                        </button>

                    </fieldset>

                    <fieldset className="certificates">
                        <img src="/public/image/certificates.png" />
                    </fieldset>

                </form>
            </Sticky>
        );
    }
});

module.exports = Searchform;
