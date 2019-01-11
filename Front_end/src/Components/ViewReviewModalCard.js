import React from "react";
import styled from "styled-components";
import Stars from "./Stars";
import { Button, Modal, NavItem, Dropdown, Col, Card } from "react-materialize";

const ViewReviewModalCard = props => {
  return (
    <div>
      <Col m={6} s={12} style={{ height: "250px" }}>
        {/* Create new review modal */}
        <Modal
          header="Year Make Model Trim"
          fixedFooter
          style={{ width: "35%" }}
          trigger={
            <Card title="Year Make Model Trim">
              <div style={{ display: "flex", flexDirection: "column"}}>
                <img
                  src="https://mygoto.io/assets/web/images/placeholder-img.jpg"
                  height="200px"
                />
                Updated Time
              </div>
            </Card>
          }
          actions={
            <div>
              <Button modal="close" waves="light" className="red darken-2">
                Close
              </Button>
            </div>
          }
        >
          <p>Review by: @name</p>
          <div class="center-align">
            <img
              src="https://mygoto.io/assets/web/images/placeholder-img.jpg"
              height="70%"
              width="70%"
            />
          </div>
          <div>
            <Stars />
          </div>
          <p>
            Lorem ipsum check it out hizzle amizzle, adipiscing shiznit. Rizzle
            sapizzle velit, dizzle volutpizzle, suscipizzle quizzle, gravida
            rizzle, izzle. Pellentesque eget tortor. I'm in the shizzle erizzle.
            Boom shackalack check it out dolor dapibus yippiyo tempizzle go to
            hizzle. Maurizzle pellentesque nibh et turpizzle. Shizznit izzle
            tortizzle. Pellentesque check it out rhoncus my shizz. In hizzle
            yippiyo platea dictumst. Donec dapibizzle. Pimpin' tellizzle gizzle,
            go to hizzle eu, the bizzle ac, fo , nunc. Bling bling suscipizzle.
            Integizzle semper shut the shizzle up shizznit cool.
          </p>
        </Modal>
      </Col>
    </div>
  );
};

export default ViewReviewModalCard;