import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import moon from "../../static/moon.png";
import sun from "../../static/sun.png";
import Image from "next/image";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div>
      <button
        className="px-2 w-12 bg-black dark:bg-white text-white dark:text-black"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Image className="" src={theme === "light" ? moon : sun} />
      </button>
    </div>
  );
};

export default Theme;
