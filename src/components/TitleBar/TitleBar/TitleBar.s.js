import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../TitleBar.scss';
import { searchData } from '../../../actions';
import searchBtn from '../../../assets/images/profile/search.png';
import { checkSearch } from '../../../helpers/ProfileHelper/profileHelper';

class TitleBar extends Component {
  constructor() {
    super();
    this.state = { search: '', searchInput: '' };
  }

  handleChange(key) {
    this.setState({ [key.target.id]: key.target.value });
  }

  onsubmit() {
    const searchError = checkSearch(this.state);
    this.setState({ searchInput: searchError });
    if (searchError === 'Loading...') {
      this.props.search(localStorage.getItem('token'), this.state);
    }
  }

  render() {
    return (
      <div className="title">
        <div className="title-text">
          <span>Barefoot Nomad</span>
        </div>
        <div className="app-search">
          <input
            id="search"
            type="text"
            placeholder="Type here to Search"
            onChange={(id) => this.handleChange(id)} />
          <img
            src={searchBtn}
            alt="search btn"
            onClick={() => { this.onsubmit(); }} />{console.log(this.props.searchErrors)}

          {
            this.props.searchErrors && this.props.searchErrors !== 'null'
              ? (<span className="search-error"> {this.props.searchErrors} </span>)
              : this.state.searchInput !== 'Loading...'
                ? (<span className="search-error"> {this.state.searchInput} </span>)
                : this.state.searchInput === 'Loading...'
                  ? (<span className="search-error"> searching ...</span>)
                  : null
          }

        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ requests }) => (
  { searchErrors: requests.searchErrors }
);
const mapDispatchToProps = (dispatch) => (
  {
    search: (token, request) => {
      dispatch(searchData(token, request));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
