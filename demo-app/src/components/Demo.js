import React, { Fragment } from "react";

export const Demo = args => {
  return (
    <Fragment>
      <button onClick={args.increase}>Increase</button>
    </Fragment>
  );
};
