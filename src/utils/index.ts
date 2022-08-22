import { JSXElementConstructor } from "react";

export const createComponentGroup = <
  Root extends JSXElementConstructor<any>,
  Children extends { [key: string]: JSXElementConstructor<any> }
>(
  root: Root,
  children: Children
): Root & Children =>
  Object.entries(children).reduce((r, [key, value]) => {
    (r as any)[key] = value;
    return r;
  }, root) as any;
