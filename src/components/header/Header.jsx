import SearchBar from "./SearchBar";
import SelectTab from "./SelectTab";
import ChangeTheme from "./ChangeTheme";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_item">
        {" "}
        <SearchBar />{" "}
      </div>
      <div className="header_item">
        <SelectTab className="header_item" />
      </div>
      <div className="header_item">
        <ChangeTheme className="header_item" />
      </div>
    </div>
  );
};

export default Header;
