import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Menu from '../MenuBar';
import star from '../../assets/images/517-5179352_star-icon-yellow-star-with-black-background.png.jpeg';
import wifi from '../../assets/images/wi-fi-computer-icons-wireless-symbol-wifi-vector.jpg';
import plate from '../../assets/images/6bb9c1759c.png';
import cup from '../../assets/images/1d87c17d0df8cba9b15b9ea35e97645f-champagne-glass-flat-icon-restaurant-icons-by-vexels.png';
import bd from '../../assets/images/6857702_preview.png';
import marriot from '../../assets/images/93100479.jpg';
import location from '../../assets/images/computer-icons-google-maps-map-marker.jpg';
import unlike from '../../assets/images/Unlike-512.png';
import like from '../../assets/images/iindex.png';
import fire from '../../assets/images/FireIcon.svg.png';
import './accommodation.scss';
import getRooms from '../../actions/rooms/getRoomsActions';
import getOneTrip from '../../actions/trips/fetchOneTrip';
import { componentHelper } from '../../helpers/ProfileHelper/profileHelper';
import Room from './Room';

class accommodation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedRooms: [],
      viewRooms: '',
      tripId: '',
      tripApproved: false
    };
  }

  async componentDidMount() {
    const { token } = componentHelper(localStorage.getItem('token'));
    const { getRooms, getOneTrip } = this.props;
    const { match: { params: { accommodationId } } } = this.props;
    const { match: { params: { tripId } } } = this.props;
    this.setState({ tripId });
    getRooms(token, accommodationId);
    if (await getOneTrip(token, tripId) === true) {
      this.setState({ tripApproved: true });
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
    let filteredRooms;
    const { rooms } = this.props;
    console.log(e.target.value);
    const { authErrors } = this.props;
    if (e.target.value === 'all') {
      await this.setState({
        displayedRooms: [...rooms],
        authErrors: { ...authErrors, [e.target.name]: null }
      });
    } else {
      filteredRooms = rooms.filter((room) => room.roomType === e.target.value);
      await this.setState({
        displayedRooms: [...filteredRooms],
        authErrors: { ...authErrors, [e.target.name]: null }
      });
    }
    this.populateRooms();
  };

  render() {
    return this.state.tripApproved ? (
      <div className="wrapper">
        <Menu />
        <div className="accommodation-container m-top">
          <div>
            <h2>Barefoot Nomad</h2>
          </div>
          <search />
          <div className="card-one">
            <img src={marriot} className="picture" alt="" />
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
              <div className="location">
                <img src={location} alt="" />
                <p>Kigali City, Rwanda</p>
              </div>
              <div className="reaction">
                <img src={like} className="img-like" alt="" />
                <img src={unlike} className="img-unlike" alt="" />
                <img src={fire} className="img-like" alt="" />
              </div>
              <div className="d-flex">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
          <div className="card-two">
            <h3>Highlights</h3>
            <p>lorem ipsufsjfhnkf kjdbauhnakjnajn kudhnladnkajdakjdnasdkn</p>
            <h3>Amenities</h3>
            <p>kdjjnfsjnsnskndskn</p>
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
              <option value="" disabled selected>
                RoomType...
              </option>
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
            <div className="row-room">
              {this.state.viewRooms}
            </div>
          </div>
        </div>
      </div>) : (<div><ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={8000}/></div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(accommodation);
