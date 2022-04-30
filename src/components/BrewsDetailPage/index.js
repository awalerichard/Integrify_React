import { Card } from "react-bootstrap";
import DetailButton from "../../components/Button";

const BrewsDetailPage = ({ name, city, breweryType }) => {
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
    </Card>
  );
};

export default BrewsDetailPage;
