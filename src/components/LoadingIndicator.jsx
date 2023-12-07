import {usePromiseTracker} from "react-promise-tracker";
import React from "react";
import { PropagateLoader } from "react-spinners";

export const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress &&
    <PropagateLoader color="#0d6efd" style={{textAlign: "center", margin: "30px 0", position:"absolute", top: "50%", left:"50%", transform:"translate(-50%,-50%)", zIndex:"1000"}}/>
  );
};