import React, { useState, useEffect, useContext } from 'react';

// useState allows functional components to manage state. 
// It returns a pair of values: the current state and a function to update that state.Here's an example:
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}


// useEffect allows you to perform side effects in functional components, 
// such as fetching data, subscribing to events, or manipulating the DOM.
// It takes a function as its first argument and an optional array of dependencies 
// as its second argument.Here's an example of fetching data using useEffect:
function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}


// useContext allows you to access values from the React context within a functional component. 
// It takes a context object created by React.createContext as its argument and returns 
// the current context value.Here's an example:
const ThemeContext = React.createContext('light');

function ThemedText() {
  const theme = useContext(ThemeContext);

  return <p className={theme}>This is a themed text.</p>;
}


// useReducer is an alternative to useState that allows you to manage complex state logic by 
// specifying a reducer function. The reducer function takes the current state and an action as arguments, 
// and returns a new state based on the action type.Here's an example:
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unsupported action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}



// useCallback is used to memoize a function instance so that it is not re-created on every render. 
// It can be useful when passing callbacks to child components to prevent unnecessary re - renders.Here's an example:
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}


// useRef allows you to create a mutable value that persists across renders. 
// It returns a mutable ref object with a.current property.
// The ref value can hold a reference to a DOM element or any other value.Here's an example:
import React, { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
// In this example, the inputRef is created using useRef, and the .current property is assigned 
// to the ref prop of the input element.This allows focusing on the input element once it is mounted using the useEffect hook.