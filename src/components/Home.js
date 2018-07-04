import React, { Component } from "react";
import { connect } from "react-redux";

import { loadHome, fetchData } from "../store";

class Home extends Component {

    componentDidMount( ) {
        this.props.loadHome( );
        console.log(this.props.circuits);
        if ( this.props.circuits.length <= 0 ) {
            this.props.fetchData( );
        }
    }

  render() {
    const { circuits } = this.props;
    return (
      <div>
        <h1>{this.props.title} Home</h1>
        <h2>F1 2018 Season Calendar</h2>
        <ul>
                    { circuits.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={ circuitId } >{ circuitName } - { Location.locality }, { Location.country }</li>
                    ) ) }
                </ul>
      </div>
    );
  }
}

Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    title: state.page.title,
    circuits: state.data,
} );

const mapDispatchToProps = {
    loadHome,
    fetchData
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
