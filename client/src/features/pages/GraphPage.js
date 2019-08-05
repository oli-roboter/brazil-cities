import React from "react";
import { connect } from "react-redux";
import GVAperState from "../../features/graphs/GVAperState";
import FieldSelector from "../../features/graphs/FieldSelector";
import LoadError from "../../components/LoadError";
import "../graphs/Graphs.css";

const mapStateToProps = state => {
  return {
    error: state.graphStore.error,
    errorMsg: state.graphStore.errorMsg,
    fields: state.graphStore.fields
  };
};

const GraphPage = ({ error, errorMsg }) => (
  <div className="graph-container">
    <header className="f__r-jc--sb">
      <h3>Gross Added Value per Capita (R$)</h3>
    </header>

    {error && <LoadError errorMsg={errorMsg} />}

    {!error && (
      <div className="f__c-both--cen">
        <FieldSelector />
        <GVAperState />
      </div>
    )}
  </div>
);

export default connect(mapStateToProps)(GraphPage);
