import { useReducer } from "react";

import NumberButton from "./components/NumberButton";
import OperationButton from "./components/OperationButton";

export const ACTIONS = {
  ADD_DEGIT: "add_degit",
  ADD_OPERAND: "add_operand",
  DELETE: "delete",
  RESET: "reset",
  RESULT: "result",
};

const initialState = {
  inputScreen: "",
  currentOperand: null,
  previousOperand: null,
  operation: "",
  result: 0,
};

function App() {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case ACTIONS.ADD_DEGIT:
        if (state.previousOperand == null) {
          return {
            ...state,
            inputScreen: `${state.inputScreen || ""}${payload.number}`,
            currentOperand: `${state.currentOperand || ""}${payload.number}`,
          };
        }

        if (state.currentOperand == null) {
          state.currentOperand = `${state.currentOperand || ""}${
            payload.number
          }`;
        }

        return {
          ...state,
          inputScreen: `${state.inputScreen || ""}${payload.number}`,

          previousOperand: evaluate(state),
          currentOperand: null,
        };

      case ACTIONS.ADD_OPERAND:
        if (!state.inputScreen) {
          return state;
        }
        const lastDegit = state.inputScreen.slice(-1);

        if (
          lastDegit === "+" ||
          lastDegit === "-" ||
          lastDegit === "*" ||
          lastDegit === "/" ||
          state.inputScreen.includes(".")
        ) {
          return state;
        }

        if (state.previousOperand == null) {
          return {
            ...state,
            inputScreen: `${state.inputScreen}${payload.operand}`,
            previousOperand: state.currentOperand,
            operation: payload.operand,
            currentOperand: null,
          };
        }

        return {
          ...state,
          inputScreen: `${state.inputScreen}${payload.operand}`,
          operation: payload.operand,
        };

      case ACTIONS.RESET:
        return {
          ...state,
          inputScreen: "",
          currentOperand: null,
          previousOperand: null,
          result: 0,
        };

      case ACTIONS.DELETE:
        if (!state.inputScreen) {
          return state;
        }

        return {
          ...state,
          inputScreen: state.inputScreen.slice(0, -1),
        };
    }
  };

  const evaluate = ({ currentOperand, previousOperand, operation, result }) => {
    const current = parseFloat(currentOperand);
    const prev = parseFloat(previousOperand);

    // console.log(" function curr",currentOperand)
    // console.log("function prev" ,previousOperand)

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default: 
       result = 0
    }


    return result.toString();
  };

  const [{ inputScreen, result, currentOperand, previousOperand }, dispatch] =
    useReducer(reducer, initialState);

  // console.log("current", currentOperand)
  // console.log("prev", previousOperand)

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="result">{result}</div>
          <div className="operationField">{inputScreen}</div>
        </div>
        <div className="board">
          <button
            type="button"
            className="multiCol1"
            onClick={() => dispatch({ type: ACTIONS.RESET, payload: null })}
          >
            AC
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: ACTIONS.DELETE, payload: null })}
          >
            DEL
          </button>
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
