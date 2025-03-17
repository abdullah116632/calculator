import { ACTIONS } from "../actions/action";

const NumberButton = ({ number, dispatch }) => {
  return (
    <button
      type="button"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { number } })}
    >
      {number}
    </button>
  );
};

export default NumberButton;
