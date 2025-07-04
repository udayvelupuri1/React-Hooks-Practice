import React, { useState } from "react";

// ////1)Example of UseState Hook

// // This hook is used to manage state in functional components.
// // It allows you to add state to a functional component without converting it to a class component.
// // The useState hook returns an array with two elements: the current state value and a function
// // to update that state value. You can use array destructuring to assign these values to variables
// // for easier access.
// // In this example, we create a simple counter application that increments a count when a button is clicked.
// // We also have an input field to capture the user's name, which is displayed alongside the count
// const App = () => {
//   const [count, setCount] = React.useState(0);
//   const [name, setName] = React.useState("");
//   //we can aslo achieve the same thing using objects
//   const [details, setDetails] = React.useState({ count: 0, name: "" });
//   function increment() {
//     setDetails((prev) => {
//       return { ...prev, count: prev.count + 1, name: name };
//     });
//   }
//   return (
//     <div>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <h1>
//         {details.name} has clicked {details.count} times!
//       </h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default App;






























//// Example of UseEffect Hook

//useEffect is a hook that allows you to perform side effects in functional components.
// It is similar to the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle
// methods in class components. You can use useEffect to fetch data, update the DOM,
// set up subscriptions, and perform other side effects in your functional components.
//side effects are operations that can affect other components or the outside world,
// such as fetching data from an API, updating the DOM,timer functions setTimeout & setInterval or subscribing to events.

//useEffect(callback, dependencies) is a hook that allows you to perform side effects in functional components.

//1) UseEfect without dependencies
// This will run the effect after every render(runs for every change), similar to componentDidUpdate in class components.

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   React.useEffect(() => {
//     document.title = `${count} new messages!`;
//   });
//   return (
//     <div>
//       <h3>{count} new messages!</h3>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

//2) useEffect with empty array as dependencies
// export default function App() {
//   const [count, setCount] = React.useState(0);
//   React.useEffect(() => {
//     document.title = `${count} new messages!`;
//   },[]); // This will run the effect only once, similar to componentDidMount in class components.
//   return (
//     <div>
//       <h3>{count} new messages!</h3>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

//3) useEffect with dependencies or variable

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   const [otherCount, setOtherCount] = React.useState(5);
//   React.useEffect(() => {
//     document.title = `${otherCount} new messages!`;
//   },[otherCount]); // This will run the effect only once, similar to componentDidMount in class components.
//   return (
//     <div>
//       <h3>{count} new messages!</h3>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <h3>Other Count : {otherCount}</h3>
//       <button onClick={() => setOtherCount(otherCount + 5)}>Increment by 5</button>
//     </div>
//   );
// }

// //4) cleanup function In UseEffect
// export default function App() {
//   const [time,setTime] = React.useState(0);
//   React.useEffect(() => {
//     const timer = setInterval(()=>{
//       setTime(time+1)
//     },1000); // This will run the effect every second, similar to componentDidUpdate in class components.
//     // The cleanup function will be called when the component unmounts or before the effect runs
//     // again. It is used to clean up any resources that were created in the effect,
//     // such as timers, subscriptions, or event listeners.
//     // In this case, we clear the interval when the component unmounts or before the
//     // effect runs again to prevent memory leaks.
//     return () => {
//       clearInterval(timer);
//     };
//   });
//   return (
//     <div>
//       <h3>{time} in seconds!</h3>
//     </div>
//   );
// }
































////3) useContext Hook
// The useContext hook is used to access the context value in a functional component.
//create context require 3 simple steps:
//useContext is used to manage global state in a React application.
// It allows you to share data between components without having to pass props down through every level of the component tree.
// This is useful for managing global state, such as user authentication, theme settings,
// or any other data that needs to be accessed by multiple components in your application.
// It is a simpler alternative to using Redux or other state management libraries for smaller applications.
// It is used to access the context value in a functional component.
// It takes the context object created by createContext as an argument and returns the current context value

// creating the context
//providing the context
// consuming the context
// import MainComponent from "./MainComponent";
// export const LoginContext = React.createContext();
// import LoginContextProvider from "./context/LoginContextProvider";

// export default function App() {
//   return (
//     <LoginContextProvider>
//       <MainComponent />
//     </LoginContextProvider>
//   )
// }























////4) useRef Hook

////UseRef allows us to access DOM elements.
////for creating mutable variables which will not re-render the component.

//example of useRef to create mutable variables that do not cause re-renders

// const App = () => {
//     const [name, setName] = React.useState("");
//     const count = React.useRef(0);
//     React.useEffect(() =>{count.current = count.current + 1});
//     return(
//         <div>
//             <input type = 'text' onChange = {(e)=> setName(e.target.value)} />
//             <h2> Name : {name}</h2>
//             <h2> Count : {count.current}</h2>
//         </div>
//     )
// }

// export default App

//example of useRef to access DOM elements

// const App = () => {
//     const inputEle = React.useRef();
//     const handleClick = () => {
//         console.log("Function Run")
//         inputEle.current.style.width = "300px";
//         inputEle.current.focus();
//     }
//     return(
//         <div>
//             <input type = 'text' ref = {inputEle} />
//             <button onClick = {handleClick}>Click Here</button>
//         </div>
//     )
// }

// export default App
























// ////5) useReducer Hook/
// //// useReducer is a hook that allows you to manage complex state logic in functional components.(state management)
// // It is an alternative to useState and is particularly useful when you have multiple state variables that depend on each other or when the state logic is complex.

// function App() {
//   const [state, dispatch] = React.useReducer(reducer, initialState); //syntax: const [state, dispatch] = useReducer(reducer, initialState);

//   const increment = () => {
//     dispatch({ type: ACTION.INCREMENT });
//   };
//   const decrement = () => {
//     dispatch({ type: ACTION.DECREMENT });
//   };
//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default App;

// const ACTION = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement",
// };

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTION.INCREMENT:
//       return { count: state.count + 1 };
//     case ACTION.DECREMENT:
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };













//////6) uselAYout Hook

//useLayoutEffect works exactly the same as useEffect(Also the same Syntax).
//But the difference is "When it's run".
//useEffect Runs After te DOM has been painted.
//useLayoutEffect Runs Before the DOM has been painted on the browser.
//whenever we want to run code before the DOM is printed (like height,width, anything related to DOM or layout),
//it runs synchronously after all DOM mutations. (line by line execution)

// React calculate this component -> useLayoutEffect -> react prints all elements on the browser -> useEffect


// export default function App() {
//     const [toggle, setToggle] = React.useState(false);
//     const textRef = React.useRef();
//     React.useLayoutEffect(() =>{
//         if (textRef.current != null){
//             const dimension = textRef.current.getBoundingClientRect();
//             textRef.current.style.paddingTop = `${dimension.width}px`;

//         }
//     },[toggle])
//   return (
//     <div>
//         <button onClick={() => setToggle(!toggle)}>Toggle</button>
//         {toggle && <h1 ref={textRef}>Hello World</h1>}
//     </div>
//   )
// }
















//////7) useMemo Hook
// useMemo is a hook that allows you to memoize expensive calculations in functional components.

/////8) useCallback Hook

/////9) custom Hooks

