import { useState, useEffect } from "react";

const WidthHeight = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width}x${height}px`;
  }, [width, height]);

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  );
};

export default WidthHeight;
