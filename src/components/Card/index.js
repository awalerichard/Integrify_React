import { Card } from "react-bootstrap";
import DetailButton from "../../components/Button";

import "./card.css";
const BrewsCard = ({ id, name, city, breweryType, street }) => {
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
        cardId={id}
        /* breweryType={item.brewery_type}
        street={item.street}
        state={item.state}
        postalCode={item.postal_code}
        country={item.country}
        longitude={item.longitude}
        latitute={item.latitude}
        phone={item.phone}
        website={item.website_url}
        updated={item.updated_at}
        created={item.created_at}
        className="detailButton" */
      />
    </Card>
  );
};

export default BrewsCard;
