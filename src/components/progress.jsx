import { useEffect, useRef, useState } from "react";
import "./progress.css";

export default function ProgressBar({ props }) {
  let [bar, setBar] = useState(0);
  let intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // console.log("setInterval Running");
      setBar((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalRef.current);
        }
        return Math.min(prevProgress + 4, 100);
      });
    }, 180);
  }, []);
  return (
    <div className="wrapper">
      <div className="container">
        <div
          className="progressBar"
          style={{ transform: `translateX(${-100 + bar}%)` }}
        ></div>
      </div>
      <div className="button_container">
        <button
          onClick={() => {
            clearInterval(intervalRef.current);
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            intervalRef.current = setInterval(() => {
              console.log("setInterval Running");
              setBar((prevProgress) => {
                // console.log("setInterval Running2", stopVal);
                if (prevProgress >= 100) {
                  clearInterval(intervalRef.current);
                }
                return Math.min(prevProgress + 4, 100);
              });
            }, 180);
          }}
        >
          Resume
        </button>
      </div>
    </div>
  );
}
