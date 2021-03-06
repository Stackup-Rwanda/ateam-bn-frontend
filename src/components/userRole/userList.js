/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { adminGetUserAction, AssignUserRoleAction } from '../../actions/user';
import Popup from './rolePopup';
import './style.scss';
import UsersPagination from './usersPagination';
import { lineManager } from '../../helpers/lineManagerHelper';
import '../Approvals/TableSection/TableSection.scss';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isOpen: false,
      value: '',
      username: null,
      message: '',
      errors: {},
    };
  }

  componentDidMount() {
    const { adminGetUserAction } = this.props;
    adminGetUserAction();
  }


  chooseRole = (username) => {
    this.setState({ isOpen: true, username });
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  editRole = (e) => {
    e.preventDefault();

    const { AssignUserRoleAction } = this.props;
    AssignUserRoleAction(this.state.value, this.state.username);
    window.location.reload(false);
    this.setState({ isOpen: false, value: '' });
  }

  render() {
    const { Next, Previous, loading } = this.props;
    const users = this.props.listOfUsers.sort((a, b) => (a.id - b.id));
    const mainJsx = loading ? (
      <div className="loader-section" data-test="LoaderComponent">
        <ClipLoader
          css={ { display: 'block', margin: ' 2rem 20rem ' }}
          size={150}
          color={'#3AB397'}
          loading={loading}
        />
      </div>
    ) : (null);
    const allUsers = users.map((user, index) => {
      const managerData = lineManager(user.lineManager, users);
      const data = { ...managerData };
      return (< tr key={ index } >
        <td> { user.id }</td>
        <td>{ user.name } </td>
        <td>{ user.email } </td>
        <td>{ user.username } </td>
        <td>{ data.name } </td>
        <td>{ user.role } </td>
        <td> <input className="square" name="checkbox" type="checkbox" /></td>
        <td>
          <input className="change" name="checkbox" type="submit" onClick={ () => this.chooseRole(user.username) } value="Change" /></td>

      </tr >
      );
    });

    return (

    <div>
{ mainJsx }
          <table className="users">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>Names</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>line manager</th>
                  <th>Role</th>
                  <th >Check</th>
                  <th className="role">Change Role</th>
                </tr >
              </thead>
              <tbody>
              <>
                  {allUsers}
                  </>
              </tbody>
            </table>


        <div >

          <Popup isOpen={ this.state.isOpen }>
            <div className="popout">
              <form className="popup-form" onSubmit={ this.editRole } >

                <label htmlFor="role">Change Role</label>
                <select className='popup-select' name="role" onChange={ this.onChange } value={ this.state.value }>
                    <option value="none" >select role</option>
                    <option value="requester">REQUESTER</option>
                    <option value="Manager">MANAGER</option>
                    <option value="Traveladmin">TRAVEL ADMINISTRATOR</option>
                  <option value="superadmin"> SUPER ADMINISTRATOR</option>
                </select>
                <input className="popupi" type="submit" value="Save" />
              </form>
            </div>
          </Popup>
        </div>
        <UsersPagination Next={ Next } Previous={ Previous } />
    </div>
    );
  }
}

const mapStateToProps = ({
  user: {
    listOfUsers, editRole, Next, Previous,
    getUsers: { loading, message, errors }
  }
}) => ({
  loading,
  message,
  errors,
  listOfUsers,
  editRole,
  Next,
  Previous,
});

export default connect(mapStateToProps, { adminGetUserAction, AssignUserRoleAction })(UserList);
