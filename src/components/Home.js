import React, { Component } from "react";
import { connect } from "react-redux";

import { loadHome } from "../store";

class Home extends Component {

    componentDidMount( ) {
        this.props.loadHome( );
    }

  render() {
    return (
      <div>
        <h1>{this.props.title} Home</h1>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
    title: state.page.title,
} );

const mapDispatchToProps = {
    loadHome
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
