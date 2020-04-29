/* eslint-disable max-len */
/* eslint-disable react/forbid-foreign-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import MenuBar from '../MenuBar';
import './NewAccommodation.scss';
import { fetchSingleAccommodationAction, deleteAccommodationAction, editAccommodationAction } from '../../actions/accommodation';
import { fetchLocationsAction } from '../../actions/location';


class SpecificAccommodation extends Component {
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
    const { id } = this.props.SingleAccommodationList;
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
    this.props.editAccommodationAction(formData, id);
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

  onDelete = (id) => {
    this.props.deleteAccommodationAction(id);
  };

  getAccommodation = (fetching) => {
    if (fetching) {
      this.setState({ name: fetching.name });
      this.setState({ description: fetching.description });
      this.setState({ image: fetching.image });
      this.setState({ locationId: fetching.locationId });
      this.setState({ geoLocation: fetching.geoLocation });
      this.setState({ highlights: fetching.highlights });
      this.setState({ amenities: fetching.amenities });
    }
  };

  displayButton = () => {
    const { locationsList, SingleAccommodationList } = this.props;
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
      const { role, id } = jwt.decode(token);
      if (allowedRoles.includes(role)) {
        if (role === 'REQUESTER') {
          return (<div></div>);
        }
        if (role === 'TRAVEL ADMINISTRATOR' && id === SingleAccommodationList.createdBy) {
          return (
            <div>
              <Popup
                trigger={
                  <button className="editButton">
                    <button
                      className="insideEdit"
                      onClick={() => this.getAccommodation(SingleAccommodationList)
                      }
                    >
                      Edit
                    </button>
                  </button>
                }
                modal
              >
                {(close) => (
                  <div className="modal1">
                    <button
                      className="close"
                      onClick={() => {
                        window.location.replace(`/accommodations/${SingleAccommodationList.id}`);
                        close();
                      }}
                    >
                      &times;
                    </button>
                    <div className="header">
                      <h2>Edit Accommodation</h2>
                    </div>
                    <div className="content">
                      <form onSubmit={this.handleSubmit}>
                        <p className="labels">Name</p>
                        <input
                          type="text"
                          value={this.state.name}
                          name="name"
                          onChange={this.nameChange}
                        />
                        <p className="labels">Description</p>
                        <input
                          type="text"
                          name="description"
                          value={this.state.description}
                          onChange={this.descriptionChange}
                        />
                        <p className="labels">Image</p>
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
                        <p className="labels">GeoLocation</p>
                        <input
                          type="text"
                          name="geoLocation"
                          value={this.state.geoLocation}
                          onChange={this.geoLocationChange}
                        />
                        <p className="labels">Highlights</p>
                        <input
                          type="text"
                          name="highlights"
                          value={this.state.highlights}
                          onChange={this.highlightsChange}
                        />
                        <p className="labels">
                          Amenities(separate with a comma)
                        </p>
                        <input
                          type="text"
                          name="amenities"
                          value={this.state.amenities}
                          onChange={this.amenitiesChange}
                        />
                        <button type="submit" className="accommodationButton">
                          Edit Accommodation
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </Popup>
              <button
                onClick={() => this.onDelete(SingleAccommodationList.id)}
                className="deleteButton"
              >
                Delete
              </button>
            </div>
          );
        }
      }
    }
    return (<div></div>);
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps.message || nextProps.accommodationErrors);
    const alertMessage = (nextProps.message && toast.success(nextProps.message))
      || (nextProps.accommodationErrors
        && toast.error(nextProps.accommodationErrors));

    return !nextProps.loading && alertMessage;
  };

  componentDidMount() {
    const { match: { params: { id }, }, } = this.props;
    this.props.fetchSingleAccommodationAction(id);
    this.props.fetchLocationsAction();
    this.getAccommodation(this.props.SingleAccommodationList);
  }

  render() {
    const { locationsList, SingleAccommodationList } = this.props;
    const getLocation = (id) => {
      const answer = locationsList.find((x) => x.id === id);
      return (answer) ? answer.country : id;
    };
    let componentToRender;
    if (SingleAccommodationList) {
      let stringSeparator = '';
      SingleAccommodationList.amenities.forEach((amenity, index, amenities) => {
        stringSeparator += amenity;
        if (index !== (amenities.length - 1)) {
          stringSeparator += ', ';
        }
      });
      componentToRender = (
        <div>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
            crossorigin="anonymous"
          ></link>
          <div className="accommodationGrid2">
            <div class="grid">
              <div class="box box1">
                <img src={SingleAccommodationList.image} alt=""></img>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2
                  key={SingleAccommodationList.value}
                  value={SingleAccommodationList.value}
                >
                  {SingleAccommodationList.name}{' '}
                </h2>
              </div>
              <div class="box box2">
                <br></br>
                <br></br>
                <br></br>
                <p className="labels">
                  Description <i class="fas fa-info-circle"></i>
                </p>
                <br></br>
                <p>{SingleAccommodationList.description}</p>
                <br></br>
                <p className="labels">
                  Highlights <i class="fas fa-file-alt"></i>
                </p>
                <br></br>
                <p>{SingleAccommodationList.highlights}</p>
                <br></br>
                <p className="labels">
                  Amenities <i class="fas fa-list-ul"></i>
                </p>
                <br></br>
                <p>{stringSeparator}</p>
                <br></br>
                { this.displayButton() }
              </div>
              <div class="box box3">
                <br></br>
                <p className="labels">
                  Location <i class="fas fa-map-marker-alt"></i>
                </p>
                <br></br>
                <p>{getLocation(SingleAccommodationList.locationId)}</p>
                <br></br>
              </div>
              <div class="box box4">
                <iframe
                  title="This is a unique title"
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=kigali&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      componentToRender = <div></div>;
    }
    return (
      <div className="wrapper">
        <MenuBar className="menuBar"/>
        <div className="main">
          <div className="Accommodation">
            <ToastContainer
              position={toast.POSITION.TOP_CENTER}
              className="toastMessages"
            />
            <br></br>
            <Link to="/accommodations" className="backButton">
              Back
            </Link>
            <br></br>
            <br></br>
            <br></br>
            {componentToRender}
          </div>
        </div>
      </div>
    );
  }
}
SpecificAccommodation.propTypes = {
  accommodationErrors: PropTypes.string,
  message: PropTypes.string,
  locations: PropTypes.object,
  fetchLocationsAction: PropTypes.func,
  fetchSingleAccommodationAction: PropTypes.func,
  editAccommodationAction: PropTypes.func,
  deleteAccommodationAction: PropTypes.func,
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
  SingleAccommodationList: accommodations.single,
});

export default connect(mapStateToProps, {
  fetchSingleAccommodationAction,
  deleteAccommodationAction,
  fetchLocationsAction,
  editAccommodationAction
})(SpecificAccommodation);
