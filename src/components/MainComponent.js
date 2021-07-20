import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import EventDetail from './EventDetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    events: state.events,
    comments: state.comments,
    promotions: state.promotions,
    artists: state.artists
  }
}

class Main extends Component {

  render() {
    const HomePage = () => {
      return(
          <Home
              event={this.props.events.filter((event) => event.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              artist={this.props.artists.filter((artist) => artist.featured)[0]}
          />
      );
    }

    const EventWithId = ({match}) => {
      return(
          <EventDetail event={this.props.events.filter((event) => event.id === parseInt(match.params.eventId,10))[0]}
            comments={this.props.comments.filter((comment) => comment.eventId === parseInt(match.params.eventId,10))} />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/aboutus' component={() => <About artists={this.props.artists} />} />
              <Route exact path='/events' component={() => <Menu events={this.props.events} />} />
              <Route path='/events/:eventId' component={EventWithId} />
              <Route exact path='/contactus' component={Contact} />
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));