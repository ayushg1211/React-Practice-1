import { useEffect, useState } from "react";
import "./progress.css";

export default function ProgressBar() {
  let [bar, setBar] = useState(0);

  useEffect(() => {
    let progressInterval = setInterval(() => {
      console.log("setInterval Running");
      setBar((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
        }
        return Math.min(prevProgress + 2, 100);
      });
    }, 150);
  }, []);
  return (
    <div className="container">
      <div
        className="progressBar"
        style={{ transform: `translateX(${-100 + bar}%)` }}
      ></div>
    </div>
  );
}
