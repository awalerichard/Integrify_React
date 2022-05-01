/* import { Link } from "react-router-dom"; */
import { Form, FormControl } from "react-bootstrap";
//import DetailButton from "../Button";
import "./search.css";
const SearchBar = ({ value, onChange }) => {
  return (
    <Form className="searchBar">
      <FormControl
        value={value}
        onChange={onChange}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </Form>
  );
};

export default SearchBar;
