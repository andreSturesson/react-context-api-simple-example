import { useContext } from "react";
import { postContext } from "../App";
export default function Header() {
  const { APP_NAME } = useContext(postContext);
  return <h1>{APP_NAME}</h1>;
}
