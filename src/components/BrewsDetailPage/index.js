import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DetailButton from "../../components/Button";
import "./brewsDetailpage.css";

const BrewsDetailPage = ({
  name,
  city,
  breweryType,
  state,
  county,
  postalCode,
  country,

  phone,
  website,
}) => {
  let navigate = useNavigate();
  return (
    <Card>
      <Card.Header>Detail Information about chosen Brewery</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Type: {breweryType} </li>
            <li>City: {city} </li>
            <li>County: {county} </li>
            <li>State: {state} </li>
            <li>Postal Code: {postalCode} </li>
            <li>Country: {country} </li>
            <li>Phone: {phone} </li>
            <li>Website: {website}</li>
          </ul>
        </Card.Text>
        <DetailButton title={"Go Back"} onButtonClick={() => navigate(-1)} />
      </Card.Body>
    </Card>
  );
};

export default BrewsDetailPage;
