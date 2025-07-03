import React from "react";

// ////Example of UseState Hook

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
// creating the context
//providing the context
// consuming the context
export default function App() {
  return (
    <div>
      <h3></h3>
    </div>
  )
}
