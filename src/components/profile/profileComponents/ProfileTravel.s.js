import { connect } from 'react-redux';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import place from '../../../assets/images/profile/place.png';
import { fetchUserTravels, fetchPlaces } from '../../../actions';
import { shortData, componentHelper, assignPlaceName, checkPlace } from '../../../helpers/ProfileHelper/profileHelper';

class ProfileTravels extends Component {
  componentDidMount() {
    const { token } = componentHelper(localStorage.getItem('token'));
    this.props.fetchThosePlaces(token);
    this.props.fetchThisUserTravels(token, 1);
  }

  nextPage(data) {
    const { token } = componentHelper(localStorage.getItem('token'));
    this.props.fetchThisUserTravels(token, data.page);
  }

  previousPage(data) {
    const { token } = componentHelper(localStorage.getItem('token'));
    this.props.fetchThisUserTravels(token, data.page);
  }

  render() {
    const palceNames = checkPlace(this.props.allPlaces);
    const componentError = localStorage.getItem('didAmountError');
    return (
      <div className="request">
        {this.props.userProfileTravels.paginate
          && componentError === 'null'
          ? (<h4 className="request-title"> Travels </h4>)
          : (<h4 className="error">{' '}</h4>)
          }
        <div>
          {
            this.props.userProfileTravels.paginate
              && this.props.userProfileTravels.paginate.length > 0
              && this.props.message === 'Loading ...'
              && componentError === 'null'
              ? (
                this.props.userProfileTravels.paginate.map((travels) => {
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

        {this.props.userProfileTravels.paginate
          && componentError === 'null'
          ? (
            <div className="paginate-space">
          <div className="paginate">
            {
              this.props.userProfileTravels
                ? (
                  <div>
                    {this.props.userProfileTravels.Previous
                      ? (<FontAwesomeIcon icon={faAngleLeft}
                      className="angles"
                      style={{ color: '#3ab397cc' }}
                      onClick={() => {
                        this.previousPage(this.props.userProfileTravels.Previous);
                      }}/>)
                      : (<FontAwesomeIcon icon={faAngleLeft}
                        className="angles" />)}
                    {this.props.userProfileTravels.Next
                      ? (<span>{this.props.userProfileTravels.Next.page - 1}</span>)
                      : this.props.userProfileTravels.Previous
                        ? (<span>{this.props.userProfileTravels.Previous.page + 1}</span>)
                        : (<span>1</span>)}
                    {this.props.userProfileTravels.Next
                      ? (<FontAwesomeIcon icon={faAngleRight}
                      className="angles"
                      style={{ color: '#3ab397cc' }}
                      onClick={() => { this.nextPage(this.props.userProfileTravels.Next); }}/>)
                      : (<FontAwesomeIcon icon={faAngleRight}
                        className="angles" />)}
                  </div>
                )
                : null
            }
          </div>
        </div>

          )
          : (<h4 className="error">{' '}</h4>)
          }

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
    fetchThisUserTravels: (token, page) => {
      dispatch(fetchUserTravels(token, page));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTravels);
