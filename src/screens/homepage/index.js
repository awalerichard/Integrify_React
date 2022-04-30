import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import "./homepage.css";
import "../../App.js";

import BrewsCard from "../../components/Card";

const Homepage = () => {
  const dummyData = [
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
  ];
  useEffect(() => {
    // Update the document title using the browser API
    // setCardData([...cardData, { title: "card8" }]);
    axios
      .get("https://api.openbrewerydb.org/breweries")
      .then(function (response) {
        // handle success
        console.log(response);
        setCardData(response.data);
      });
  }, []);
  const [cardData, setCardData] = useState([
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
  ]);
  return (
    <div>
      <h1> THis is homepage.</h1>
      <Container>
        <Row>
          {cardData.map((item, index) => {
            return (
              <Col
                key={index}
                xs={12}
                md={6}
                lg={4}
                style={{ marginBottom: "2em" }}
              >
                <BrewsCard title={item.name} />
              </Col>
            );
          })}
        </Row>

        <Link to="detail">
          <Button variant="primary">Detail</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Homepage;
