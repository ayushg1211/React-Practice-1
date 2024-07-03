import { useState } from "react";
import ProgressBar from "./components/progress";
import "./styles.css";

export default function App() {
  let [show, setShow] = useState(false);
  return (
    <>
      <div>{show ? <ProgressBar /> : ""}</div>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  );
}
