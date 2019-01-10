<<<<<<< Updated upstream:Front_end/src/Components/Search.js
import React, {Component} from 'react';
import { Row, Col, Button, Input, Section} from 'react-materialize';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }
=======
import React, { Component } from 'react'
import { Row, Col, Button, Input, Section } from 'react-materialize'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
>>>>>>> Stashed changes:Front_end/car-reviews/src/Components/Search.js

  componentDidMount() {}

  render() {
    return (
      <Section className="center">
        <Row>
          <Input s={3} label="Reviewer" type="select">
            <option value="" disabled selected>
              Choose reviewer (optional)
            </option>
            <option value="1">Adam Lee</option>
            <option value="2">Das MA</option>
            <option value="3">Francis Tse</option>
            <option value="4">A.D.Faris</option>
            <option value="5">Will Kwon</option>
          </Input>

          <Input s={2} label="Year" type="select">
            <option value="" disabled selected>
              Choose year
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Input>

          <Input s={3} label="Make" type="select">
            <option value="" disabled selected>
              Choose make
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Input>

          <Input s={2} label="Model" type="select">
            <option value="" disabled selected>
              Choose model
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Input>

          <Input s={2} label="Trim" type="select">
            <option value="" disabled selected>
              Choose trim
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Input>
        </Row>
        <Row>
          <Col s={12}>
            <Button>Review</Button>
            <Button>Search</Button>
          </Col>
        </Row>
      </Section>
    )
  }
}
<<<<<<< Updated upstream:Front_end/src/Components/Search.js
 
export default Search;
=======

export default Search
>>>>>>> Stashed changes:Front_end/car-reviews/src/Components/Search.js
