import { useReducer } from "react";

import NumberButton from "./components/NumberButton";
import OperationButton from "./components/OperationButton";

export const ACTIONS = {
  ADD_DEGIT: "add_degit",
  ADD_OPERAND: "add_operand",
  DELETE: "delete",
  RESET: "reset"
};

const operand = ["+", "-", "*", "/"];

function App() {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case ACTIONS.ADD_DEGIT:
        return {
          ...state,
          operationField: `${state.operationField || ""}${payload.number}`,
        };

      case ACTIONS.ADD_OPERAND:
        if (!state.operationField) {
          return state;
        }
        const lastDegit = state.operationField.slice(-1);

        if (
          lastDegit === "+" ||
          lastDegit === "-" ||
          lastDegit === "*" ||
          lastDegit === "/" ||
          state.operationField.includes(".")
        ) {
          return state;
        }

        return {
          ...state,
          operationField: `${state.operationField}${payload.operand}`,
        };

      case ACTIONS.RESET:
        return {
          ...state,
          operationField: null
        }

      case ACTIONS.DELETE:
        return {
          ...state,
          operationField: state.operationField.slice(0, -1)
        }
    }
  };

  const [{ result, operationField }, dispatch] = useReducer(reducer, {});

  console.log(operationField);

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="result">12365</div>
          <div className="operationField">{operationField}</div>
        </div>
        <div className="board">
          <button type="button" className="multiCol1" onClick={() => dispatch({type: ACTIONS.RESET, payload: null})}>
            AC
          </button>
          <button type="button" onClick={() => dispatch({type: ACTIONS.DELETE, payload: null})}>DEL</button>
          <OperationButton operand="/" dispatch={dispatch} />
          <NumberButton number="1" dispatch={dispatch} />
          <NumberButton number="2" dispatch={dispatch} />
          <NumberButton number="3" dispatch={dispatch} />
          <OperationButton operand="*" dispatch={dispatch} />
          <NumberButton number="4" dispatch={dispatch} />
          <NumberButton number="5" dispatch={dispatch} />
          <NumberButton number="6" dispatch={dispatch} />
          <OperationButton operand="+" dispatch={dispatch} />
          <NumberButton number="7" dispatch={dispatch} />
          <NumberButton number="8" dispatch={dispatch} />
          <NumberButton number="9" dispatch={dispatch} />
          <OperationButton operand="-" dispatch={dispatch} />
          <OperationButton operand="." dispatch={dispatch} />
          <NumberButton number="0" dispatch={dispatch} />
          <button type="button" className="multiCol2">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
