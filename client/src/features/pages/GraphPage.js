import React from "react";
import { connect } from "react-redux";
import GVAperState from "../../features/graphs/GVAperState";
import FieldSelector from "../../features/graphs/FieldSelector";
import LoadError from "../../components/LoadError";

const mapStateToProps = state => {
  return {
    error: state.graphStore.error,
    errorMsg: state.graphStore.errorMsg,
    fields: state.graphStore.fields
  };
};

const GraphPage = ({ error, errorMsg }) => (
  <div>
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
