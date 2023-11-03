import { ACTIONS } from "../App";

const NumberButton = ({number, dispatch}) => {
  return (
    
      <button type="button" onClick={() => dispatch({type: ACTIONS.ADD_DEGIT, payload: {number}})}>{number}</button>
    
  );
}

export default NumberButton;
