import ThemeProvider from "./components/Theme/ThemeProvider.jsx";
import CheckboxList from "./components/list/CheckboxList.jsx";
import AddButton from "./components/addbutton/AddButton.jsx";
import Modal from "./components/modal/Modal.jsx";
import Header from "./components/header/Header.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <h1 className="todo">TODO LIST</h1>
        <Header />
        <CheckboxList />
        <AddButton />
        <Modal />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
