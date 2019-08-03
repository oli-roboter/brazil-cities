import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCitiesData } from "../../features/tables/redux-tools/table-actions";
import LoadError from "../../components/LoadError";

const mapStateToProps = state => {
  return {
    error: state.tableStore.error,
    errorMsg: state.tableStore.errorMsg,
    gotData: state.tableStore.gotData
  };
};

class ErrorPage extends Component {
  componentDidMount() {
    this.props.getCitiesData("bad request");
  }

  componentWillUnmount() {
    this.props.getCitiesData("", "asc", 1, 10, "");
  }

  render() {
    const { error, errorMsg } = this.props;
    return <div>{error && <LoadError errorMsg={errorMsg} />}</div>;
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getCitiesData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ErrorPage);
