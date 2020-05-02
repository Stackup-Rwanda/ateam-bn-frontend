/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import ClipLoader from 'react-spinners/ClipLoader';
import { faAngleLeft, faAngleRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import MenuBar from '../../MenuBar';
import TitleBar from '../../TitleBar';
import RightSideBar from '../../RightSideBar';
import { Button, Modal, Input, Form, TextArea, CheckBox, Alert } from '../../common';
import { tripActions, locationActions, accommodationActions } from '../../../actions';
import './Requests.scss';

class Requests extends Component {
  state = {
    modalStyle: 'none',
    tripId: 0,
    form: {
      tripType: 'One-way',
      name: '',
      passportId: '',
      from: 0,
      to: [],
      date: '',
      returnDate: '',
      reasons: '',
      accommodationId: 0
    },
    fromLocation: '',
    rememberMe: false,
    errors: {}
  };

  hideModal = () => this.setState({ modalStyle: 'none' });

  showModal = (trip) => {
    this.props.fetchLocations();
    this.props.fetchAccommodations();

    this.setState({ errors: {} });
    this.setState({ modalStyle: 'block' });
    this.setState({ tripId: trip.id });
    this.setState({
      form: {
        tripType: 'One-way',
        name: trip.name,
        passportId: trip.passportId,
        from: trip.from,
        to: [],
        date: moment(trip.date).format('YYYY-MM-DD'),
        returnDate: moment(trip.returnDate).format('YYYY-MM-DD'),
        reasons: trip.reasons,
        accommodationId: trip.accommodationId,
      }
    });
    this.setState({ fromLocation: trip.from });
  };

  handleChangeCheckBox = (e) => this.setState({ [e.target.name]: !this.state.rememberMe });

  handleChange = (e) => {
    const { form } = this.state;
    if (Array.isArray(e)) this.setState({ form: { ...form, to: e } });

    if (!Array.isArray(e) && e !== null) {
      this.setState({ form: { ...form, [e.target.name]: e.target.value } });
    }

    if (!Array.isArray(e) && e !== null && e.target.name === 'from') this.setState({ fromLocation: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { tripId, form } = this.state;

    form.tripType = 'One-way';
    form.to = form.to.map((data) => Number(data.value));

    form.from = Number(form.from);
    form.accommodationId = Number(form.accommodationId);

    let message = '';
    const { createTripRequest, editTripRequest } = this.props;

    if (!tripId) message = await createTripRequest(form);

    if (tripId) message = await editTripRequest(tripId, form);

    this.setState({ tripId: '' });
    this.setState({
      form: {
        tripType: 'One-way',
        name: '',
        passportId: '',
        from: 0,
        to: [],
        date: '',
        returnDate: '',
        reasons: '',
        accommodationId: 0
      }
    });
    this.setState({ rememberMe: false });
    this.setState({ fromLocation: '' });

    const { getAllRequests } = this.props;
    getAllRequests(1, 6);

    setInterval(() => {
      this.setState({ errors: {} });
    }, 7000);

    setInterval(() => {
      this.setState({ modalStyle: 'none' });
    }, 9000);

    return message;
  };

  componentDidMount() {
    const { getAllRequests, fetchLocations } = this.props;
    getAllRequests(
      1,
      6
    );
    fetchLocations();
  }

  componentWillReceiveProps = (nextProps) => {
    let AlertMessage;
    if (nextProps.message || nextProps.errors.message) {
      AlertMessage = { message: nextProps.message || nextProps.errors.message, type: (nextProps.message) ? ('alert-sucess') : ('alert-danger') };

      this.setState({ errors: { ...this.state.errors, ...AlertMessage } });
    }
    return !nextProps.loading && AlertMessage;
  };

  componentWillMount() {
    const { history } = this.props;
    const { token } = localStorage;
    if (!token) {
      history.push('/login');
    }
  }

  nextPagination = () => {
    const { getAllRequests, Next } = this.props;
    getAllRequests(Next.page, 6);
  };

  prevPagination = () => {
    const { getAllRequests, Previous } = this.props;
    getAllRequests(Previous.page, 6);
  }

  render() {
    const { modalStyle, form, errors, fromLocation } = this.state;

    const { loading, requests, locationsList, accommodationList, Next, Previous } = this.props;

    const locations = locationsList.map((data) => ({ value: data.id, label: data.name }));

    const accommodations = accommodationList.map((data) => {
      let newData = null;

      if (form.to.length) {
        (form.to.find((x) => x.value === data.locationId)) ? newData = { value: data.id, label: data.name } : newData = null;
      }

      return newData;
    });

    // eslint-disable-next-line no-unused-vars
    const goingTo = (array) => {
      let location = '';
      array.forEach((element) => {
        if (locationsList.length) {
          const result = locationsList.find((data) => data.id === element).name;
          if (result) location += `${result} ,`;
        }
      });
      return location;
    };

    const currentPage = Next && !Next.page ? (
      Previous.page + 1
    ) : (
      Previous.page ? (
        Previous.page + 1
      ) : (
        Next.page - 1
      )
    );

    const mainJsx = loading ? (
      <div className="loader-section" data-test="LoaderComponent">
        <ClipLoader
          css={{ display: 'block', margin: '0 auto' }}
          size={150}
          color={'#3AB397'}
          loading={loading}
        />
      </div>
    ) : (
      <>
        <div className="requests">
          { requests && requests.trips && requests.trips.map((req) => (
            <div key={req.id} className="trip">
              <Link to={`approvals/${req.id}`}><img alt="trip One" src={req.Accommodations.image} /></Link>
              <span className="status pending">{req.status}</span>
              <div className="details">
                <p className="details-place">Paris</p>
                <p className="details-departure">
                  Departure date:
                  {' '}
                  { moment(req.date).format('MMMM Do YYYY') }
                </p>
                <p className="details-return">
                  Return date:
                  {' '}
                  { req.returnDate ? moment(req.returnDate).format('MMMM Do YYYY') : 'Not Specified' }
                </p>
                <p className="details-city">City:</p>
                <p className="details-address">Kampala, Uganda, Africa</p>
              </div>
            </div>
          )) }
        </div>
        <div className="pagination" data-test="paginationDiv">
          <FontAwesomeIcon icon={faAngleLeft} className="angles" onClick={this.prevPagination} data-test="iconPrev" />
          <span>{Next.page || Previous.page ? currentPage : 0}</span>
          <FontAwesomeIcon icon={faAngleRight} className="angles" style={{ color: '#3ab397cc' }} onClick={this.nextPagination} data-test="iconNext" />
        </div>
      </>
    );

    return (
      <div className="wrapper">
        <MenuBar />
        <div className="main">
          <TitleBar />
          <Button
            type="submit"
            onClick={this.showModal}
            children="Add Trip"
          />

          <div className="requests">
            { requests && requests.trips && requests.trips.map((req) => (
              <div key={req.id} className="trip">
                <img alt="trip One" src={req.Accommodations.image} />
                <span className={`status ${req.status}`}>{req.status}</span>
                <div className="details">
                  <p className="details-place">{req.Accommodations.name}</p>
                  <p className="details-departure">
                    Departure date:
                    {' '}
                    { moment(req.date).format('MMMM Do YYYY') }
                  </p>
                  <p className="details-return">
                    Return date:
                    {' '}
                    { req.returnDate ? moment(req.returnDate).format('MMMM Do YYYY') : 'Not Specified' }
                  </p>
                  <p className="details-city">City:</p>
                  <p className="details-address">{goingTo(req.to)}</p>
                  <button className='details-accommodation'><Link to={`/requests/${req.id}/accommodation/${req.Accommodations.id}`}>Book Room</Link></button>
                </div>
                {(req.status === 'Pending') ? (
                  <Button type="submit" onClick={() => this.showModal(req)} buttonClass="btn-edit">
                    <FontAwesomeIcon icon={faEdit} className="angles" />
                  </Button>
                ) : ''}
              </div>
            )) }
          </div>
          <div className="pagination">
            <FontAwesomeIcon icon={faAngleLeft} className="angles" />
            <span>3</span>
            <FontAwesomeIcon icon={faAngleRight} className="angles" style={{ color: '#3ab397cc' }} />
          </div>
          {mainJsx}

          <div className="">
            <Modal modalStyle={modalStyle} closeModal={this.hideModal}>
              <Form formTitle="Create Trip" formClass="m-20" onSubmit={this.handleSubmit}>
                {Object.keys(errors).length ? (
                  <Alert
                    children={errors.message}
                    alertTypeClass={errors.type}
                  />
                ) : (
                  ''
                )}
                <div className="row">
                  <Input
                    name="name"
                    type="text"
                    inputFieldClass="form-field m-bottom"
                    inputClass="lg-input border-0 bg-half-white"
                    placeholder="Type your Name"
                    isRequired
                    onChange={this.handleChange}
                    value={form.name}
                  />
                  <Input
                    name="passportId"
                    type="number"
                    inputFieldClass="form-field m-bottom"
                    inputClass="lg-input border-0 bg-half-white"
                    placeholder="Passport ID"
                    isRequired
                    onChange={this.handleChange}
                    value={form.passportId}
                  />
                </div>
                <div className="row">
                  <div className="form-field m-bottom Select dropdown">
                    <label className="field-label">From</label>
                    <select name="from" className="lg-input border-0 bg-half-white" value={form.from} onChange={this.handleChange} required>
                      <option>Select...</option>
                      {locations.map((data) => <option key={data.value} value={data.value}>{data.label}</option>)}
                    </select>
                  </div>
                  <div className="form-field m-bottom Select dropdown">
                    <label className="field-label">To</label>
                    <Select
                      isMulti
                      name="to"
                      options={locations.filter((x) => Number(x.value) !== Number(fromLocation))}
                      className="lg-input border-0 bg-half-white"
                      classNamePrefix="select"
                      required
                      isDisabled={!!(form.from === undefined || Number(form.from) < 1 || form.from === null || form.from === 'Select...')}
                      value={form.to}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <Input
                    name="date"
                    type="date"
                    inputFieldClass="form-field m-bottom"
                    inputClass="lg-input border-0 bg-half-white"
                    placeholder="Departure date"
                    isRequired
                    onChange={this.handleChange}
                    value={moment(form.date).format('YYYY-MM-DD')}
                  />
                  <Input
                    name="returnDate"
                    type="date"
                    inputFieldClass="form-field m-bottom"
                    inputClass="lg-input border-0 bg-half-white"
                    placeholder="Return date"
                    onChange={this.handleChange}
                    value={moment(form.returnDate).format('YYYY-MM-DD')}
                  />
                </div>
                <TextArea
                  name="reasons"
                  label="Reasons"
                  textAreaFieldClass="form-field m-bottom"
                  textAreaLabelClass="field-label"
                  textAreaClass="lg-input border-0 bg-half-white"
                  placeholder="Return date"
                  isRequired
                  onChange={this.handleChange}
                  value={form.reasons}
                />
                <div className="form-field m-bottom Select dropdown">
                <label className="field-label">Accommodation</label>
                  <select name="accommodationId" className="lg-input border-0 bg-half-white" value={form.accommodationId} onChange={this.handleChange} required disabled={!!(form.to === undefined || Number(form.to.length) === 0 || form.to === null)}>
                    <option>Select</option>
                    {accommodations.map((data) => ((data !== null) ? (<option key={data.value} value={data.value}>{data.label}</option>) : ('')))}
                  </select>
                </div>

                <div className="row">
                  <CheckBox
                    inputFieldClass="form-field m-bottom"
                    name="rememberMe"
                    value={form.rememberMe}
                    checked={form.rememberMe}
                    label="Remember my Name and Passport ID"
                    onChange={this.handleChangeCheckBox}
                  />
                  <div className="form-field m-bottom">
                  <Button type="submit" onClick={(e) => e} loading={loading} buttonClass="btn md-btn b-radius-circle save-trip text-center sm-title m-top-bottom-40" children="Save" />
                  </div>
                </div>
              </Form>
            </Modal>
          </div>

        </div>
        <RightSideBar />
      </div>
    );
  }
}

Requests.defaultProps = { token: null, requests: null };

Requests.propTypes = {
  token: PropTypes.string,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  getAllRequests: PropTypes.func.isRequired,
  requests: PropTypes.shape({ trips: PropTypes.array.isRequired }),
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  fetchLocations: PropTypes.func,
  fetchAccommodations: PropTypes.func,
  createTripRequest: PropTypes.func,
  editTripRequest: PropTypes.func,
  match: PropTypes.object
};

const mapStateToProps = ({ user, requests, location: { locations: { list } }, accommodation: { accommodations } }) => ({
  token: user.token,
  requests,
  loading: requests.loading,
  message: requests.message,
  errors: requests.errors,
  locationsList: list,
  accommodationList: accommodations.list,
  Next: requests.Next,
  Previous: requests.Previous
});

const mapDispatchToProps = (dispatch) => {
  const { getAllRequests, createTripRequestAction, editTripRequestAction } = tripActions;
  const { fetchLocationsAction } = locationActions;
  const { fetchAccommodationAction } = accommodationActions;
  return {
    getAllRequests: (page, limit) => dispatch(getAllRequests(page, limit)),
    fetchLocations: () => dispatch(fetchLocationsAction()),
    fetchAccommodations: () => dispatch(fetchAccommodationAction()),
    createTripRequest: (form) => dispatch(createTripRequestAction(form)),
    editTripRequest: (id, form) => dispatch(editTripRequestAction(id, form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
