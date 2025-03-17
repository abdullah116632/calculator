import { ACTIONS } from "../actions/action";
import { evaluate } from "../util/calculate";


export const  reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        console.log("first if")
        return {
          ...state,
          currentOperand: payload.number,
          overwrite: false,
        };
      }

      if (payload.number === "0" && state.currentOperand === "0") {
        return state;
      }

      if (payload.number === "." && state.currentOperand.includes(".")) {
        return state;
      }
      console.log(state)
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.number}`,
      };

    case ACTIONS.ADD_OPERAND:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operand,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operand,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operand,
        currentOperand: null,
      };

    case ACTIONS.RESET:
      return {};

    case ACTIONS.DELETE:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }

      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
}
