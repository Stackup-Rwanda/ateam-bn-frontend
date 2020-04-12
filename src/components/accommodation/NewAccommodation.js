/* eslint-disable max-len */
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import MenuBar from '../MenuBar';
// import './NewAccommodation.scss';
import { newAccommodation, fetchAccommodationAction } from '../../actions/accommodation';
import { fetchLocationsAction } from '../../actions/location';

class NewAccommodation extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      image: '',
      locationId: '',
      geoLocation: '',
      highlights: '',
      amenities: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const amenities = this.state.amenities.toString().split(',');
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    if (this.state.image) {
      formData.append('image', this.state.image);
    }
    formData.append('locationId', this.state.locationId);
    formData.append('geoLocation', this.state.geoLocation);
    formData.append('highlights', this.state.highlights);
    amenities.forEach((amenity) => {
      formData.append('amenities', amenity);
    });
    this.props.newAccommodation(formData);
  };

  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  descriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  imageChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    if (event.target.files) {
      this.setState({ [event.target.id]: event.target.files[0] });
    }
  };

  locationChange = (event) => {
    this.setState({ locationId: event.target.value });
  };

  geoLocationChange = (event) => {
    this.setState({ geoLocation: event.target.value });
  };

  highlightsChange = (event) => {
    this.setState({ highlights: event.target.value });
  };

  amenitiesChange = (event) => {
    this.setState({ amenities: event.target.value });
  };

  displayButton = () => {
    const { locationsList } = this.props;
    const locations = locationsList.map((data) => ({
      value: data.id,
      label: data.country,
    }));
    const allowedRoles = [
      'SUPER ADMINISTRATOR',
      'TRAVEL ADMINISTRATOR',
      'MANAGER',
      'REQUESTER',
    ];
    const token = localStorage.getItem('token');
    if (token) {
      const { role } = jwt.decode(token);
      if (allowedRoles.includes(role)) {
        if (role === 'REQUESTER') {
          return (<div></div>);
        }
        if (role === 'TRAVEL ADMINISTRATOR') {
          return (
            <Popup
              trigger={
                <button className="createButton">Create Accommodation</button>
              }
              modal
            >
              {(close) => (
                <div className="modal1">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header">
                    <h2>New Accommodation</h2>
                  </div>
                  <div className="content">
                    <form
                      onSubmit={this.handleSubmit}
                      formTitle="Fill form to Create Accommodation"
                    >
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={this.nameChange}
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        onChange={this.descriptionChange}
                      />
                      <input
                        type="file"
                        multiple
                        id="image"
                        onChange={this.imageChange}
                      />
                      <select onChange={this.locationChange} required>
                        <option>Select...</option>
                        {locations.map((data) => (
                          <option key={data.value} value={data.value}>
                            {data.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        placeholder="GeoLocation"
                        name="geoLocation"
                        onChange={this.geoLocationChange}
                      />
                      <input
                        type="text"
                        placeholder="Highlights"
                        name="highlights"
                        onChange={this.highlightsChange}
                      />
                      <input
                        type="text"
                        placeholder="Amenities such as Wifi, Loundry(Separate with a comma)"
                        name="amenities"
                        onChange={this.amenitiesChange}
                      />
                      <button type="submit" className="accommodationButton">
                        Add Accommodation
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </Popup>
          );
        }
      }
    }
    return (<div></div>);
  }

  componentWillReceiveProps = (nextProps) => {
    const alertMessage = (nextProps.message && toast.success(nextProps.message))
      || (nextProps.accommodationErrors && toast.error(nextProps.accommodationErrors));

    return !nextProps.loading && alertMessage;
  };

  componentDidMount() {
    this.props.fetchLocationsAction();
    this.props.fetchAccommodationAction();
  }

  single = (id) => {
    window.location.replace(`/accommodations/${id}`);
  }

  render() {
    const { accommodationList } = this.props;
    const accommodations = accommodationList.map((data) => ({
      id: data.id,
      name: data.name,
      description: data.description,
      image: data.image
    }));
    return (
      <div className="wrapper">
        <MenuBar />
        <div className="main">
          <div className="Accommodation">
            <ToastContainer
              position={toast.POSITION.TOP_CENTER}
              className="toastMessages"
            />
            <br></br>
            { this.displayButton() }
            <div className="accommodationGrid">
              {accommodations.map((data) => (
                <div
                  className="AccommdationList"
                  onClick={() => this.single(data.id)}
                >
                  <img src={data.image} alt=""></img>
                  <h2 key={data.id} value={data.id}>
                    {data.name}
                  </h2>
                  <p>{data.description}</p>
                  <div className="linkHolder">
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <RightSideBar /> */}
      </div>
    );
  }
}
NewAccommodation.propTypes = {
  accommodationErrors: PropTypes.string,
  message: PropTypes.string,
  locations: PropTypes.object,
  fetchLocationsAction: PropTypes.func,
  fetchAccommodationAction: PropTypes.func
};

const mapStateToProps = ({
  accommodation: { loading, accommodationErrors, message },
  location: { locations: { list }, },
  accommodation: { accommodations },
}) => ({
  loading,
  accommodationErrors,
  message,
  locationsList: list,
  accommodationList: accommodations.list
});

export default connect(mapStateToProps, {
  newAccommodation,
  fetchLocationsAction,
  fetchAccommodationAction
})(NewAccommodation);
