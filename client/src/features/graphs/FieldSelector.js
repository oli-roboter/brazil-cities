import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFields } from "./redux-tools/graph-actions";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import "./Graphs.css";

const mapStateToProps = state => {
  return {
    fields: state.graphStore.fields
  };
};

function FieldSelector({ fields, setFields }) {
  // const classes = useStyles();
  const { GVA_INDUSTRY, GVA_AGROPEC, GVA_PUBLIC, GVA_SERVICES } = fields;
  const handleChange = name => event => {
    setFields({ ...fields, [name]: event.target.checked });
  };

  return (
    <div className="f__r checkbox-container">
      <FormControl component="fieldset">
        <FormLabel component="legend">Economic Sectors</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={GVA_INDUSTRY}
                onChange={handleChange("GVA_INDUSTRY")}
                value="GVA_INDUSTRY"
                color="primary"
              />
            }
            label="Industry"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={GVA_AGROPEC}
                onChange={handleChange("GVA_AGROPEC")}
                value="GVA_AGROPEC"
              />
            }
            label="Farming"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={GVA_PUBLIC}
                onChange={handleChange("GVA_PUBLIC")}
                value="GVA_PUBLIC"
              />
            }
            label="Public"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={GVA_SERVICES}
                onChange={handleChange("GVA_SERVICES")}
                value="GVA_SERVICES"
              />
            }
            label="Services"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setFields
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(FieldSelector);
