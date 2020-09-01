import React from "react";

function ErrorBoundary(props) {
  const ErrorText = () => <h2> Ooops something went wrong ! </h2>;

  let isEverythingOk = true;

  return <>{isEverythingOk ? props.children : <ErrorText />}</>;
}

export default ErrorBoundary;
