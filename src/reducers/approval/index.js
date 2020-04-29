import approvalReducer from './approval';
import approveReducer from './approve';
import rejectReducer from './reject';
import initialState from '../../store/initialState';

export default (state = initialState, action) => {
  const approval = approvalReducer(state, action);
  const approve = approveReducer(state, action);
  const reject = rejectReducer(state, action);
  return (
    approval
      || reject
      || approve
      || state
  );
};
