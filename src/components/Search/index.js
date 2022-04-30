/* import { Link } from "react-router-dom"; */
import { Form, FormControl } from "react-bootstrap";
//import DetailButton from "../Button";
import "./search.css";
const SearchBar = () => {
  return (
    <Form className="searchBar">
      <FormControl type="search" placeholder="Search" aria-label="Search" />
    </Form>
  );
};

export default SearchBar;
