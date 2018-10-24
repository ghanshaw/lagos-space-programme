import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Brand */}
        <Header></Header>

        <Grid fluid={true}>
          <Row className="text-align-left top-row content">
              <Col md={5} className="height-100 white">
                <h1 class="cta">Enter</h1>

              </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
