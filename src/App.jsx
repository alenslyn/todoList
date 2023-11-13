import SearchBar from "./components/search/SearchBar.jsx";
import SelectTab from "./components/select/SelectTab.jsx";
import ChangeTheme from "./components/changeTheme/ChangeTheme.jsx";
import ThemeProvider from "./components/Theme/ThemeProvider.jsx";

function App() {
  return (
    <ThemeProvider>
      <h1>TODO LIST</h1>

      <SearchBar />
      <SelectTab />
      <ChangeTheme />
    </ThemeProvider>
  );
}

export default App;
