var React = require('react');
var moment = require('moment');

var Sticky = require('react-sticky');
var DateRangePicker = require('react-daterange-picker');
var outerclick = require('react-onclickoutside');
var Notice = require('./notice.jsx');

var DatePicker = React.createClass({

    mixins: [
        outerclick
    ],

    propTypes: {
        setDate: React.PropTypes.func,
        tabindex: React.PropTypes.string,
        isVisible: React.PropTypes.bool,
        error: React.PropTypes.string
    },


    getInitialState() {
        return {
            isVisible: false,
            value: null,
            depDate: null,
            destDate: null,
            error: this.props.error
        };
    },

    componentWillReceiveProps(props) {
        this.setState({
            isVisible: props.isVisible,
            error: props.error
        });
    },

    handleSelect(range, states) {

        this.setState({
            value: range,
            destDate: range.end.format('DD.MM.YYYY'),
            duration: range.end.diff(range.start, 'days') + 1,
            isVisible: false
        });

        this.props.setDate(this.state);
    },

    handleClickOutside: function(evt) {
        this.hide();
    },

    onSelectStart(momentDate) {
        this.setState({
            destDate: null,
            depDate: momentDate.format('DD.MM.YYYY'),
            duration: 0,
            isVisible: true
        });

        this.props.setDate(this.state);
    },

    getDatePicker() {
        if (this.state.isVisible) {
            return (
                <DateRangePicker
                    firstOfWeek={1}
                    numberOfCalendars={2}
                    selectionType='range'
                    showLegend={false}
                    minimumDate={new Date()}
                    onHighlightRange={this.setDuration}
                    value={this.state.value}
                    onSelectStart={this.onSelectStart}
                    onSelect={this.handleSelect}
                />
            );
        }
    },

    show() {
        this.setState({
            isVisible: true
        });
    },

    hide() {
        this.setState({
            isVisible: false
        });
    },

    handleKeyPress(e) {

        if (e.which === 13) {
            e.preventDefault();
        }

        if (e.which === 27 || e.which === 9) {
            this.hide();
        }
    },

    setDuration(range) {
        this.setState({
            duration: range.end.diff(range.start, 'days') + 1
        });
    },

    getDuration() {

        if (this.state.duration === 0) {
            return null;
        }

        if (this.state.duration % 7 == 0) {
            var label = this.state.duration > 7 ? ' Wochen' : ' Woche';
            return (this.state.duration / 7) + label;
        }

        return this.state.duration + ' Tage';
    },

    getDateInfo() {
        if (!this.state.depDate && !this.state.destDate) {
            return <h3>Reisezeitraum wählen</h3>;
        }

        return (
            <div className="wdt-85 info">

                <div className='grd-3'>
                    <label>Abholung</label>
                    <span>{this.state.depDate}</span>
                </div>

                <div className='grd-3'>
                    <label>Rückgabe</label>
                    <span>{this.state.destDate}</span>
                </div>

                <div className='grd-3'>
                    <label>Dauer</label>
                    <span>{this.getDuration()}</span>
                </div>
            </div>
        )
    },

    getError () {
        if (!this.state.error) {
            return null;
        }

        return <Notice className="error fly bottom full center" message={this.props.error} />;
    },

    render() {

        return (
            <fieldset className='date' onClick={this.show}>
                <div className="inner">
                    <i className='icn-calendar wdt-15'></i>

                    {this.getDateInfo()}

                    <input
                        type='text'
                        ref='datepicker'
                        tabIndex={this.props.tabindex}
                        onFocus={this.show}
                        onKeyDown={this.handleKeyPress}
                        className='hidden'
                    />
                    {this.getDatePicker()}
                </div>

                {this.getError()}

            </fieldset>
        )
    }

});

module.exports = DatePicker;
