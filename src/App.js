import { useReducer } from "react";
import NumberButton from "./components/NumberButton";
import OperationButton from "./components/OperationButton";
import { reducer } from "./reducer/reduce";
import { ACTIONS } from "./actions/action";
import { formatOperand } from "./util/format";


function App() {

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="result">{formatOperand(previousOperand)} {operation}{" "}</div>
          <div className="operationField">{formatOperand(currentOperand)}</div>
        </div>
        <div className="board">
          <button
            type="button"
            className="multiCol1"
            onClick={() => dispatch({ type: ACTIONS.RESET })}
          >
            AC
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: ACTIONS.DELETE })}
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
          <NumberButton number="." dispatch={dispatch} />
          <NumberButton number="0" dispatch={dispatch} />
          <button
            type="button"
            className="multiCol2"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
