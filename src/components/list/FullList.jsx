import CheckboxList from "./CheckboxList";
import ListEditButton from "./ListEditButton";
import ListDeleteButton from "./List DeleteButton";
import "./FullList.css";

const FullList = () => {
  return (
    <div className="full_list">
      <CheckboxList />
      <ListEditButton />
      <ListDeleteButton />
    </div>
  );
};

export default FullList;
