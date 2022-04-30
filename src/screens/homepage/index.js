import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./homepage.css";
import "../../App.js";

import BrewsCard from "../../components/Card";
import SearchBar from "../../components/Search";
//import DetailButton from "../../components/Button";

const Homepage = () => {
  /*  const dummyData = [
    {
      title: "card1",
      type: "aces",
    },
    {
      title: "card2",
      type: "king",
    },
    {
      title: "card3",
    },

    {
      title: "card4",
    },

    {
      title: "card5",
    },
  ]; */
  useEffect(() => {
    // Update the document title using the browser API
    // setCardData([...cardData, { title: "card8" }]);
    axios
      .get("https://api.openbrewerydb.org/breweries")
      .then(function (response) {
        // handle success
        //console.log(response);
        setCardData(response.data);
      });
  }, []);
  const [cardData, setCardData] = useState([]);
  return (
    <div>
      <Container>
        <Row>
          <Col xs={8} md={8} lg={8} style={{ marginBottom: "2em" }}>
            <SearchBar />
          </Col>
          {/*  <Col xs={3} md={3} lg={3} className="navButton">
            <DetailButton />
          </Col> */}
        </Row>
        <Row>
          {cardData.map((item) => {
            return (
              <Col
                key={item.id}
                xs={12}
                md={6}
                lg={4}
                style={{ marginBottom: "2em" }}
              >
                <BrewsCard
                  id={item.id}
                  name={item.name}
                  city={item.city}
                  breweryType={item.brewery_type}
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
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
