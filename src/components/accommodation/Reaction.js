import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import {
  faThumbsDown,
  faThumbsUp,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import './accommodation.scss';
import { componentHelper } from '../../helpers/ProfileHelper/profileHelper';
import {
  createReaction,
  getExistingReactions,
  countReactions,
} from '../../actions/reactions/reactionAction';

class Reaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reactionType: '',
      fire: false,
      like: false,
      hate: false,
      likes: '',
      fires: '',
      hates: '',
    };
  }

  handleClickLike = async (e) => {
    e.preventDefault();
    const { token } = componentHelper(localStorage.getItem('token'));
    const { accommodationId } = this.props;
    if (await createReaction(token, accommodationId, { reactionType: 'like' })) {
      await this.countReactions();
      this.state.like ? this.setState({ like: false }) : this.setState({ like: true });
      this.setState({ hate: false });
    } else {
      toast.error('reaction has not been created');
    }
  };

  handleClickUnLike = async (e) => {
    e.preventDefault();
    const { token } = componentHelper(localStorage.getItem('token'));
    const { accommodationId } = this.props;
    if (await createReaction(token, accommodationId, { reactionType: 'hate' })) {
      await this.countReactions();
      this.state.hate ? this.setState({ hate: false }) : this.setState({ hate: true });
      this.setState({ like: false });
      this.setState({ fire: false });
    } else {
      toast.error('reaction has not been created');
    }
  };

  handleClickFire = async (e) => {
    e.preventDefault();
    const { token } = componentHelper(localStorage.getItem('token'));
    const { accommodationId } = this.props;
    if (await createReaction(token, accommodationId, { reactionType: 'fire' })) {
      await this.countReactions();
      this.state.fire ? this.setState({ fire: false }) : this.setState({ fire: true });
      this.setState({ hate: false });
    } else {
      toast.error('reaction has not been created');
    }
  };

  handleExistingReactions = (existingReactions) => {
    existingReactions.forEach((reaction) => {
      if (reaction.reactionType === 'like') {
        this.setState({ like: true });
      } else if (reaction.reactionType === 'hate') {
        this.setState({ hate: true });
      } else if (reaction.reactionType === 'fire') {
        this.setState({ fire: true });
      }
    });
  };

  countReactions = async () => {
    const token = localStorage.getItem('token');

    this.setState({
      likes: await countReactions(token, 'like', this.props.accommodationId),
      fires: await countReactions(token, 'fire', this.props.accommodationId),
      hates: await countReactions(token, 'hate', this.props.accommodationId),
    });
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    this.handleExistingReactions(await getExistingReactions(token, this.props.accommodationId));
    this.countReactions();
  }

  render() {
    return (
      <div className="reactions ">
        <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={8000}/>
       <div className='d-grid'>
        <FontAwesomeIcon
          onClick={this.handleClickFire}
          icon={faFire}
          data-test='fire'
          size="2x"
          className={this.state.fire ? 'react-fire' : 'reaction'}
        />
        <span>{this.state.fires}</span>
        </div>
        <div className='d-grid'>
        <FontAwesomeIcon
          onClick={this.handleClickLike}
          icon={faThumbsUp}
          size="2x"
          className={this.state.like ? 'react-like' : 'reaction'}
          data-like-test='like'
        />
        <span>{this.state.likes}</span>
        </div>
        <div className='d-grid'>
        <FontAwesomeIcon
          onClick={this.handleClickUnLike}
          icon={faThumbsDown}
          size="2x"
          className={this.state.hate ? 'react-hate' : 'reaction'}
          data-hate-test='hate'
        />
        <span>{this.state.hates}</span>
        </div>
      </div>
    );
  }
}


export default Reaction;
