import React from "react";

function ErrorBoundary(props) {
  const ErrorText = () => <h2> Ooops something went wrong ! </h2>;

  return <>{props.IsOk ? props.children : <ErrorText />}</>;
}

export default ErrorBoundary;
