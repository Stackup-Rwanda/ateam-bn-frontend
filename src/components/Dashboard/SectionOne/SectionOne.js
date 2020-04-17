import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dashboard from '../../../assets/images/dashboard.png';
import travel from '../../../assets/images/travel.jpg';
import './SectionOne.scss';
import popularDestinationAction from '../../../actions/trips/popularDestinationAction';
import { fetchUserProfileDetails } from '../../../actions';

class SectionOne extends Component {
  componentDidMount() {
    const { popularDestinationAction, fetchUserProfileDetails } = this.props;
    popularDestinationAction();
    fetchUserProfileDetails(localStorage.token);
  }

   renderAlert = (error) => {
     if (!error) return null;
     return (
      <div>
        {error}
      </div>
     );
   };

   render() {
     const { listOfDestinations } = this.props;
     const user = { ...this.props.userProfileDetails };
     const error = this.props.destinationErrors.message;
     console.log(error, '..................');
     const allDestinations = listOfDestinations.map((destination, index) => (

      <div className="place" key ={index}>
              <img alt="paris" src={travel} />
              <div className="text">
                <p>{destination.country}</p>
                <p>{destination.capitalCity}</p>
              </div>
              <div className="percentage">{destination.visitTimes}</div>
      </div>
     ));
     return (
      <div className="section-one">
        <div className="section-one-left">
          <div className="thumbnail">
            <img alt="dashboard" src={dashboard} />
            <p>Welcome {user.name}</p>
            <button type="button">
              <span>Create Trip </span>
              <span><FontAwesomeIcon icon={faPlaneDeparture} /></span>
            </button>
          </div>
        </div>
        <div className="section-one-right">
          <p>Popular Destinations</p>
          <div className="destinations">
            { allDestinations }
          </div>
             {/* {this.renderAlert(error)} */}
        </div>
      </div>
     );
   }
}
const mapStateToProps = ({
  profile,
  destinations: {
    listOfDestinations,
    getDestinations: { message, loading, destinationErrors }
  }
}) => ({
  listOfDestinations,
  message,
  loading,
  destinationErrors,
  userProfileDetails: profile.userProfileDetails,
});
export default connect(
  mapStateToProps,
  { popularDestinationAction, fetchUserProfileDetails }
)(SectionOne);
