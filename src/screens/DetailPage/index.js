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
      <Container>
        <Row>
          <Col xs={12} style={{ marginBottom: "2em" }}>
            <BrewsDetailPage
              id={cardData.id || "Not Available"}
              name={cardData.name || "Not Available"}
              city={cardData.city || "Not Available"}
              breweryType={cardData.brewery_type || "Not Available"}
              street={cardData.street || "Not Available"}
              state={cardData.state || "Not Available"}
              county={cardData.county_province || "Not Available"}
              postalCode={cardData.postal_code || "Not Available"}
              country={cardData.country || "Not Available"}
              longitude={cardData.longitude || "Not Available"}
              latitute={cardData.latitude || "Not Available"}
              phone={cardData.phone || "Not Available"}
              website={cardData.website_url || "Not Available"}
              updated={cardData.updated_at || "Not Available"}
              created={cardData.created_at || "Not Available"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPage;
