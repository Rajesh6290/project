import { useTheme } from "@/context/ThemeProvide";

function YourComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Your Component{theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Your component content */}
    </div>
  );
}

export default YourComponent;
