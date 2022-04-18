import { lazy } from "solid-js";
const UnsafeInterpolation = lazy(() => import("./UnsafeInterpolation"));

export default function (props) {
  const payload = props.params[0];
  return UnsafeInterpolation({ payload });
}
