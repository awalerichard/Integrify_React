import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DetailButton from "../../components/Button";

import "./card.css";
const BrewsCard = ({ id, name, city, breweryType, street }) => {
  let navigate = useNavigate();

  const handleViewDetailClick = (cardId) => {
    navigate(`/breweries/${cardId}`);
  };

  return (
    <Card className="cardStyle">
      <Card.Body>
        {/*   <Card.Subtitle className="mb-2 brewName">{name}</Card.Subtitle> */}
        <Card.Text>
          <ul className="brewName">
            <li> Name: {name}</li>
            <li>City: {city}</li>
            <li>Type: {breweryType}</li>
          </ul>
        </Card.Text>
      </Card.Body>
      <DetailButton
        title={"View Detail"}
        onButtonClick={() => handleViewDetailClick(id)}
      />
    </Card>
  );
};

export default BrewsCard;
