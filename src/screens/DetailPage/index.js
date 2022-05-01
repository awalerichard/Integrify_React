/* const DetailPage = (name, city, breweryType) => {
  return <h1> This is detail page.</h1>;
}; */

import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import BrewsDetailPage from "../../components/BrewsDetailPage/index.js";
import "./detailPageStyle.css";
import "../../App.js";

//import DetailButton from "../../components/Button";

const DetailPage = () => {
  let params = useParams();
  useEffect(() => {
    // console.log(params);
    // Update the document title using the browser API
    // setCardData([...cardData, { title: "card8" }]);
    axios
      .get(`https://api.openbrewerydb.org/breweries/${params.cardId}`)
      .then(function (response) {
        // handle success
        //console.log(response);
        setCardData(response.data);
      });
  });
  const [cardData, setCardData] = useState({});
  return (
    <div>
      <Container className="detailCard">
        <Row>
          <Col xs={12} md={8} lg={6} style={{ marginBottom: "2em" }}>
            <BrewsDetailPage
              id={cardData.id}
              name={cardData.name}
              city={cardData.city}
              breweryType={cardData.brewery_type}
              street={cardData.street}
              state={cardData.state}
              county={cardData.county_province}
              postalCode={cardData.postal_code}
              country={cardData.country}
              longitude={cardData.longitude}
              latitute={cardData.latitude}
              phone={cardData.phone}
              website={cardData.website_url}
              updated={cardData.updated_at}
              created={cardData.created_at}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPage;
