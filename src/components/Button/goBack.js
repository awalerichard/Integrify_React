import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./buttonStyle.css";

const GoBackButton = ({}) => {
  return (
    /* ´``template literal*/
    <Link to="/" className="d-grid gap-2 formatButton">
      <Button>Go Back</Button>
    </Link>
  );
};

export default GoBackButton;
