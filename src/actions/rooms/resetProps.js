import { RESET_PROPS_TONULL } from '../../actionTypes/roomActionsType';

const resetProps = () => (dispatch) => dispatch({ type: RESET_PROPS_TONULL });

export default resetProps;
