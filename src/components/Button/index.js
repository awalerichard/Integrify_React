//import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./buttonStyle.css";

const DetailButton = ({ onButtonClick, title }) => {
  return (
    /* ´``template literal*/
    <Button onClick={onButtonClick} className="d-grid gap-2 formatButton">
      {title}
    </Button>
  );
};

export default DetailButton;
