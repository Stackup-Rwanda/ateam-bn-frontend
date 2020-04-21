import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Menu from '../MenuBar';
import star from '../../assets/images/517-5179352_star-icon-yellow-star-with-black-background.png.jpeg';
import wifi from '../../assets/images/wi-fi-computer-icons-wireless-symbol-wifi-vector.jpg';
import plate from '../../assets/images/6bb9c1759c.png';
import cup from '../../assets/images/1d87c17d0df8cba9b15b9ea35e97645f-champagne-glass-flat-icon-restaurant-icons-by-vexels.png';
import bd from '../../assets/images/6857702_preview.png';
import './accommodation.scss';
import { getRooms, getAccommodation } from '../../actions/rooms/getRoomsActions';
import getOneTrip from '../../actions/trips/fetchOneTrip';
import { componentHelper } from '../../helpers/ProfileHelper/profileHelper';
import Room from './Room';
import Reaction from './Reaction';

class Accommodation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedRooms: [],
      viewRooms: '',
      tripId: '',
      tripApproved: false,
      accomodation: ''
    };
  }

  async componentDidMount() {
    const { token } = componentHelper(localStorage.getItem('token'));
    const { getRooms, getOneTrip } = this.props;
    const { match: { params: { accommodationId } } } = this.props;
    const { match: { params: { tripId } } } = this.props;
    this.setState({
      tripId,
      accomodation: await getAccommodation(token, accommodationId)
    });
    await getRooms(token, accommodationId);
    if (await getOneTrip(token, tripId) === true) {
      this.setState({ tripApproved: true });
      this.getRoomsByType('all');
    } else {
      const { history } = this.props;
      setTimeout(() => {
        history.push('/login');
      }, 5000);
    }
  }

  populateRooms = () => {
    const list = [];
    this.state.displayedRooms.forEach((room) => {
      list.push(<Room room={room} tripId={this.state.tripId} />);
    });

    this.setState({ viewRooms: list });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.bookRoomError) {
      toast.error(nextProps.bookRoomError);
    }
  }

  handlechange = async (e) => {
    this.getRoomsByType(e.target.value);
  };

  getRoomsByType = async (type) => {
    let filteredRooms;
    const { rooms } = this.props;
    const { authErrors } = this.props;
    if (type === 'all') {
      await this.setState({
        displayedRooms: [...rooms],
        authErrors: { ...authErrors }
      });
    } else {
      filteredRooms = rooms.filter((room) => room.roomType === type);
      await this.setState({
        displayedRooms: [...filteredRooms],
        authErrors: { ...authErrors }
      });
    }
    this.populateRooms();
  }

  render() {
    // const { match: { params: { accommodationId } } } = this.props;
    return (this.state.tripApproved ? (
      <div className="wrapper">
        <Menu />
        <div className="accommodation-container m-top">
          <div>
            <h2>Barefoot Nomad</h2>
          </div>
          <div className="card-one">
            <img
              src={this.state.accomodation.image}
              className="picture"
              alt=""
            />
            <div>
              <h2 className="m-top">Marriot</h2>
              <div className="icons">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className="wifi-computer">
                <img src={wifi} alt="" />
                <img src={plate} alt="" />
                <img src={cup} alt="" />
                <img src={bd} alt="" />
              </div>
              <p className="price">$230</p>

              <div className="reaction">
                <Reaction accommodationId={this.props.match.params.accommodationId} />
              </div>
            </div>
          </div>
          <div className="card-two">
            <h3>Highlights</h3>
            <p>{this.state.accomodation.highlights}</p>
            <h3>Amenities</h3>
            <p>{this.state.accomodation.amenities}</p>
            <h3>Description</h3>
            <p>{this.state.accomodation.description}</p>
          </div>
          <div className="location">
                <div class="mapouter">
                    <iframe
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=marriot%20kigali&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                </div>
              </div>
        </div>
        <div className="rooms-container">
          <h2 className="m-top h2-margin">Rooms</h2>
          <div className="d-flex">
            <select
              id="roomType"
              name="roomType"
              className="lg-input border-0 bg-half-white-sign dropdown"
              onChange={this.handlechange}
            >
              <option value="all">All</option>
              <option value="Suites">Suites</option>
              <option value="King-size">King-size</option>
              <option value="Queen-size">Queen-size</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
            </select>
            <h3>Select a room Type</h3>
          </div>
          <div className="cards">
            <div className="row-room">{this.state.viewRooms}</div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={5000} />
      </div>
    ));
  }
}

const mapStateToProps = ({ room }) => ({
  rooms: room.rooms,
  authErrors: room.authErrors,
  bookRoomError: room.bookRoomError
});
const mapDispatchToProps = (dispatch) => ({
  getRooms: (token, accommodationId) => dispatch(getRooms(token, accommodationId)),
  getOneTrip: (token, tripId) => dispatch(getOneTrip(token, tripId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Accommodation);
