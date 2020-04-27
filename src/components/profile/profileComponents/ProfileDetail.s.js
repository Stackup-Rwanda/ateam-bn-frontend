import React, { Component } from 'react';
import { connect } from 'react-redux';
import role from '../../../assets/images/profile/role.png';
import dob from '../../../assets/images/profile/dob.png';
import email from '../../../assets/images/profile/email.png';
import gender from '../../../assets/images/profile/gender.png';
import profile from '../../../assets/images/profile/profile.png';
import language from '../../../assets/images/profile/language.png';
import currency from '../../../assets/images/profile/currency.png';
import departement from '../../../assets/images/profile/departement.png';
import backgroundProfile from '../../../assets/images/profile/backgroundProfile.png';
import { fetchUserProfileDetails, updateUserProfileDetails } from '../../../actions';
import { shortData, componentHelper, checkForm } from '../../../helpers/ProfileHelper/profileHelper';


class ProfileDetails extends Component {
  constructor() {
    super();
    this.state = {
      isUpdateFormShown: false,
      name: '',
      gender: '',
      birthdate: '',
      preferredLanguage: '',
      preferredCurrency: '',
      location: '',
      image: '',
      cover: '',
      inputError: '',
    };
  }

  componentDidMount() {
    const { token } = componentHelper(localStorage.getItem('token'));
    this.props.fetchThisUserDetails(token);
  }

  unHideForm() {
    this.setState({ isUpdateFormShown: true });
  }

  HideForm() {
    this.setState({ isUpdateFormShown: false });
  }

  handleChange(key) {
    this.setState({ [key.target.id]: key.target.value });
    if (key.target.files) {
      this.setState({ [key.target.id]: key.target.files[0] });
    }
  }

  onsubmit() {
    const { token } = componentHelper(localStorage.getItem('token'));
    const formError = checkForm(this.state);
    this.setState({ inputError: formError });
    if (formError === 'Loading...') {
      this.props.updateThisUserDetails(token, this.state);
    }
  }

  render() {
    const componentError = localStorage.getItem('didAmountError');
    const { isUpdateFormShown } = this.state;
    return (
      <div className='headache'>
        {
          this.props.userProfileDetails && componentError === 'null' ? (
            <div className='pain-in-the'>
              <div className="profile">
                {this.props.userProfileDetails.coverPhoto || this.props.userProfileDetails.coverPhoto !== null ? (<img src={this.props.userProfileDetails.coverPhoto} alt="backgroundProfile" className="background-profile" />) : <img src={backgroundProfile} alt="backgroundProfile" className="background-profile" />}
                {/* <div className="empty" /> */}
                <div className="avatar">
                  {this.props.userProfileDetails.profilePhoto || this.props.userProfileDetails.profilePhoto !== null ? (<img src={this.props.userProfileDetails.profilePhoto} alt="profile" />) : <img src={profile} alt="profile" />}
                </div>
                <h4 className="user-name"> {this.props.userProfileDetails.name} </h4>
              </div>
              <div className="request">
                <div className="user-details">
                  <div className="my-column">
                    <p> <img src={gender} alt="gender" />  Gender: {this.props.userProfileDetails.gender} </p>
                    <p><img src={role} alt="role" /> Role: {this.props.userProfileDetails.role} </p>
                    <p><img src={dob} alt="date" /> DoB: {this.props.userProfileDetails.birthdate !== null ? (`${shortData(this.props.userProfileDetails.birthdate)}`) : null}</p>
                    <p><img src={departement} alt="departement" /> Departement: {this.props.userProfileDetails.department} </p>
                    <p><img src={language} alt="language" /> Preferred Language: {this.props.userProfileDetails.preferredLanguage}</p>
                    <p><img src={currency} alt="currency" /> Preferred Currency: {this.props.userProfileDetails.preferredCurrency}</p>
                    <p><img src={email} alt="email" /> Email: {this.props.userProfileDetails.email} </p>
                  </div>
                  <div> <button className="edit-button" id='edit-button' type="submit" onClick={() => { isUpdateFormShown ? (this.HideForm()) : this.unHideForm(); }}> Edit Profile </button> </div>
                  {
                    isUpdateFormShown
                      ? (
                        <div className="form-cover">
                          <div className="form">

                            <h3>UPDATE PROFILE</h3>

                            <div>
                              <input
                                required=""
                                type="text"
                                id="name"
                                className="inputs"
                                placeholder="name"
                                onChange={(id) => this.handleChange(id)}
                                value={this.state.name}
                              />
                            </div>
                            <div>
                              <select id="gender" onChange={(id) => this.handleChange(id)} value={this.state.gender} required="">
                                <option value="">Gender</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                              </select>
                            </div>
                            <div>
                              <input
                                required=""
                                type="date"
                                id="birthdate"
                                className="inputs"
                                placeholder="Birth Date"
                                onChange={(id) => this.handleChange(id)}
                                value={this.state.birthdate}
                              />
                            </div>
                            <div> <input
                              required=""
                              type="text"
                              className="inputs"
                              id="preferredLanguage"
                              placeholder="preferred Language"
                              onChange={(id) => this.handleChange(id)}
                              value={this.state.preferredLanguage}
                            />
                            </div>
                            <div> <input
                              required=""
                              type="text"
                              className="inputs"
                              id="preferredCurrency"
                              placeholder="preferred Currency"
                              onChange={(id) => this.handleChange(id)}
                              value={this.state.preferredCurrency}
                            />
                            </div>
                            <div> <input
                              required=""
                              type="text"
                              id="location"
                              className="inputs"
                              placeholder="Location"
                              onChange={(id) => this.handleChange(id)}
                              value={this.state.location}
                            />
                            </div>

                            <div> <input
                              type="file"
                              id="cover"
                              className="file"
                              onChange={(id) => this.handleChange(id)}
                            />
                            </div>

                            <div> <input
                              id="image"
                              type="file"
                              className="file"
                              onChange={(id) => this.handleChange(id)}
                            />
                            </div>

                            {
                              this.props.updateProfile !== 'null'
                                ? (<div className="resultError"> {this.props.updateProfile} </div>)
                                : (<div className="resultError"> {this.state.inputError} </div>)
                            }
                            <div> <button className="update-button" type="submit" onClick={() => { this.onsubmit(); }}> UPDATE </button> </div>

                          </div>
                        </div>
                      )
                      : null
                  }
                </div>
              </div>
            </div>
          ) : (<h4 className="error">null</h4>)
        }


      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => (
  {
    userProfileDetails: profile.userProfileDetails,
    updateProfile: profile.updateProfile,
    message: profile.message
  }
);

const mapDispatchToProps = (dispatch) => ({
  fetchThisUserDetails: (token) => {
    dispatch(fetchUserProfileDetails(token));
  },
  updateThisUserDetails: (token, userUpdates) => {
    dispatch(updateUserProfileDetails(token, userUpdates));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
