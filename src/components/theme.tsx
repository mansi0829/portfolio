import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="px-6 py-2 mt-6 bg-black dark:bg-white text-white dark:text-black"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle to {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default Theme;
