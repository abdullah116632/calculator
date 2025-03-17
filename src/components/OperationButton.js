import { ACTIONS } from "../actions/action";

const OperationButton = ({ operand, dispatch }) => {
  return (
    <button
      type="button"
      onClick={() =>
        dispatch({ type: ACTIONS.ADD_OPERAND, payload: { operand } })
      }
    >
      {operand}
    </button>
  );
};

export default OperationButton;
