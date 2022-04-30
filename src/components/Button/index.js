import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./buttonStyle.css";

const DetailButton = () => {
  return (
    <Link to="detail" className="d-grid gap-2 formatButton">
      <Button>View Detail</Button>
    </Link>
  );
};

export default DetailButton;
