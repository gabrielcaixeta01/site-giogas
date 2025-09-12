"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 bg-neutral-200 dark:bg-neutral-800 rounded"
    >
      {resolvedTheme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  );
}
