import { useReducer } from "react";

const ACTIONS = {
	ADD_DIGIT: "add-digit",
	CHOOSE_OPERATION: "choose-operation",
	CLEAR: "clear",
	DELETE_DIGIT: "delete-digit",
	EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
	console.log(state, type, payload);
	switch (type) {

		case ACTIONS.ADD_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					currentOperand: payload.digit,
					overwrite: false,
				};
			}
			if (payload.digit === "0" && state.currentOperand === "0") return state;
			if (payload.digit === "." && state.currentOperand?.includes("."))
				return state;
			return {
				...state,
				currentOperand: `${state.currentOperand || ""}${payload.digit}`,
			};

		case ACTIONS.CHOOSE_OPERATION:
			if (state.currentOperand == null && state.previousOperand == null) {
				if (payload.operation === "-") {
					return {
						...state,
						currentOperand: payload.operation,
					};
				} else {
					return state;
				}
			}
			if (state.currentOperand == null) {
				return {
					...state,
					operation: payload.operation,
				};
			}
			if (state.previousOperand == null) {
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
				};
			}
			return {
				...state,
				previousOperand: evaluate(state),
				operation: payload.operation,
				currentOperand: null,
			};

		case ACTIONS.CLEAR:
			return {};

		case ACTIONS.DELETE_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					currentOperand: null,
				};
			}
			if (state.currentOperand == null) {
				return state;
			}
			if (state.currentOperand.length === 1) {
				return {
					...state,
					currentOperand: null,
				};
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

function evaluate({ currentOperand, previousOperand, operation }) {
	const current = parseFloat(currentOperand);
	const prev = parseFloat(previousOperand);
	if (isNaN(prev) || isNaN(current)) return "";
	let computation = "";
	switch (operation) {
		case "+":
			computation = prev + current;
			break;
		case "-":
			computation = prev - current;
			break;
		case "÷":
			computation = prev / current;
			break;
		case "*":
			computation = prev * current;
			break;
	}
	return computation.toString();
}

function Project5() {
	const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
		reducer,
		{}
	);
	const buttonStyle =
		"text-3xl border border-white outline-none bg-slate-300 text-black hover:bg-slate-400 focus:bg-slate-400";
	return (
		<div className='grid grid-cols-custom grid-rows-custom min-h-96 mt-20 justify-center'>
			<div className='col-span-full bg-slate-900 flex justify-around flex-col items-end p-3 break-words break-all min-h-20'>
				<div className='text-slate-400 text-lg'>
					{previousOperand} {operation}
				</div>
				<div className='text-white text-4xl'>
					{currentOperand}
				</div>
			</div>
			<button
				className={`col-span-2 ${buttonStyle}`}
				onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
				AC
			</button>
			<button
				className={buttonStyle}
				onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
				DEL
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({
						type: ACTIONS.CHOOSE_OPERATION,
						payload: { operation: "÷" },
					})
				}>
				÷
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "1" } })
				}>
				1
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "2" } })
				}>
				2
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "3" } })
				}>
				3
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({
						type: ACTIONS.CHOOSE_OPERATION,
						payload: { operation: "*" },
					})
				}>
				*
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "4" } })
				}>
				4
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "5" } })
				}>
				5
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "6" } })
				}>
				6
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({
						type: ACTIONS.CHOOSE_OPERATION,
						payload: { operation: "+" },
					})
				}>
				+
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "7" } })
				}>
				7
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "8" } })
				}>
				8
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "9" } })
				}>
				9
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({
						type: ACTIONS.CHOOSE_OPERATION,
						payload: { operation: "-" },
					})
				}>
				-
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "." } })
				}>
				.
			</button>
			<button
				className={buttonStyle}
				onClick={() =>
					dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "0" } })
				}>
				0
			</button>
			<button
				className={`col-span-2 ${buttonStyle}`}
				onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
				=
			</button>
		</div>
	);
}

export default Project5;
