var React = require('react');

var Headline = React.createClass({

    getInitialState() {
        return {
            showTeaser: false
        };
    },

    getTeaser() {

        if (!this.state.showTeaser) {
            return null;
        }

        return (
            <h4 className="breaker">
                <strong>Frühbucherrabatt</strong>
                <small>bis zu 20% sichern</small>
            </h4>
        )

    },

    render() {
        return (
            <header>
                <h1>Entdecke&nbsp;{this.props.country}&nbsp;mit dem Camper</h1>
                {this.getTeaser()}
            </header>
        );
    }
});

module.exports = Headline;
