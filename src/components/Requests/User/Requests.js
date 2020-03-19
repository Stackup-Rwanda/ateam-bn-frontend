import React, { Component } from 'react'
import './Requests.scss';
import logo from '../../../assets/images/logo.png';
import home from '../../../assets/images/home.png';
import menu from '../../../assets/images/menu.png';
import logout from '../../../assets/images/logout.png';
import account from '../../../assets/images/account.png';
import setting from '../../../assets/images/setting.png';
import image from '../../../assets/images/1140-hikers-in-mountains.jpg';

export default class Requests extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="menu">
          {/* <hr /> */}
          <a href="/"><img className="logo" src={logo} alt="logo" /></a>
          <div className="options">
            <a href="/"><img className="menus" src={home} alt="home" /></a>
            <a href="/"><img className="menus" src={account} alt="account" /></a>
            <a href="/"><img className="menus" src={menu} alt="menu" /></a>
            <a href="/"><img className="menus" src={setting} alt="setting" /></a>
          </div>
          <div className="logout">
            <a href="/"><img src={logout} alt="logout" /></a>
          </div>
        </div>
        <div className="main">
          <div className="title">
            <div className="title-text">
              <span>Barefoot Nomad</span>
            </div>
            <div className="title-search">
              <input type="text" placeholder="Type here to Search" />
            </div>
          </div>
          <button>Add Trip</button>
          <div className="requests">
            <div class="trip">
              <img alt="trip Image" src={image} />
              <span className="status pending">Pending</span>
              <div className="details">
                <p className="details-place">Paris</p>
                <p className="details-departure">
                  Departure date: 2020-02-23
                </p>
                <p className="details-return">
                  Return date: 2020-03-01
                </p>
                <p className="details-city">City:</p>
                <p className="details-address">Kampala, Uganda, Africa</p>
              </div>
            </div>
            <div class="trip">
              <img alt="trip Image" src={image} />
              <span className="status approved">Approved</span>
              <div className="details">
                <p className="details-place">Paris</p>
                <p className="details-departure">
                  Departure date: 2020-02-23
                </p>
                <p className="details-return">
                  Return date: 2020-03-01
                </p>
                <p className="details-city">City:</p>
                <p className="details-address">Kampala, Uganda, Africa</p>
              </div>
            </div>
            <div class="trip">
              <img alt="trip Image" src={image} />
              <span className="status rejected">Rejected</span>
              <div className="details">
                <p className="details-place">Paris</p>
                <p className="details-departure">
                  Departure date: 2020-02-23
                </p>
                <p className="details-return">
                  Return date: 2020-03-01
                </p>
                <p className="details-city">City:</p>
                <p className="details-address">Kampala, Uganda, Africa</p>
              </div>
            </div>
            <div class="trip">
              <img alt="trip Image" src={image} />
              <span className="status approved">Approved</span>
              <div className="details">
                <p className="details-place">Paris</p>
                <p className="details-departure">
                  Departure date: 2020-02-23
                </p>
                <p className="details-return">
                  Return date: 2020-03-01
                </p>
                <p className="details-city">City:</p>
                <p className="details-address">Kampala, Uganda, Africa</p>
              </div>
            </div>
            <div class="trip">
              <img alt="trip Image" src={image} />
              <span className="status rejected">Rejected</span>
              <div className="details">
                <p className="details-place">Paris</p>
                <p className="details-departure">
                  Departure date: 2020-02-23
                </p>
                <p className="details-return">
                  Return date: 2020-03-01
                </p>
                <p className="details-city">City:</p>
                <p className="details-address">Kampala, Uganda, Africa</p>
              </div>
            </div>
            <div class="trip">
              <img alt="trip Image" src={image} />
              <span className="status pending">Pending</span>
              <div className="details">
                <p className="details-place">Paris</p>
                <p className="details-departure">
                  Departure date: 2020-02-23
                </p>
                <p className="details-return">
                  Return date: 2020-03-01
                </p>
                <p className="details-city">City:</p>
                <p className="details-address">Kampala, Uganda, Africa</p>
              </div>
            </div>
          </div>
          <div className="pagination">
            <input type="button" value="<"/>
            <span>3</span>
            <input type="button" value=">"/>
          </div>
        </div>
        <div className="right-sidebar">Hagfsgftagshsg</div>
      </div>
    )
  }
}
