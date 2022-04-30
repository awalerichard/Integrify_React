import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./buttonStyle.css";

const DetailButton = ({ cardId }) => {
  return (
    /* ´``template literal*/
    <Link to={`detail/${cardId}`} className="d-grid gap-2 formatButton">
      <Button>View Detail</Button>
    </Link>
  );
};

export default DetailButton;
