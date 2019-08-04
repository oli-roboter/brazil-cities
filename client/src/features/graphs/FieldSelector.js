import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    fields: state.graphStore.fields,
    error: state.graphStore.error
  };
};

function GVAperState({ fields, error }) {
  return (
    <div>
      {error && null}
      {!error && (
        <aside>
          <pre>{JSON.stringify(fields, null, 2)}</pre>Fields
        </aside>
      )}
    </div>
  );
}

export default connect(mapStateToProps)(GVAperState);
