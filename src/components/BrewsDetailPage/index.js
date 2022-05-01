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
    <Card className="detailCardBody">
      {/*   <Card.Header>Detail Information about chosen Brewery</Card.Header> */}
      <Card.Body className="detailCard">
        {/*   <Card.Title>{name}</Card.Title> */}
        <Card.Text className="detailCardList">
          <ul>
            <li> Name: {name}</li>
            <li>Type: {breweryType} </li>
            <li>City: {city} </li>
            <li>County: {county} </li>
            <li>State: {state} </li>
            <li>Postal Code: {postalCode} </li>
            <li>Country: {country} </li>
            <li>Phone: {phone} </li>
            <li>Website: {website}</li>
            <li>
              <DetailButton
                className="centerButton"
                title={"Go Back"}
                onButtonClick={() => navigate(-1)}
              />
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BrewsDetailPage;
