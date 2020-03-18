import React, { Component } from 'react';
import { connect } from 'react-redux';
import place from '../../../assets/images/profile/place.png';
import { fetchUserTravels, fetchPlaces } from '../../../actions';
import { shortData, componentHelper, assignPlaceName, checkPlace } from '../../../helpers/ProfileHelper/profileHelper';

class ProfileTravels extends Component {
  componentDidMount() {
    const { token } = componentHelper(localStorage.getItem('token'));
    this.props.fetchThosePlaces(token);
    this.props.fetchThisUserTravels(token);
  }

  render() {
    const palceNames = checkPlace(this.props.allPlaces);
    const componentError = localStorage.getItem('didAmountError');
    return (
      <div className="request">
        {this.props.userProfileTravels
          && componentError === 'null'
          ? (<h4 className="request-title"> Travels </h4>)
          : (<h4 className="error">{`${this.props.message}, ${componentError}`}</h4>)}
        <div>
          {
            this.props.userProfileTravels
              && this.props.userProfileTravels.length > 0
              && this.props.message === 'Loading ...'
              && componentError === 'null'
              ? (
                this.props.userProfileTravels.map((travels) => {
                  if (travels.to) {
                    const replacePlace = (travels.to.map((palceId) => (
                      assignPlaceName(palceId, palceNames)
                    )));
                    return (
                      <div className="travels" key={travels.id}>
                        <div className="my-column">
                          {travels.Accommodations.image || travels.Accommodations.image !== null ? (<img src={travels.Accommodations.image} alt="place" />) : <img src={place} alt="place" />}
                          <h5> Owner: {travels.name} </h5>
                          <h5> Status: {travels.status} </h5>
                          <h5> Trip Type: {travels.tripType} </h5>
                          <h5> Accommodation: {travels.Accommodations.name} </h5>
                          <h5> Visited places: {replacePlace} </h5>
                          <i>Reason: {travels.reasons !== null ? (`${shortData(travels.reasons)} ...`) : null}  </i>
                          <p className="date">Date: {travels.date}</p>
                        </div>
                      </div>
                    );
                  } return travels;
                })
              )
              : (
                <h4 className="error">
                  {componentError === 'null'
                    ? (
                      this.props.message !== 'Loading ...'
                        ? (this.props.message)
                        : (this.props.userTravelsError))
                    : null}
                </h4>
              )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => (
  {
    userProfileTravels: profile.userProfileTravels,
    userTravelsError: profile.userTravelsError,
    allPlaces: profile.allPlaces,
    message: profile.message
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchThosePlaces: (token) => {
      dispatch(fetchPlaces(token));
    },
    fetchThisUserTravels: (token) => {
      dispatch(fetchUserTravels(token));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTravels);
