import NumberButton from "./components/NumberButton";
import OperationButton from "./components/OperationButton";


function App() {
  return (
    <div className="App">
    <div className="calculator">
      <div className="display">
        <div className="result">12365</div>
        <div className="operationField">165433+6166+89</div>
      </div>
      <div className="board">
        <button type="button" className="multiCol1">AC</button>
        <button type="button">DEL</button>
        <OperationButton operand="/" />
        <NumberButton number="1" />
        <NumberButton number="2" />
        <NumberButton number="3" />
        <OperationButton operand="*" />
        <NumberButton number="4" />
        <NumberButton number="5" />
        <NumberButton number="6" />
        <OperationButton operand="+" />
        <NumberButton number="7" />
        <NumberButton number="8" />
        <NumberButton number="9" />
        <OperationButton operand="-" />
        <NumberButton number="." />
        <NumberButton number="0" />
        <button type="button" className="multiCol2">=</button>

      </div>
    </div>
    </div>
  );
}

export default App;
