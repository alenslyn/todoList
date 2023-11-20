import ThemeProvider from "./components/Theme/ThemeProvider.jsx";
import FullList from "./components/list/FullList.jsx";
import AddButton from "./components/addbutton/AddButton.jsx";
import Modal from "./components/modal/Modal.jsx";
import Header from "./components/header/Header.jsx";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <h1 className="todo">TODO LIST</h1>
      <Header />
      <FullList />
      <AddButton />
      <Modal />
    </ThemeProvider>
  );
}

export default App;
