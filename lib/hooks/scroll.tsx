"use client";

import { useState, useEffect } from "react";

export default function Scroll() {
  const [scroll, setScroll] = useState(window.scrollY > 10);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scroll };
}

