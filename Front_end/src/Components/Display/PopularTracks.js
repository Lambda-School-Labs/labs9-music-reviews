import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { NavLink } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { Row, Col, Card, CardImg, Container } from 'reactstrap';



const url = 'https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF';
 // TOP50 most playable tracks in the world
class PopularTracks extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
         }
    }

    componentDidMount() {
        let access_token = this.props.cookies.get('access_token');
        axios
        .get(url, { 'headers': { 'Authorization': 'Bearer ' + access_token } })
          .then(response => {
            this.setState({
              data: response.data.tracks.items,
            })
          })
          .catch(function(error) {
            console.log(error)
          })
      }

    render() {
        const image = '../../Images/songbird.png';
        const renderData = 
            <Container xs="3" md="4" fluid style={{ maxWidth: "1200px", padding: "2rem 0 5rem 0", color: "#dc9f2e",fontFamily:'roboto', backgroundColor:'#233237'}}>
                <Row>
                    <h1 style={{ color: "#eac67a", margin: "0 auto", padding: "2rem", fontFamily:'roboto' }}>Popular Tracks</h1>
                </Row>
                <Row>
                    <Col style={{ overflow: "hidden", textAlign: "center", padding: "2rem 1rem 0 1rem" }}>
                        <Row style = {{ marginBottom: '15px', color: "#eac67a" }}>
                        {/* <Col xs="12" md="4" style={{padding: "2rem 1rem 0 1rem" }}> */}
                            <Col xs="12" md="4" style={{ textAlign: 'center' }}>Art</Col>
                            <Col xs="12" md="4"  style={{ textAlign: 'center', alignContent: 'center'}}>Track Name</Col>
                            <Col xs="12" md="4"  style={{ textAlign: 'center' }}>Artist Name</Col>
                        </Row>
                            {this.state.data.map(data => {
                                return data.track.artists.map(artist => {
                                    if (data.track.popularity > 95) {
                                    return data.track.album.images.length === 0 ? null : 
                                        <NavLink to={`/tracks/${data.track.id}`}>
                                            <Row key = {data.track.id} style = {{ maxWidth: '1600px', textAlign: 'center', padding: '1rem', color: "#4b0082", textDecoration: "none" , color:'#984B43', textDecoration: 'none', fontFamily:'merriweather'}}>
                                                <Col sm="3">
                                                <CardImg src= {!data.track.album.images[0] ? image : data.track.album.images[0].url}
                                                        alt = {data.track.name} style = {{borderRadius: '50%', width: '7rem'}}
                                                />  
                                                </Col>
                                                {/* <Col sm={1} className="d-flex align-items-center">{data.track.popularity}</Col> */}
                                                <Col sm="6" className="d-flex align-items-center">{data.track.name}</Col>
                                                <Col sm="3" className="d-flex align-items-center">{artist.name}</Col>
                                            </Row>
                                        </NavLink>
                                    }
                                })
                            })}
                    </Col>
                </Row>
            </Container>
        return (
            <Container>
                <Card>
                    {renderData}   
                </Card>
            </Container>
         );
    }
}
 
export default withCookies(PopularTracks);