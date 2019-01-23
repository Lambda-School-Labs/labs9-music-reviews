import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import UserReviewList from "./Components/ReviewList/UserReviewList";
import AlbumReviewsPage from "./Components/ReviewsPage/AlbumReviewsPage";
import TrackReviewsPage from "./Components/ReviewsPage/TrackReviewsPage";
import HomePage from "./Components/HomePage";
import LandingPage from "./Components/LandingPage/LandingPage";
import SearchLanding from "./Components/SearchLanding/SearchLanding";
import Billing from "./Components/Billing/Billing";
import SettingsPage from "./Components/Settings/SettingsPage";
import SignUpPage from "./Components/Signup/SignUpPage";
import ArtistPage from "./Components/ArtistPage/ArtistPage"
import LogInPage from "./Components/Login/LogInPage";
import ForgotPasswordPage from "./Components/ForgotPassword/ForgotPasswordPage";
import { Container } from "reactstrap";
import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import Search from "./Components/Search/Search";
//import './App.css';

let refreshTime = 29*60*1000; // 29 mins

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loaded: false,
      loggedIn: false,
      userID: "",
      firebaseUID: "",
      email: "",
      paidStatus: false,
      subscriptionExpiration: null,
      nickname: "",
    }
    this.getToken = this.getToken.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
    this.login = this.login.bind(this);
    this.signout = this.signout.bind(this);
  }
  getUser = (email) => {
    axios
      .get(`https://labs9-car-reviews.herokuapp.com/user/get/${email}`)
      .then((res) => {
        this.setState({
          userID: res.data.userID,
          firebaseUID: res.data.firebaseUID,
          email: res.data.emailAddress,
          paidStatus: res.data.paidMembership,
          subscriptionExpiration: res.data.subscriptionExpiration,
          nickname: res.data.nickname,
          loaded: true,
          loading: false,
        });
      })
      .catch((err) => this.setState({ loaded: false, loading: false }, console.log(err)));
  }
  getToken = () => {
    axios
      .get(process.env.REACT_APP_TOKEN_URL)
      .then(res =>
        this.props.cookies.set("access_token", res.data.access_token)
      )
      .catch(err => console.log(err));
  };
  refreshToken = () => {
    axios.get(process.env.REACT_APP_REFRESH_TOKEN_URL)
      .then( res => {
        this.props.cookies.set('access_token', res.data.access_token)
        console.log("Token Refreshed")
      })
      .catch( err => console.log(err) )
  }
  login = () => {
      this.setState({ loggedIn: true })
  }
  signout = () => {
      this.setState({ loggedIn: false })
  }
  componentDidMount(){
    this.setState({ loading: true }, () => {
      //when component mounts
      //check to see if there is a user that has been authenticated
      this.props.firebase.auth.onAuthStateChanged((user) => {
        // if there has been make a call to our own database to find user
        if (user) {
          //if successful set state with details of the user
          const email = user.email;
          this.getUser(email)
        } else {
          this.setState({ loaded: false, loading: false });
          //no user so data has been loaded since there was none to be found.
        }
      })
    });
    this.getToken();
    setInterval(this.refreshToken, refreshTime);
  }
  render() {
    console.log(this.state)
    return (
      <Container fluid style={{ padding: "0" }}>
        <Navigation loggedIn={this.state.loggedIn} signout={this.signout}/>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/search_landing" component={SearchLanding} />
        <Route path="/user/reviews" component={UserReviewList} />
        <Route path="/user/billing" component={Billing} />
        <Route path="/user/settings" component={SettingsPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" render={(props) => 
          <LogInPage {...props} changeLogInState={this.login} /> }
        />
        <Route path="/forgot_password" component={ForgotPasswordPage} />
        <Route path="/search" component={Search} />
        <Route
          path="/albums/:id"
          render={props => (
            <AlbumReviewsPage {...props}/>
          )}
        />
        <Route
          path="/tracks/:id"
          render={props => (
            <TrackReviewsPage {...props} />
            // id="75IN3CtuZwTHTnZvYM4qnJ"
          )}
        />
        <Route
          path="/artists/:id"
          render={props => (
            <ArtistPage {...props}/>
          )}
        />
        <Route
          path="/user/reviews/:id"
          render={props => (
            <UserReviewList {...props} loggedIn={this.state.loggedIn}/>
          )}
        />
      </Container>
    );
  }
}

export default withCookies(App);
