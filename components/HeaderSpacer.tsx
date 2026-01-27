"use client";

import { useEffect, useState } from "react";

export default function HeaderSpacer() {
  const [height, setHeight] = useState(310);

  useEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        const measuredHeight = header.offsetHeight;
        setHeight(measuredHeight);
      }
    };

    // Measure immediately on mount using requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      updateHeight();
    });

    // Use ResizeObserver for more accurate measurements when header size changes
    const header = document.querySelector("header");
    if (header) {
      const resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });
      resizeObserver.observe(header);

      // Also listen to window resize as fallback
      window.addEventListener("resize", updateHeight);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", updateHeight);
      };
    } else {
      // Fallback if header not found
      window.addEventListener("resize", updateHeight);
      return () => {
        window.removeEventListener("resize", updateHeight);
      };
    }
  }, []);

  return <div style={{ height: `${height}px`, minHeight: `${height}px` }} />;
}
