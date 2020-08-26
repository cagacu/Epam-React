import React from "react";

function LoadingContainer(Component) {
  const LoadingContent = () => <h2> Content is loading...</h2>;

  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <LoadingContent />;
  };
}

export default LoadingContainer;
