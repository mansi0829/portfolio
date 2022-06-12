import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import moon from "../static/moon.png";
import sun from "../static/sun.png";
import Image from "next/image";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 h-12 w-12 order-2 md:order-3"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <Image className="" src={theme === "light" ? moon : sun} />
      </button>
    </div>
  );
};

export default Theme;
