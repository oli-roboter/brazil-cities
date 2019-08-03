import React from "react";
import NoData from "./empty/NoData";

const LoadError = ({ errorMsg }) => (
  <NoData icon="fas fa-sad-cry" title="Oops" text={errorMsg} />
);

export default LoadError;
