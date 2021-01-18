import { Fragment } from "react";
import Header from "./header";

export default function Page({ children, isNavigable }) {
  return (
    <Fragment>
      <Header isNavigable={isNavigable} />

      {children}
    </Fragment>
  );
}
