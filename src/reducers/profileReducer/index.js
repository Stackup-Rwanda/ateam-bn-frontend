import profile from '../../store/initialState';
import profileUserDetailsReducer from './profileUserDetailsReducer';


export default (state = profile, action) => {
  const Profile = profileUserDetailsReducer(state, action);
  return (Profile || state);
};
