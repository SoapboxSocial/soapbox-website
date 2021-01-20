import { Fragment, ReactNode } from "react";
import Header from "./header";

export default function Page({
  children,
  isNavigable,
}: {
  children: ReactNode;
  isNavigable?: boolean;
}) {
  return (
    <Fragment>
      <Header isNavigable={isNavigable} />

      {children}
    </Fragment>
  );
}
