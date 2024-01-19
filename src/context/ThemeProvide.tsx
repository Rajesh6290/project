// ThemeContext.js
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.body.classList.add(
        storedTheme === "light" ? "light-mode" : "dark-mode"
      );
      setTheme(storedTheme);
      setIsReady(true);
    } else {
      setIsReady(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Check if localStorage is defined (client-side)
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }

    // Apply theme class to the body
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(
      newTheme === "light" ? "light-mode" : "dark-mode"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {isReady && children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
