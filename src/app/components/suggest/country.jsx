'use strict';

var React = require('react');
var City = require('./city.jsx');

var Country = React.createClass({

    propTypes: {
        countryCode: React.PropTypes.string,
        search: React.PropTypes.string,
        selectedId: React.PropTypes.string,
        destination: React.PropTypes.object,
        setDestination: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            searchString: this.props.searchString,
            destination: ''
        };
    },

    componentWillMount () {
        document.addEventListener('click', this.handleClick, false);
    },

    getAllCityNames() {
        return Object.keys(this.props.destination.cities).map((cityId) => {
            return this.props.destination.cities[cityId].name;
        });
    },

    isSearchStringInCountry(name) {
        name = name + this.getAllCityNames();

        return this.isNameInSearchString(name)
    },

    isNameInSearchString(name) {
        name = name.toLowerCase();
        var search = this.props.search.toLowerCase();

        return (name.indexOf(search) > -1);
    },

    setDestination(city) {
        this.props.setDestination(city, this.props.destination);
    },

    getCities() {

        return Object.keys(this.props.destination.cities).map((cityId) => {

            var city = this.props.destination.cities[cityId];
            city.id = cityId;
            var searchName = city.name + this.props.destination.name;
            if (this.isNameInSearchString(searchName)) {
                let isActive = (this.props.selectedId === city.id);
                return (
                    <City
                        key={cityId}
                        city={city}
                        isActive={isActive}
                        setDestination={this.setDestination}
                    />
                )
            }

            return null;
        });
    },

    render() {
        if (!this.isSearchStringInCountry(this.props.destination.name)) {
            return null;
        }

        return (
            <li>
                {this.props.destination.name}
                <ul>
                    {this.getCities()}
                </ul>
            </li>
        );
    }
});

module.exports = Country;
