import React from 'react';
import './accommodation.scss';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import bookRoom from '../../actions/rooms/bookRoomActions';
import { componentHelper } from '../../helpers/ProfileHelper/profileHelper';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
    };
  }

  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line max-len
    if (nextProps.message) { toast.info(nextProps.message); } else if (nextProps.bookRoomError) toast.error(nextProps.bookRoomError);
  }

  handleClick = async (e) => {
    e.preventDefault();
    const { token } = componentHelper(localStorage.getItem('token'));
    const { roomId } = this.props;
    const { BookRoom } = this.props;

    try {
      const from = new Date(this.state.from).toISOString();
      const to = new Date(this.state.to).toISOString();

      BookRoom(token, { from, to, roomId });
    } catch (error) {
      toast.error('Check in and Checkout must not be empty');
    }
  }

  render() {
    return (
      <div className="popup">
      <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={false}/>
        <div className="popup-inner ">
          <div className="btn-closePopup">
              <button onClick={this.props.closePopup}>
                  <FontAwesomeIcon icon={faTimes} size="2x" className="grey-color"/>
              </button>
              <hr/>
              </div>
          <div className= "mar-auto">
          <h2>Add your Check in and Check out Date </h2>
          <div className="row">
              <div className="form-field-sign m-bottom">
                <label>Check in</label>
                <input
                  type="date"
                  name="from"
                  className="lg-input border-0 bg-half-white-sign margin-r"
                  placeholder="checkin"

                  onChange={this.handlechange}
                />
              </div>
              <div className="form-field-sign m-bottom">
                <label>Checkout</label>
                <input
                  type="date"
                  name="to"
                  className="lg-input border-0 bg-half-white-sign margin-r"
                  placeholder="checkout"

                  onChange={this.handlechange}
                />
              </div>
            </div>
          <button onClick={ this.handleClick } data-test="btn">Book</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ room }) => ({
  message: room.message,
  bookRoomError: room.bookRoomError
});

// eslint-disable-next-line max-len
const mapDispatchToProps = (dispatch) => ({ BookRoom: (token, data) => dispatch(bookRoom(token, data)) });

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
