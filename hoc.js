// The Higher-Order Component (HOC) pattern in React allows you to reuse component 
// logic by wrapping a component with a higher - order function. The HOC takes a 
// component as an argument and returns a new component with additional functionality.
// Here's an example that demonstrates the HOC pattern:

import React, { Component } from 'react';

// Higher-Order Component (HOC) that adds logging functionality
function withLogger(WrappedComponent) {
  class WithLogger extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted.`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogger;
}

// Component to be wrapped with the HOC
class MyComponent extends Component {
  render() {
    return <div>My Component</div>;
  }
}

// Wrap the component with the HOC
const MyComponentWithLoggr = withLogger(MyComponent);

// Parent component that uses the wrapped component
function App() {
  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      <MyComponentWithLoggr />
    </div>
  );
}

// In this example, the withLogger HOC is created as a higher-order function that takes a component as an argument. 
// It returns a new component, WithLogger, which wraps the provided component, WrappedComponent.
// The WithLogger component adds logging functionality by logging messages when the wrapped component mounts and unmounts.

// The MyComponent is a regular component that will be wrapped by the withLogger HOC. 
// The MyComponentWithLogger is the wrapped component that is the result of calling withLogger(MyComponent), 
// which includes the logging functionality.

// Finally, the App component renders the MyComponentWithLogger component, which is the wrapped component with 
// the additional logging functionality.

// HOCs can be useful for implementing cross-cutting concerns, such as authentication, authorization, 
// or logging, that need to be applied to multiple components.
// By wrapping components with HOCs, you can reuse code and add functionality without modifying the original components.



// The Higher-Order Component (HOC) pattern can also be implemented using functional components and hooks in React. 
// Here's an example that demonstrates the HOC pattern with functional components:
import React, { useEffect } from 'react';

// Higher-Order Component (HOC) that adds logging functionality
function withLogger(WrappedComponent) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted.`);
      return () => {
        console.log(`Component ${WrappedComponent.name} will unmount.`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}

// Component to be wrapped with the HOC
function MyComponent() {
  return <div>My Component</div>;
}

// Wrap the component with the HOC
const MyComponentWithLogger = withLogger(MyComponent);

// Parent component that uses the wrapped component
function App() {
  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      <MyComponentWithLogger />
    </div>
  );
}

// In this functional component example, the withLogger HOC is a function that takes a 
// component as an argument and returns a new function component, WithLogger.The WithLogger 
// component uses the useEffect hook to add logging functionality.The useEffect hook runs 
// when the component mounts and returns a cleanup function that runs when the component unmounts.

// The MyComponent is a regular functional component that will be wrapped by the withLogger HOC. 
// The MyComponentWithLogger is the wrapped component that is the result of calling withLogger(MyComponent), 
// which includes the logging functionality.

// Finally, the App component renders the MyComponentWithLogger component, 
// which is the wrapped component with the additional logging functionality.

// Using functional components and hooks, you can achieve the same HOC pattern with a more concise and 
// functional programming style in React.