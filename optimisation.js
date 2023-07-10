// Memoization:
// Memoization is a technique that allows you to cache the result of a function based on its input. 
// In React, you can use the React.useMemo hook to memoize the value of a computation and prevent 
// unnecessary re - computation on each render.
import React from 'react';

function ExpensiveComponent({ propA, propB }) {
  const memoizedValue = React.useMemo(() => computeExpensiveValue(propA, propB), [propA, propB]);

  // Use the memoized value in the component

  return <div>{memoizedValue}</div>;
}
// In this example, the computeExpensiveValue function performs a costly computation based on propA and propB. 
// By wrapping the function call with React.useMemo, the value is memoized and will only be re - computed 
// when either propA or propB changes.



// shouldComponentUpdate / React.memo:
// The shouldComponentUpdate lifecycle method (for class components) and the React.memo higher-order 
// component(for functional components) allow you to optimize rendering by preventing unnecessary 
// re - renders when props have not changed.
// Class component using shouldComponentUpdate
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Perform a custom check to determine if re-render is needed
    return this.props.propA !== nextProps.propA || this.props.propB !== nextProps.propB;
  }

  render() {
    // Render the component
  }
}

// Functional component using React.memo
function MyComponent({ propA, propB }) {
  // Render the component
}

export default React.memo(MyComponent);
// In both examples, the shouldComponentUpdate method or React.memo wraps the component and performs a custom 
// check to determine if a re - render is necessary.By comparing the current props to the next props, 
// you can selectively allow or prevent re - renders based on the relevant prop changes.



// PureComponent:
// The PureComponent class component in React is a base class that performs a shallow prop and state 
// comparison to determine if a re - render is needed.It automatically implements the shouldComponentUpdate 
// method with a shallow equality check.
class MyComponent extends React.PureComponent {
  render() {
    // Render the component
  }
}
// By using PureComponent, you can optimize rendering performance by skipping re-renders when the props and 
// state have not changed at a shallow level.However, be cautious when using PureComponent with props that 
// are objects or arrays, as a shallow equality check may not detect changes within those complex data structures.

// These optimization techniques help improve rendering performance in React applications by reducing unnecessary re-renders. 
// By memoizing computations, implementing shouldComponentUpdate or React.memo, or using PureComponent, you can ensure that 
// components only re - render when necessary, based on the relevant prop or state changes.This can result in faster rendering 
// and improved overall performance.